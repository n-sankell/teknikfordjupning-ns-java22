#!/bin/bash

#echo "minikube image load xtf-postgres"
#minikube image load xtf-postgres
#echo "DONE"
echo "minikube image load xtf-react-app"
minikube image load xtf-react-app:k8s
echo "DONE"
echo "minikube image load xtf-spring-boot-app:mysql"
minikube image load xtf-spring-boot-app:mysql
echo "ALL DONE"
