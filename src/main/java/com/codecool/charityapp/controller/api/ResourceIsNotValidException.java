package com.codecool.charityapp.controller.api;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ResourceIsNotValidException extends RuntimeException {
    public ResourceIsNotValidException(String survey) {
        super("Given resource: " + survey + " is not valid");
    }
}
