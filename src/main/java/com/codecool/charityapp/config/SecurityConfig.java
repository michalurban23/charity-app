package com.codecool.charityapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.AccessDeniedHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private AccessDeniedHandler accessDeniedHandler;
    private UserDetailsService userDetailsService;

    @Autowired
    public SecurityConfig(AccessDeniedHandler accessDeniedHandler, UserDetailsService userDetailsService) {
        this.accessDeniedHandler = accessDeniedHandler;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.authorizeRequests()
                .antMatchers("/users/new", "/users/delete/**", "/users/edit/**").hasAuthority("COORDINATOR")
                .antMatchers("/").permitAll()
                .antMatchers("/webjars/**", "/css/**", "/console/**", "/403", "/404").permitAll()
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .loginPage("/login").permitAll()
                .and()
            .logout()
                .logoutSuccessUrl("/")
                .and()
            .exceptionHandling()
                .accessDeniedHandler(accessDeniedHandler);

       http.csrf().disable();
       http.headers().frameOptions().disable();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {

        auth.userDetailsService(userDetailsService);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // return new MyEncoder();
        return new BCryptPasswordEncoder();
    }
}
