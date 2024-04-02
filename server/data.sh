#!/bin/bash

cd ./data
if [ -z "$1" ] ;then
    echo "up: up all data services"
    echo "down: down all data services"

elif [ "$1" = "up" ] ;then
    if [ -z "$2" ] ;then
        docker-compose --env-file ../envs up -d    
    else
        docker-compose --env-file ../envs up -d $2 --no-deps  
    fi

elif [ "$1" = "down" ] ;then
    if [ -z "$2" ] ;then
        docker-compose --env-file ../envs down 
    else
        docker-compose --env-file ../envs down $2
    fi

fi
