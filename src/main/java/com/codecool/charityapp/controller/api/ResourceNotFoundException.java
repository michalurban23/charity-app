package com.codecool.charityapp.controller.api;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String resourceName, Long id) {
        super("could not find resource: " + resourceName + " of id: " + id);
    }
}
