#!/bin/bash

kubectl apply -f mysql-secret.yaml
kubectl apply -f mysql-config.yaml
kubectl apply -f mysql.yaml
kubectl apply -f react-app.yaml
kubectl apply -f spring-boot-app.yaml
kubectl apply -f ingress.yaml
