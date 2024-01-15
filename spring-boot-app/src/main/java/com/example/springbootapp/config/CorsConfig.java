package com.example.springbootapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {

    private final Environment environment;

    @Autowired
    public CorsConfig(Environment environment) {
        this.environment = environment;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        String allowedOrigin = environment.getProperty("allowed.origin", "");
        System.out.println("ALLOWED ORIGIN: " + allowedOrigin);
        registry.addMapping("/**")
            .allowedOrigins(
                allowedOrigin,
                "http://127.0.0.1:55285"
            )
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .maxAge(3600);
    }

}
