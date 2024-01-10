#!/bin/bash

kubectl apply -f postgres-secret.yaml
kubectl apply -f postgres-config.yaml
kubectl apply -f postgres.yaml
kubectl apply -f react-app.yaml
kubectl apply -f spring-boot-app.yaml