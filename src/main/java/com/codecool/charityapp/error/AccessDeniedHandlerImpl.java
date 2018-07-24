package com.codecool.charityapp.error;

import com.codecool.charityapp.model.person.user.Role;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AccessDeniedHandlerImpl implements AccessDeniedHandler {

    private static Logger logger = LoggerFactory.getLogger(AccessDeniedHandlerImpl.class);

    @Override
    public void handle(HttpServletRequest httpServletRequest,
                       HttpServletResponse httpServletResponse,
                       AccessDeniedException e) throws IOException, ServletException {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        GrantedAuthority newCoordinator = new SimpleGrantedAuthority(Role.COORDINATOR_NEW.toString());
        GrantedAuthority newConsultant = new SimpleGrantedAuthority(Role.CONSULTANT_NEW.toString());

        if (auth != null) {
            logger.info("User '" + auth.getName()
                    + "' attempted to access the protected URL: "
                    + httpServletRequest.getRequestURI());
            if (auth.getAuthorities().contains(newConsultant) || auth.getAuthorities().contains(newCoordinator)) {
                httpServletResponse.sendRedirect("/password");
            } else {
                httpServletResponse.sendRedirect("/403");
            }
        } else {
            httpServletResponse.sendRedirect("/403");
        }
    }
}