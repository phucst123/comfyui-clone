import os
import shutil
import asyncio

from comfy_runner.gen_status_tracker import GenerationStatusTracker
from web_search.example_magentic_one_helper import get_answer, DOWNLOAD_DIR

from constants import (
    COMFY_BASE_PATH,
    COMFY_MODELS_BASE_PATH,
    MODEL_DOWNLOAD_PATH_LIST,
    MODEL_FILETYPES,
    OPTIONAL_MODELS,
)

from comfy_runner.common import (
    convert_to_relative_path,
    search_file,
    get_default_save_path
)
from comfy_runner.file_downloader import FileStatus, ModelDownloader
from comfy_runner.logger import LoggingType, app_logger


class ComfyRunner:
    def __init__(self):
        self.model_downloader = ModelDownloader(MODEL_DOWNLOAD_PATH_LIST)
        self.gen_status_tracker = GenerationStatusTracker()



    async def download_models(
        self,
        workflow,
        extra_models_list,
        ignore_model_list=[],
        client_id=None,
    ) -> dict:
        models_downloaded = False
        self.model_downloader.load_comfy_models()
        models_to_download = []
        models_to_path = {}

        for node in workflow:
            if "inputs" in workflow[node]:
                for input in workflow[node]["inputs"].values():
                    if (
                        isinstance(input, str)
                        and any(input.endswith(ft) for ft in MODEL_FILETYPES)
                        and not any(input.endswith(m) for m in OPTIONAL_MODELS)
                    ):
                        models_to_download.append(input)
                        models_to_path[input] = workflow[node]["class_type"]

        # filtering ignored models
        m_l = []
        ignored_models_found = []
        ignored_model_names_map = {m["filename"]: m for m in ignore_model_list}
        for m in models_to_download:
            if m in ignored_model_names_map:
                ignored_models_found.append(ignored_model_names_map[m])
            else:
                m_l.append(m)
        models_to_download = m_l

        models_not_found = []
        for m in ignored_models_found:
            model_path = (
                convert_to_relative_path(m["filepath"], COMFY_MODELS_BASE_PATH)
                if "filepath" in m
                else None
            )
            if model_path and not os.path.exists(model_path):
                models_not_found.append({"model": m["filename"], "similar_models": []})
            else:
                app_logger.log(LoggingType.DEBUG, f"Ignoring model {m['filename']}")

        m_l = []
        for model in models_to_download:
            _, model = os.path.split(model)
            _, _, base_path = self.model_downloader.get_model_details(model)
            base_path = os.path.basename(base_path) if base_path else None
            if not search_file(
                model,
                COMFY_MODELS_BASE_PATH,
                parent_folder=base_path,
            ):
                m_l.append(model)
        models_to_download = m_l

        for model in models_to_download:
            if self.gen_status_tracker.is_generation_cancelled(client_id):
                break

            status, similar_models, file_status = self.model_downloader.download_model(
                model
            )
            if not status:
                models_not_found.append(
                    {
                        "model": model,
                        "similar_models": similar_models,
                    }
                )
            elif file_status == FileStatus.NEW_DOWNLOAD.value:
                models_downloaded = True

        # downloading extra models
        for model in extra_models_list:
            if self.gen_status_tracker.is_generation_cancelled(client_id):
                break

            status, file_status = self.model_downloader.download_file(
                model["filename"],
                model["url"],
                model["dest"],
            )

            if status:
                models_downloaded = (
                    True if file_status == FileStatus.NEW_DOWNLOAD.value else False
                )
                for m in models_not_found:
                    if m["model"] == model["filename"]:
                        models_not_found.remove(m)
                        break

        # checking if models_not_found are already inside comfy
        for model in models_not_found:
            if search_file(model["model"].split("/")[-1], COMFY_BASE_PATH):
                models_not_found.remove(model)
                
        for model in models_not_found:
            model_name = model["model"].split("/")[-1]
            
            task = f"""
            Please try to download the model {model_name} the website HuggingFace or Civitai. Then MUST click the download button to download to the {DOWNLOAD_DIR} folder.
            After download the model, please check the download the model exists in local computer.
            If the model is not found, please stop and return the `Can not find the model` message. Otherwise, return the "Found the model" message.
            If you think you are not able to find the model, please stop and return the `Can not find the model` message.
            """
            
            answer = await get_answer(task)
            
            check = False
            
            for file in os.listdir(DOWNLOAD_DIR):
                if model_name == file:
                    if models_to_path.get(model_name, None):
                        type_model = get_default_save_path(models_to_path[model_name])
                        file_path = os.path.join(DOWNLOAD_DIR, file)
                        target_path = os.path.join(COMFY_BASE_PATH, f"models/{type_model}", file)
                        os.makedirs(os.path.dirname(target_path), exist_ok=True)
                        shutil.move(file_path, target_path)
                        check = True
                        models_not_found.remove(model)
                        break
                        
            if check or answer == "No final answer found in logs." or "can not find the model" in answer.lower():
                continue
            

        return {
            "data": {
                "models_not_found": models_not_found,
                "models_downloaded": models_downloaded,
            },
            "message": "model(s) not found" if len(models_not_found) else "",
            "status": False if len(models_not_found) else True,
        }
        


