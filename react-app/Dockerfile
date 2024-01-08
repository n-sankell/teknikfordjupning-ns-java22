FROM openapitools/openapi-generator:cli-v4.3.0

COPY openapi.yaml /opt/openapi-generator/modules/openapi-generator-cli/target

RUN [ -d "/src/generated" ] && rm -rf /src/generated || true

WORKDIR '/opt/openapi-generator/modules/openapi-generator-cli/target'

RUN java -jar openapi-generator-cli.jar generate -i openapi.yaml -g typescript-fetch -o ./src/generated --additional-properties redux=true

FROM node:20-slim

WORKDIR '/app'

ARG REACT_APP_SENTRY_DNS

ARG REACT_APP_API_HOST

ENV API_BASE_URL='http://localhost:8080'

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

RUN mv build/ ../ 

RUN rm -r ./*

RUN mv ../build ./

RUN npm install -g serve

CMD serve -s build -l 3001