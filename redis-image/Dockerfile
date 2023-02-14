# Use existing docker image as base
# This is like installing an OS in a machine.
FROM alpine

# Download and install dependency
# apk is apache package manager installed in alpine OS.
# Docker-Server actually starts an intermediate container with alpine OS, runs the below command
# Installs redis and takes a snapshot of the file system in the container i.e. creates an image.
# Terminates the intermediate container.
RUN apk add --update redis

# Command to run
# Docker-Server starts an intermediate container with the image created in above step
# sets the below command as the start up command in this container
# Then creates an image of the container, which is the final built image.
# Terminates the intermediate container.
CMD ["redis-server"]