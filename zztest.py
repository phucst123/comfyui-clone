import subprocess
import os
# from web_search.example_magentic_one_helper import get_answer

# def get_node_link(node_name):
#     task = f"""
#     From the start page, find the github link of the ComfyUI node with the name `{node_name}`.
#     After navigate to the github page of the node `{node_name}`, extract the github link of the node.
#     After that, return the github link of the node and stop the task.
#     """
#     answer = asyncio.run(get_answer(task))
    
#     # TODO: Extract the github link from the answer
    
#     clone_and_install(answer)
    
    


def clone_and_install(repo_url): 
    os.chdir("./custom_nodes")
    try:
        # Clone the repository
        print(f"Cloning repository from {repo_url}...")
        subprocess.run(["git", "clone", repo_url], check=True)
        
        # Extract repository name from the URL
        repo_name = repo_url.split("/")[-1].replace(".git", "")
        
        # Navigate to the repository folder and install dependencies
        print(f"Installing dependencies for {repo_name}...")
        subprocess.run(["pip", "install", "-r", f"{repo_name}/requirements.txt"], check=True)
        
        print("All dependencies installed successfully!")
    except subprocess.CalledProcessError as e:
        print(f"An error occurred: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    finally:
        os.chdir("..")
        


# Replace the URL below with your GitHub repository link
repo_url = "https://github.com/abi/screenshot-to-code"
clone_and_install(repo_url)
