#!/bin/bash

# Run at manager1

env MONGO_INITDB_ROOT_USERNAME="dbtest" \
env MONGO_INITDB_ROOT_PASSWORD="dbtest" \
env MONGODB_USER_NAME="dbtest" \
env MONGODB_PASSWORD="dbtest" \
docker stack deploy \
--compose-file docker-compose.yml \
product
