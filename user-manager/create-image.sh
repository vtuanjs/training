#!/usr/bin/env bash

docker rm -f user-manager

docker rmi user-manager

docker image prune

docker volume prune

docker build -t user-manager .