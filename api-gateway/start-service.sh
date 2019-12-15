
#!/usr/bin/env bash

docker service create --replicas 1 --name api-gateway -p 3001:3001 vtuanjs/api-gateway