FROM eclipse-temurin:19

# Set the working directory inside the container
WORKDIR /app

# Copy the Gradle wrapper and build files
COPY gradlew .
COPY build.gradle .
COPY settings.gradle .

# Copy API module files
COPY api/build.gradle api/
COPY api/src api/src

# Copy Service module files
COPY service/build.gradle service/
COPY service/src service/src

RUN ./gradlew -p api cleanGeneratedFiles
RUN ./gradlew -p api openApiGenerate

# Copy your project files (if needed)
# COPY <path_to_your_project_files> .

# Run the Gradle build
RUN ./gradlew build -x test

# Expose the port if your Spring Boot app uses a specific port
EXPOSE 8080

# Command to run the Spring Boot application
CMD ["java", "-jar", "build/libs/your-app-name.jar"]