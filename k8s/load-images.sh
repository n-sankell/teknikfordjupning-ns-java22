#!/bin/bash

echo "minikube image load tf-postgres:k8s"
minikube image load tf-postgres:k8s
echo "DONE"
echo "minikube image load tf-react-app:k8s"
minikube image load tf-react-app:k8s
echo "DONE"
echo "minikube image load tf-spring-boot-app:k8s"
minikube image load tf-spring-boot-app:k8s
echo "ALL DONE"
