package com.job.announcement.jwt;


import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@org.springframework.context.annotation.Configuration
public class Configuration {

    private static final String GET= "GET";
    private static final String POST= "POST";
    private static final String DELETE= "DELETE";
    private static final String PUT= "PUT";

    @Bean
    public WebMvcConfigurer Configurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedMethods(GET, PUT, POST, DELETE).allowedHeaders("*").allowedOriginPatterns("*").allowCredentials(true);
                WebMvcConfigurer.super.addCorsMappings(registry);

            }
        };
    }
}
