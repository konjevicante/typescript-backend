.SILENT: all up down rm
.SILENT: mongo-up mongo-down server-up server-down

all:
	echo "\nUse a specific target.\n"

up:
	echo "Spawning development enviorment in docker w. docker-compose"
	docker-compose up -d

down:
	echo "Stopping docker-compose containers"
	docker-compose stop

rm:
	echo "Removing docker-compose containers"
	docker-compose rm

mongo-up:
	echo "Spawning container for mongo"
	docker run -it -d -p 27017:27017 --name mongo-database mongo:4.0

mongo-down:
	echo "Stopping container for mongo"
	docker stop $$(docker ps -a -f name=mongo-database -q)
	echo "Removing container for mongo"
	docker rm $$(docker ps -a -f name=mongo-database -q)

server-up: mongo-up
	docker build -t node-server .
	docker run -d -it -v "$$PWD":/app -p 4000:4000 --name node-server node-server

server-down: mongo-down
	echo "Stopping container for the server"
	docker stop $$(docker ps -a -f name=node-server -q)
	echo "Removing container for the server"
	docker rm $$(docker ps -a -f name=node-server -q)

.PHONY: all up down rm mongo-up mongo-down server-up server-down