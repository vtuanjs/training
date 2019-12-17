#!/bin/bash

env MONGO_INITDB_ROOT_USERNAME="root" \
env MONGO_INITDB_ROOT_PASSWORD="pass" \
env MONGODB_USER_NAME="dbtest" \
env MONGODB_PASSWORD="dbtest" \
docker stack deploy \
--compose-file docker-compose.yml \
userapp
