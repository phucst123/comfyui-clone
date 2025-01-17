
import asyncio
import os

from web_search.magentic_one_helper import MagenticOneHelper

LOG_DIR = os.path.join(os.getcwd(), "web_search", "logs")
DOWNLOAD_DIR = os.path.join(os.getcwd(), "web_search", "download_folder")

os.makedirs(LOG_DIR, exist_ok=True)
os.makedirs(DOWNLOAD_DIR, exist_ok=True)

async def get_answer(task, start_page: str = "https://www.bing.com/"):
    magnetic_one = MagenticOneHelper(logs_dir=LOG_DIR, download_dir=DOWNLOAD_DIR)
    await magnetic_one.initialize(start_page=start_page)
    print("MagenticOne initialized.")

    task_future = asyncio.create_task(magnetic_one.run_task(task))
    await task_future

    # Get the final answer
    final_answer = magnetic_one.get_final_answer()


    if final_answer is not None:
        return final_answer
    else:
        return "No final answer found in logs."

print(LOG_DIR)
print(DOWNLOAD_DIR)
