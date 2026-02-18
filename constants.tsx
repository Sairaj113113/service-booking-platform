import { FileNode, FileType } from './types';

export const PROJECT_STRUCTURE: FileNode = {
  name: "service-booking-platform",
  children: [
    {
      name: "src",
      children: [
        {
          name: "main",
          children: [
            {
              name: "java",
              children: [
                {
                  name: "com.booking.platform",
                  children: [
                    { name: "ServiceBookingApplication.java", language: FileType.JAVA },
                    { name: "config", children: [{ name: "SecurityConfig.java" }, { name: "JwtService.java" }, { name: "JwtAuthenticationFilter.java" }, { name: "ApplicationConfig.java" }] },
                    { name: "controller", children: [{ name: "AuthController.java" }] },
                    { name: "dto", children: [{ name: "AuthRequest.java" }, { name: "AuthResponse.java" }, { name: "RegisterRequest.java" }] },
                    { name: "entity", children: [{ name: "User.java" }, { name: "Role.java" }, { name: "City.java" }, { name: "Area.java" }] },
                    { name: "exception", children: [{ name: "GlobalExceptionHandler.java" }, { name: "ErrorResponse.java" }] },
                    { name: "repository", children: [{ name: "UserRepository.java" }, { name: "CityRepository.java" }, { name: "AreaRepository.java" }] },
                    { name: "service", children: [{ name: "AuthService.java" }] }
                  ]
                }
              ]
            },
            {
              name: "resources",
              children: [{ name: "application.yml", language: FileType.YAML }]
            }
          ]
        }
      ]
    },
    { name: "pom.xml", language: FileType.XML },
    { name: "Dockerfile" },
    { name: "render.yaml", language: FileType.YAML },
    { name: "README.md", language: FileType.MD }
  ]
};