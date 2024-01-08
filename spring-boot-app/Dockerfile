FROM eclipse-temurin:19 AS build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the Gradle wrapper and build files
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .

# Copy API module files
COPY api/build.gradle api/
COPY api/src api/src

# Copy Service module files
COPY service/build.gradle service/
COPY service/src service/src

RUN ./gradlew clean
RUN ./gradlew -p api cleanGeneratedFiles
RUN ./gradlew -p api openApiGenerate

# Run the Gradle build
RUN ./gradlew build -x test

FROM eclipse-temurin:19-jre-alpine
WORKDIR /app
COPY --from=build-stage /app/build/libs/*.jar /app/api.jar

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the port if your Spring Boot app uses a specific port
EXPOSE 8080

# Command to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "api.jar", "-Djava.net.preferIPv4Stack=true"]