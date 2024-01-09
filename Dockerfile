FROM eclipse-temurin:19 AS build-stage

COPY /spring-boot-app/src/main/resources/openapi.yaml /react-app

WORKDIR /build

COPY ./spring-boot-app/gradle/ ./gradle/
COPY ./spring-boot-app/gradlew .
COPY ./spring-boot-app/settings.gradle .

RUN ./gradlew --version --no-daemon

COPY ./spring-boot-app/build.gradle .
RUN ./gradlew dependencies --no-daemon

COPY ./spring-boot-app/src/ ./src/

RUN ./gradlew clean
RUN ./gradlew openApiGenerate
RUN ./gradlew build --no-daemon -x test
RUN rm /build/build/libs/*-plain.jar

FROM eclipse-temurin:19-jre-alpine
WORKDIR /app
COPY --from=build-stage /build/build/libs/*.jar /app/api.jar

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the port if your Spring Boot app uses a specific port
EXPOSE 8080

# Command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "api.jar", "-Djava.net.preferIPv4Stack=true"]