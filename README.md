# Service Booking Platform - Backend

Production-ready Spring Boot 3.x backend project for a multi-city, multi-role service platform.

## Technology Stack
- **Java 17**
- **Spring Boot 3.2.2**
- **Spring Security** (JWT Authentication)
- **Spring Data JPA**
- **PostgreSQL**
- **Lombok**
- **Maven**

## Key Features
- **JWT Auth**: Stateless authentication with custom filters.
- **Role-Based Access**: 4 core roles (ADMIN, CUSTOMER, PROVIDER, STAFF).
- **Location Module**: Management of Cities and service Areas.
- **Exception Handling**: Global REST advice for consistent error responses.
- **Cloud Ready**: Prepared for Render/Heroku/AWS with environment variables.

## Environment Variables
- `DB_URL`: JDBC connection string
- `DB_USERNAME`: Database user
- `DB_PASSWORD`: Database password
- `JWT_SECRET`: Base64 encoded secret key

## API Overview
- `POST /api/v1/auth/register`: Create user
- `POST /api/v1/auth/login`: Authenticate
- `GET /api/v1/location/public/cities`: List available cities
