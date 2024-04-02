#!/bin/bash

stat_progress_ba() {
    b=''
    i=0
    while [ $i -le  100 ]
    do
        printf "progress:[%-100s]%d%%\r" $b $i
        sleep 0.2
        i=`expr 1 + $i`
        b=#$b
    done
    echo
}


if [ -z "$1" ] ;then
	echo "pull: pull images"
	echo "install: install system, clean old data"
elif [ "$1" = "pull" ] ;then
	if [ -z "$2" ] ;then
		echo "pull all images"
		cd ./app
		docker-compose --env-file ../envs pull
		cd ../data
		docker-compose --env-file ../envs pull
	elif [ "$2" = "app" ] ;then
		echo "pull app images"
		cd ./app
		docker-compose --env-file ../envs pull

	elif [ "$2" = "data" ] ;then
		echo "pull data images"
		cd ./data
		docker-compose --env-file ../envs pull
	fi
elif [ "$1" = "install" ] ;then
    # set HOST_IP in envs file
    env_file="envs"
    key_name="HOST_IP"
    ip=$(hostname -I | awk '{print $1}')
    sed -i "/^$key_name/d" "$env_file" 
    echo "$key_name = $ip" >> "$env_file"
    echo "$key_name = $ip" 


    ./data.sh up

    stat_progress_ba
    cd ./app

    # clean：clean old data; password: password of super user
    docker-compose --env-file ../envs run --no-deps saver install -clean=true -password=super 
fi

