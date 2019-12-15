#!/usr/bin/env bash

eval `docker-machine env manager1`

docker service rm api-gateway users-service products-service

for server in manager1 worker1 worker2
do
  eval `docker-machine env $server`

  for image in vtuanjs/api-gateway vtuanjs/user-manager vtuanjs/product-manager
    do
      IMAGE=$(docker images $image -q)
      docker rmi -f $IMAGE
  done
done