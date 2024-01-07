# Use an official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json yarn.lock /app/

# Install dependencies
RUN yarn install

# Copy the entire project to the working directory
COPY . /app/

# Generate sources with OpenAPI
RUN yarn openapi-generator-cli generate -i ../spring-boot-app/api/src/main/resources/openapi.yaml -g typescript-fetch -o ./src/generated --additional-properties redux=true

# Build the React app
RUN yarn build

# Expose the port the app runs on
# EXPOSE 3000

# Set the environment variable for the base URL
ENV API_BASE_URL="http://localhost:8080"

# Start the React app
CMD ["yarn", "start"]
