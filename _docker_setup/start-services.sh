#!/usr/bin/env bash

eval `docker-machine env manager1`

array=('./api-gateway'
  # './user-service'
  # './product-service'
)

# we go to the root of the project
cd ..

for ((i = 0; i < ${#array[@]}; ++i)); do
  # we go to each folder
  cd ${array[$i]}

  # we create or recreate our image
  sh ./start-service.sh

  # and we go back to the root again :D
  cd ..
done