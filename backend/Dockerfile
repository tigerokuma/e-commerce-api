FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy only backend files to /app/backend
COPY backend /app/backend

# Change to backend directory for build
WORKDIR /app/backend

RUN ./gradlew build

# Copy the built jar file from backend's build/libs to /app
COPY backend/build/libs/e-commerce-api-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
