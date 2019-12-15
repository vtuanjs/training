#!/usr/bin/env bash

docker rm -f product-manager

docker rmi product-manager

docker image prune

docker volume prune

docker build -t product-manager .