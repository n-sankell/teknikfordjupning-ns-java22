FROM openapitools/openapi-generator:cli-v4.3.0 AS openapi-generator

COPY /spring-boot-app/src/main/resources/openapi.yaml /react-app

COPY react-app/openapi.yaml /opt/openapi-generator/modules/openapi-generator-cli/target

RUN [ -d "/src/generated" ] && rm -rf /src/generated || true

WORKDIR '/opt/openapi-generator/modules/openapi-generator-cli/target'

RUN java -jar openapi-generator-cli.jar generate -i openapi.yaml -g typescript-fetch -o .react-app/src/generated --additional-properties redux=true

FROM node:20-slim AS builder

WORKDIR '/app'

ARG REACT_APP_SENTRY_DNS
ARG REACT_APP_API_HOST
ENV API_BASE_URL='http://192.168.49.2t:32000'

COPY react-app/package.json .

RUN yarn

COPY react-app/ ./

RUN yarn build

FROM node:20-slim

WORKDIR '/app'

COPY --from=builder /app/build ./build

RUN npm install -g serve

CMD serve -s build -l 3000