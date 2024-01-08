FROM eclipse-temurin:19 AS build-stage

WORKDIR /build

RUN ./gradlew clean

COPY ./gradle/ ./gradle/
COPY ./gradlew .
COPY ./settings.gradle .
RUN ./gradlew --version --no-daemon

COPY ./build.gradle .
RUN ./gradlew dependencies --no-daemon

COPY ./src/ ./src/

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