FROM eclipse-temurin:19 AS build-stage

WORKDIR /build

COPY ./gradle/ ./gradle/
COPY ./gradlew .
COPY ./settings.gradle .

RUN ./gradlew --version --no-daemon

COPY ./build.gradle .
RUN ./gradlew dependencies --no-daemon

COPY ./src/ ./src/

RUN ./gradlew clean
RUN ./gradlew build --no-daemon -x test
RUN rm /build/build/libs/*-plain.jar

FROM eclipse-temurin:19-jre-alpine
WORKDIR /app
COPY --from=build-stage /build/build/libs/*.jar /app/resp.jar

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "resp.jar", "-Djava.net.preferIPv4Stack=true"]