package org.example.ecommerceapi.config;  // Adjust based on your package structure

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")  // Replace with your frontend URL if different
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
    }
}
