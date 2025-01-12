import subprocess

def clone_and_install(repo_url):
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

# Replace the URL below with your GitHub repository link
repo_url = "https://github.com/abi/screenshot-to-code"
clone_and_install(repo_url)
