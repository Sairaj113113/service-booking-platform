# Service Booking Platform - Backend

Standardized Spring Boot 3.x project for a multi-city, multi-role service platform.

## Project Structure
This project follows the **Standard Maven Layout**:
- `src/main/java`: Source code
- `src/main/resources`: Configuration and static resources
- `pom.xml`: Project Object Model (dependencies & build)
- `Dockerfile`: Multi-stage build for production

## Technology Stack
- **Java 17**
- **Spring Boot 3.2.2**
- **Spring Security** (JWT)
- **Spring Data JPA**
- **PostgreSQL**
- **Docker**

## Environment Variables
- `DB_URL`: JDBC connection string
- `DB_USERNAME`: Database user
- `DB_PASSWORD`: Database password
- `JWT_SECRET`: Base64 encoded secret key

## API Overview
- `POST /api/v1/auth/register`: Create user
- `POST /api/v1/auth/login`: Authenticate
- `GET /api/v1/location/public/cities`: List available cities
