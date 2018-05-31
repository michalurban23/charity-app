package com.codecool.charityapp.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableAutoConfiguration
@EntityScan(basePackages = {"com.codecool.charityapp.model"})
@EnableJpaRepositories(basePackages = {"com.codecool.charityapp.repository"})
@EnableTransactionManagement
public class RepositoryConfig {
}