#!/usr/bin/env bash

docker rm -f api-gateway

docker rmi api-gateway

docker image prune

docker volume prune

docker build -t api-gateway .