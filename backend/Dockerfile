# Build Stage (Multi-stage for smaller final image)
FROM maven:3.9.6-eclipse-temurin-21 AS builder

WORKDIR /app

# Copy pom and source code
COPY pom.xml .
COPY src ./src

# Build the app, skipping tests
RUN mvn clean package -DskipTests

# Final Image
FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy the built jar from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose port (Spring Boot default)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
