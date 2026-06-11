#!/bin/bash

# AWS Deployment Script
echo "Deploying Mini-Bazar to AWS ECS Fargate..."

REGION="ap-south-1"
ACCOUNT_ID="123456789012"
SERVICES=("api-gateway" "auth-service" "product-service" "cart-service" "order-service" "wishlist-service")

# 1. Build & Push Docker Images
for service in "${SERVICES[@]}"; do
  echo "Building $service..."
  docker build -t $service ./Backend/$service
  docker tag $service:latest $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$service:latest
  docker push $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$service:latest
done

# 2. Deploy Frontend to S3
echo "Building frontend..."
cd Frontend && npm run build
aws s3 sync dist/ s3://minibazar-frontend-bucket --delete

echo "Deployment completed!"
