chmod +x ./apply-manifests.sh
chmod +x ./load-images.sh

minikube start --ports=32000:32000

./apply-manifests.sh
./load-images.sh