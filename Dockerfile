FROM openapitools/openapi-generator:cli-v4.3.0 AS openapi-generator

WORKDIR /app

COPY ./spring-boot-app/src/main/resources/openapi.yaml /app/react-app/openapi.yaml

RUN mkdir -p /app/react-app/src/generated && \
    java -jar /opt/openapi-generator/modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -i /app/react-app/openapi.yaml -g typescript-fetch -o /app/react-app/src/generated --additional-properties redux=true

FROM node:20-slim AS builder

WORKDIR '/app/react-app'

COPY ./react-app/package.json .

RUN yarn

COPY --from=openapi-generator /app/react-app/src/generated /app/react-app/src/generated

COPY ./react-app/ .

RUN yarn build

FROM node:20-slim

WORKDIR '/app'

COPY --from=builder /app/react-app/build /app/build

RUN npm install -g serve

EXPOSE 3000

CMD serve -s build -l 3000