from constants import (
    APP_PORT,
    COMFY_BASE_PATH,
    COMFY_MODELS_BASE_PATH,
    DEBUG_LOG_ENABLED,
    MODEL_DOWNLOAD_PATH_LIST,
    MODEL_FILETYPES,
    OPTIONAL_MODELS,
    SERVER_ADDR,
    comfy_dir,
)

import os
import json
from typing import List, Dict



from urllib.parse import urlparse
import requests
from fuzzywuzzy import process
import os
import shutil
import psutil
import toml




def get_file_size(url):
    response = requests.get(url, stream=True)
    try:
        total_size = int(response.headers.get("content-length", 0))
        return total_size
    except Exception as e:
        return None


def fuzzy_text_match(text_list, query, limit=2):
    matches = process.extract(query, text_list, limit=limit)
    return [match for match, score in matches if score > 90]


def is_ignored_file(filename):
    ignore_list = [
        ".DS_Store",
        ".gitignore",
        "_output_images_will_be_put_here",
        "__MACOSX",
    ]
    return any(ignored_file.lower() in filename.lower() for ignored_file in ignore_list)


def copy_files(
    source_path, destination_path, overwrite=False, delete_original=False, filename=None
):
    os.makedirs(destination_path, exist_ok=True)
    destination_file = os.path.join(destination_path, os.path.basename(source_path))

    if os.path.isdir(source_path):
        res = []
        for file in os.listdir(source_path):
            if not is_ignored_file(
                file
            ):  # not os.path.isdir(os.path.join(source_path, file)) and
                res.append(
                    copy_files(
                        os.path.join(source_path, file),
                        destination_path,
                        overwrite,
                        delete_original,
                    )
                )

        return res
    else:
        if not overwrite and os.path.exists(destination_file):
            base_name, extension = os.path.splitext(os.path.basename(source_path))
            count = 1
            while os.path.exists(
                os.path.join(destination_path, f"{base_name}_{count}{extension}")
            ):
                count += 1
            unique_name = f"{base_name}_{count}{extension}"
            destination_file = os.path.join(destination_path, unique_name)
        else:
            unique_name = os.path.basename(source_path) if not filename else filename

        shutil.copy2(source_path, destination_file)
        if delete_original:
            os.remove(source_path)

        return unique_name


def find_process_by_port(port):
    pid = None
    for proc in psutil.process_iter(attrs=["pid", "name", "connections"]):
        try:
            if proc and "connections" in proc.info and proc.info["connections"]:
                for conn in proc.info["connections"]:
                    if conn.status == psutil.CONN_LISTEN and conn.laddr.port == port:
                        # app_logger.log(
                        #     LoggingType.DEBUG,
                        #     f"Process {proc.info['pid']} (Port {port})",
                        # )
                        pid = proc.info["pid"]
                        break
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass

    return pid


def find_file_in_directory(directory, target_file):
    file_list = []
    for root, dirs, files in os.walk(directory, followlinks=True):
        if target_file in files:
            file_list.append(os.path.join(root, target_file))

    return file_list


def clear_directory(directory):
    for item in os.listdir(directory):
        item_path = os.path.join(directory, item)
        if os.path.isfile(item_path):
            os.remove(item_path)
        elif os.path.isdir(item_path):
            shutil.rmtree(item_path)


# recursively moves up directories till it finds the .git file (root of the repo)
def find_git_root(path):
    if ".git" in os.listdir(path):
        return path

    parent_path = os.path.abspath(os.path.join(path, os.pardir))
    return find_git_root(parent_path)


# hackish sol for checking if a file is already downloaded by the comfy manager
# possible issues
# 1. a different file of same name can be present in some other directory
# 2. file may be corrupted
def search_file(filename, directory, parent_folder=None):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file == filename and (
                not parent_folder
                or (parent_folder and os.path.basename(root) == parent_folder)
            ):
                return True
        for subdir in dirs:
            subdir_path = os.path.join(root, subdir)
            if search_file(filename, subdir_path, parent_folder):
                return True  # File found in subdirectory
    return False


def convert_to_relative_path(path, base_comfy=COMFY_BASE_PATH):
    local_paths = ["ComfyUI/", "./ComfyUI/", "../ComfyUI/"]
    mod_path = path
    for pth in local_paths:
        if path.startswith(pth):
            mod_path = base_comfy + path[len(pth) :]

    return mod_path


def get_default_save_path(model_type):
    base_model = "etc"
    if model_type == "checkpoints":
        base_model = "checkpoints"
    elif model_type == "unclip":
        base_model = "checkpoints"
    elif model_type == "VAE":
        base_model = "vae"
    elif model_type == "lora":
        base_model = "loras"
    elif model_type == "T2I-Adapter":
        base_model = "controlnet"
    elif model_type == "T2I-Style":
        base_model = "controlnet"
    elif model_type == "controlnet":
        base_model = "controlnet"
    elif model_type == "clip_vision":
        base_model = "clip_vision"
    elif model_type == "gligen":
        base_model = "gligen"
    elif model_type == "upscale":
        base_model = "upscale_models"
    elif model_type == "embeddings":
        base_model = "embeddings"

    return base_model


def update_toml_config(toml_config_path, toml_dict):
    if not toml_config_path or not os.path.exists(toml_config_path):
        raise Exception("Invalid toml file path: ", toml_config_path)

    with open(toml_config_path, "wb") as f:
        toml_content = toml.dumps(toml_dict)
        f.write(toml_content.encode())


def is_url(path):
    try:
        result = urlparse(path)
        return all([result.scheme, result.netloc])
    except ValueError:
        return False


class ExampleTest:
    def __init__(self, model_weights_file_path_list):
        self.model_download_dict = self.comfy_model_dict = {}
        # loading local data
        for model_weights_file_path in model_weights_file_path_list:
            current_dir = find_git_root(os.path.dirname(__file__))  # finding root
            file_path = os.path.abspath(
                os.path.join(current_dir, model_weights_file_path)
            )
            # print("------- opening file path: ", file_path)
            with open(file_path, "r", encoding="utf-8") as file:
                data = json.load(file)
                for model_name in data:
                    # weight files with lower index have preference
                    if model_name not in self.model_download_dict:
                        self.model_download_dict[model_name] = {
                            "url": data[model_name]["url"],
                            "dest": convert_to_relative_path(
                                data[model_name]["dest"],
                                base_comfy=COMFY_MODELS_BASE_PATH,
                            ),
                        }


    def get_model_details(self, model_name):
        """
        If a model_name is present in the database it returns
        filename: the filename it should be downloaded as
        url:      it's download url
        dest:     where this file needs to be downloaded
        """
        if model_name in self.comfy_model_dict:
            for model in self.comfy_model_dict[model_name]:
                if model["save_path"] and model["save_path"].endswith("default"):
                    model["save_path"] = get_default_save_path(model["type"])

                return (
                    model["filename"],
                    model["url"],
                    os.path.join(COMFY_MODELS_BASE_PATH, "models", model["save_path"]),
                )

        elif model_name in self.model_download_dict:
            return (
                model_name,
                self.model_download_dict[model_name]["url"],
                convert_to_relative_path(
                    self.model_download_dict[model_name]["dest"],
                    base_comfy=COMFY_MODELS_BASE_PATH,
                ),
            )

        return None, None, None
    
    
    def load_comfy_models(self):
        self.comfy_model_dict = {}
        # these models have incorrect details in the Comfy Manager data json
        # and should be ignored here
        COMFY_MODEL_PATH_LIST = [
            "./model-list.json"
        ]
        ignore_manager_models = ["sd_xl_base_1.0.safetensors", "sd_xl_refiner_1.0_0.9vae.safetensors"]
        for model_list_path in COMFY_MODEL_PATH_LIST:
            current_dir = find_git_root(os.path.dirname(__file__))  # finding root
            model_list_path = os.path.abspath(
                os.path.join(current_dir, model_list_path)
            )
            if not os.path.exists(model_list_path):
                # app_logger.log(
                #     LoggingType.DEBUG, f"model list path not found - {model_list_path}"
                # )
                continue

            with open(model_list_path, "rb") as file:
                model_list = json.load(file)["models"]
            

            # loading comfy data
            for model in model_list:
                if model_list_path.endswith("model-list.json") and model["filename"] in ignore_manager_models:     # comfy manager liser
                    continue
                
                if model["filename"] not in self.comfy_model_dict:
                    self.comfy_model_dict[model["filename"]] = [model]
                else:
                    self.comfy_model_dict[model["filename"]].append(model)


test = ExampleTest(MODEL_DOWNLOAD_PATH_LIST)
test.load_comfy_models()

save_invalid_models: Dict[str, List[str]]  = {}


for file in os.listdir("content/valid_node_workflow"):
    if file.endswith(".json"):
        with open(f"content/valid_node_workflow/{file}", "r") as f:
            workflow_content = json.load(f)
            
            models_to_download = []

            for node in workflow_content["workflow_json"]["nodes"]:
                if "widgets_values" in node:
                    for input in node["widgets_values"]:
                        if (
                            isinstance(input, str)
                            and any(input.endswith(ft) for ft in MODEL_FILETYPES)
                            and not any(input.endswith(m) for m in OPTIONAL_MODELS)
                        ):
                            if test.get_model_details(input)[0] is None:
                                if file not in save_invalid_models:
                                    save_invalid_models[file] = []
                                save_invalid_models[file].append(input)
                                
                                
print(json.dumps(save_invalid_models, indent = 4, ensure_ascii=False))

print(len(os.listdir("content/valid_node_workflow")))
print(len(save_invalid_models.keys()))

with open("invalid.txt", "w") as invalid_file:
    for file, models in save_invalid_models.items():
        invalid_file.write(f"{file}:\n")
        for model in models:
            invalid_file.write(f"\t{model}\n")


with open("valid.txt", "w") as valid_file:
    for file in os.listdir("content/valid_node_workflow"):
        if file.endswith(".json") and file not in save_invalid_models:
            valid_file.write(f"{file}\n")
                                
                    
                    
print("hello")

            



