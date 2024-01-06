package org.example.configuration;

import hello.HelloService;
import hello.repository.GreetingRepository;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import javax.sql.DataSource;

@org.springframework.context.annotation.Configuration
public class Configuration {

    @Bean
    @Primary
    DataSource dataSource() {
        DataSourceBuilder<?> builder = DataSourceBuilder.create();
        builder.driverClassName("org.postgresql.Driver");
        builder.url("jdbc:postgresql://localhost:5432/greeting_db");
        builder.username("user");
        builder.password("mysecretpassword");
        return builder.build();
    }

    @Bean
    NamedParameterJdbcTemplate namedParameterJdbcTemplate() {
        return new NamedParameterJdbcTemplate(dataSource());
    }

    @Bean
    GreetingRepository greetingRepository() {
        return new GreetingRepository(namedParameterJdbcTemplate());
    }

    @Bean
    HelloService helloService() {
        return new HelloService(greetingRepository());
    }

}
