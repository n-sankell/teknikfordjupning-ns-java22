chmod +x ./apply-manifests.sh
chmod +x ./load-images.sh

docker context use default

# minikube start --ports=32000:32000
minikube start

minikube addons enable ingress

echo "-----"

./apply-manifests.sh

echo "-----"

./load-images.sh

#minikube tunnel
