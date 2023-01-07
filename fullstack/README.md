#Build image in same dir
docker build -t myapp .

#List of images
docker images

#List container processes ( Running)
docker ps

#List all container processes 
docker ps -a

#Stop container by name
docker stop myapp_c1

#Build container
#Create container, rename container, add port, detach from termninal,select image
#add optional --rm once container is stop it will be deleted
docker run --name myapp_c2 -p 4000:4000 -d  myapp

#Start container by name
docker start myapp

#Delete images
docker image rm myapp -f


#Delete container
docker container rm myapp_c

#Remove all container and images
docker system prune -a


#Create new image with tag (v1)
docker build -t myapp:v1 . 


#Update container in the volumes (with -v  and path:/app)
docker run --name myapp_c3 -p 4000:4000 -d --rm -v C:\Users\hmzko\Desktop\Docker\5:/app -v /app/node_modules myapp:nodemon

#Runn docker compose
docker-compose up


#Stop docker compose
docker-compose down

#Stop and delete docker compose
docker-compose down --rmi all -v 


#To push docker hub
#need to tag first
docker tag dockerapp-api hamzakoc/dockerapp-api
docker tag dockerapp-myblog hamzakoc/dockerapp-myblog

#Push
docker push hamzakoc/dockerapp-api
docker push hamzakoc/dockerapp-myblog


#Pull form docker hub
docker pull hamzakoc/dockerapp-api
docker pull hamzakoc/dockerapp-myblog

#Run
docker run --name blog -p 3000:3000 -d  hamzakoc/dockerapp-myblog
docker run --name api -p 4000:4000 -d  hamzakoc/dockerapp-api




https://hub.docker.com/repository/docker/hamzakoc/dockerapp-myblog

https://hub.docker.com/repository/docker/hamzakoc/dockerapp-api