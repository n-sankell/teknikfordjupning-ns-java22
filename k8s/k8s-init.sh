chmod +x ./apply-manifests.sh
chmod +x ./load-images.sh

docker context use default

minikube start --ports=32000:32000

./apply-manifests.sh
./load-images.sh
