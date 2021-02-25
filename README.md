# fc2-2-nginx-node

Desafio Nginx com Node.js

Baseado em https://github.com/codeedu/fullcycle2.0-devops-docker

### Get started

    git clone git@github.com:josemotta/fc2-2-nginx-node.git
    cd fc2-2-nginx-node
    docker-compose up -d

### Resultado

![image](https://user-images.githubusercontent.com/86032/108916768-7dabde00-760d-11eb-85e2-ed0846f72db9.png)


### Volumes

 Add a volume to avoid error if [node_modules are missing after npm install](https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds)

     volumes: 
      - ./node:/usr/src/app
      - /usr/src/app/node_modules
