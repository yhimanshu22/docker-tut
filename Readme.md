# List all Docker images
docker images

# Pull a Docker image
docker pull <image_name>

# Run a Docker container from an image
docker run -it <image_name>

# List all running Docker containers
docker ps

# Stop a running Docker container
docker stop <container_ID>

# Start a stopped Docker container
docker start <container_ID>

# Build a Docker image from a Dockerfile
docker build -t <image_name> .

# Inspect a Docker object (e.g., container, image, volume)
docker inspect <object_name>

# Login to Docker Hub
docker login

# Push a Docker image to a remote registry
docker push <image_name>

# Execute a command in a running Docker container
docker exec -it <container_ID> <command>

# Copy files from the Docker host to a container
docker cp <host_path> <container_ID>:<container_path>

# Attach to an existing Docker container
docker attach <container_ID>

# Create a new Docker volume
docker volume create <volume_name>

# Search for Docker images on Docker Hub
docker search <image_name>

# Base command for the Docker CLI
docker

# Subcommands for managing containers
docker run
docker stop
docker start
docker ps

# Subcommands for managing images
docker pull
docker push
docker images

# Subcommands for managing volumes
docker volume create
docker volume rm

# Subcommands for managing networks
docker network create
docker network rm
