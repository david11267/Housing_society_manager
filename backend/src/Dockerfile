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

# Set environment variables (these are optional defaults, overridden in GCP)
ENV JWT_PROVIDER_URI=https://joint-woodcock-98.clerk.accounts.dev \
    DB_URL=jdbc:postgresql://aws-0-eu-north-1.pooler.supabase.com:5432/postgres \
    DB_USER=postgres.xnmokrfuddherzaikxsi \
    DB_PASS=zD4GysuXIVku8uPz

# Expose port (Spring Boot default)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
