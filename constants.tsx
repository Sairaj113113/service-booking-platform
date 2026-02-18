
import { FileNode, FileType } from './types';

export const PROJECT_STRUCTURE: FileNode = {
  name: "service-booking-platform",
  children: [
    {
      name: "pom.xml",
      language: FileType.XML,
      content: `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.2.2</version>
		<relativePath/>
	</parent>
	<groupId>com.booking</groupId>
	<artifactId>service-platform</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>service-platform</name>
	<description>Service Booking Platform Backend</description>
	<properties>
		<java.version>17</java.version>
		<jjwt.version>0.11.5</jjwt.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId>
		</dependency>
		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.projectlombok</groupId>
			<artifactId>lombok</artifactId>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-api</artifactId>
			<version>\${jjwt.version}</version>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-impl</artifactId>
			<version>\${jjwt.version}</version>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-jackson</artifactId>
			<version>\${jjwt.version}</version>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>
	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<configuration>
					<excludes>
						<exclude>
							<groupId>org.projectlombok</groupId>
							<artifactId>lombok</artifactId>
						</exclude>
					</excludes>
				</configuration>
			</plugin>
		</plugins>
	</build>
</project>`
    },
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
                    {
                      name: "ServiceBookingApplication.java",
                      language: FileType.JAVA,
                      content: `package com.booking.platform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServiceBookingApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceBookingApplication.class, args);
    }
}`
                    },
                    {
                      name: "config",
                      children: [
                        {
                          name: "SecurityConfig.java",
                          language: FileType.JAVA,
                          content: `package com.booking.platform.config;

import com.booking.platform.security.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/api/v1/location/**").permitAll()
                .anyRequest().authenticated()
            )
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}`
                        }
                      ]
                    },
                    {
                      name: "entity",
                      children: [
                        {
                          name: "User.java",
                          language: FileType.JAVA,
                          content: `package com.booking.platform.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private String phone;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String status;

    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        if (status == null) status = "ACTIVE";
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() { return true; }

    @Override
    public boolean isAccountNonLocked() { return true; }

    @Override
    public boolean isCredentialsNonExpired() { return true; }

    @Override
    public boolean isEnabled() { return true; }
}`
                        },
                        {
                          name: "Role.java",
                          language: FileType.JAVA,
                          content: `package com.booking.platform.entity;

public enum Role {
    ADMIN,
    CUSTOMER,
    PROVIDER,
    STAFF
}`
                        },
                        {
                          name: "City.java",
                          language: FileType.JAVA,
                          content: `package com.booking.platform.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String state;
    private String status;

    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
    private List<Area> areas;
}`
                        },
                        {
                          name: "Area.java",
                          language: FileType.JAVA,
                          content: `package com.booking.platform.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "areas")
public class Area {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String pincode;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id")
    private City city;
}`
                        }
                      ]
                    },
                    {
                      name: "repository",
                      children: [
                        {
                          name: "UserRepository.java",
                          language: FileType.JAVA,
                          content: `package com.booking.platform.repository;

import com.booking.platform.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}`
                        },
                        {
                          name: "CityRepository.java",
                          language: FileType.JAVA,
                          content: `package com.booking.platform.repository;

import com.booking.platform.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {}`
                        }
                      ]
                    },
                    {
                      name: "service",
                      children: [
                        {
                          name: "AuthService.java",
                          language: FileType.JAVA,
                          content: `package com.booking.platform.service;

import com.booking.platform.dto.*;
import com.booking.platform.entity.User;
import com.booking.platform.repository.UserRepository;
import com.booking.platform.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest request) {
        var user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .status("ACTIVE")
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder().token(jwtToken).build();
    }

    public AuthResponse login(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        var user = repository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder().token(jwtToken).build();
    }
}`
                        }
                      ]
                    },
                    {
                      name: "controller",
                      children: [
                        {
                          name: "AuthController.java",
                          language: FileType.JAVA,
                          content: `package com.booking.platform.controller;

import com.booking.platform.dto.*;
import com.booking.platform.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService service;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(service.login(request));
    }
}`
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: "resources",
              children: [
                {
                  name: "application.yml",
                  language: FileType.YAML,
                  content: `spring:
  datasource:
    url: \${DB_URL}
    username: \${DB_USERNAME}
    password: \${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        dialect: org.hibernate.dialect.PostgreSQLDialect

jwt:
  secret: \${JWT_SECRET:404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970}
  expiration: 86400000 # 1 day`
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "render.yaml",
      language: FileType.YAML,
      content: `services:
  - type: web
    name: service-booking-backend
    env: java
    buildCommand: ./mvnw clean install -DskipTests
    startCommand: java -jar target/*.jar
    envVars:
      - key: DB_URL
        fromDatabase:
          name: booking-db
          property: connectionString
      - key: DB_USERNAME
        fromDatabase:
          name: booking-db
          property: user
      - key: DB_PASSWORD
        fromDatabase:
          name: booking-db
          property: password

databases:
  - name: booking-db
    databaseName: platform_db
    user: db_user`
    },
    {
      name: "README.md",
      language: FileType.MD,
      content: `# Multi-City Service Booking Platform Backend

This is a Spring Boot 3.x project scaffolded for a multi-role service platform.

## Features
- **Security**: JWT based authentication with Spring Security.
- **Roles**: ADMIN, CUSTOMER, PROVIDER, STAFF.
- **Locations**: Managed City and Area entities.
- **Persistence**: PostgreSQL with JPA/Hibernate.
- **Cloud Ready**: Configured for Render deployment with environment variables.

## Environment Variables Required
- \`DB_URL\`: PostgreSQL JDBC URL
- \`DB_USERNAME\`: Database username
- \`DB_PASSWORD\`: Database password
- \`JWT_SECRET\`: Signing key for JWT (optional, defaults provided)

## API Endpoints
- \`POST /api/v1/auth/register\`: Create a new user
- \`POST /api/v1/auth/login\`: Authenticate and get JWT token`
    }
  ]
};
