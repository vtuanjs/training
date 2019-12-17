#!/bin/bash

# Copy config file to manager 1
docker-machine scp docker-compose.yml manager1:/home/docker/docker-compose.yml

docker-machine scp initdb.js manager1:/home/docker/initdb.js

docker-machine scp deploy.sh manager1:/home/docker/deploy.sh