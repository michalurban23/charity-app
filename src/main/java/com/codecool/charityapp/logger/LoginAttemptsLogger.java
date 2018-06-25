package com.codecool.charityapp.logger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.event.AbstractAuthenticationEvent;
import org.springframework.stereotype.Component;

@Component
public class LoginAttemptsLogger {

    private static Logger logger = LoggerFactory.getLogger(LoginAttemptsLogger.class);

    @EventListener
    public void handleEvent(AbstractAuthenticationEvent event) {

        logger.info("User " + event.getAuthentication().getPrincipal().toString() +
                    "access level -> " + event.getAuthentication().getAuthorities() +
                    "action details -> " + event.getAuthentication().getDetails());
    }
}