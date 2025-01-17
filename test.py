from inf import ComfyRunner
import json


check = ComfyRunner()

with open("/home/hungquan/comfyui-clone/workflow_api (2).json") as f:
    workflow = json.load(f)



check.download_models(
    workflow=workflow,
    extra_models_list=[],
    ignore_model_list=[],
)