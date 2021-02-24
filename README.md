# fc2-2-nginx-node

Desafio Nginx com Node.js

Baseado em https://github.com/codeedu/fullcycle2.0-devops-docker

### Get started

    git clone git@github.com:josemotta/fc2-2-nginx-node.git
    cd fc2-2-nginx-node
    docker-compose up -d

### Resultado

![image](https://user-images.githubusercontent.com/86032/108916768-7dabde00-760d-11eb-85e2-ed0846f72db9.png)

### Dockerize issue

#### Without Dockerize: no error
nginx    | 172.21.0.1 - - [24/Feb/2021:20:31:56 +0000] "GET / HTTP/1.1" 200 418 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36" "-"

#### With Dockerize: error
nginx    | 2021/02/24 20:21:05 [error] 8#8: *1 connect() failed (111: Connection refused) while connecting to upstream, client: 172.21.0.1, server: localhost, request: "GET / HTTP/1.1", upstream: "http://172.21.0.3:3000/", host: "localhost:8080"
nginx    | 172.21.0.1 - - [24/Feb/2021:20:21:05 +0000] "GET / HTTP/1.1" 502 575 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36" "-"


