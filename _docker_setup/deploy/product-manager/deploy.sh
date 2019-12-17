#!/bin/bash

# Connect manager 1: docker-machine ssh manager1
# And run...
mkdir -p /usr/mongodb/data/db /usr/mongodb/data/backup

env MONGO_INITDB_ROOT_USERNAME="root" \
env MONGO_INITDB_ROOT_PASSWORD="pass" \
docker stack deploy \
--compose-file docker-compose.yml \
product
