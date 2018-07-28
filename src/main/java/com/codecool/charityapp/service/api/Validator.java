package com.codecool.charityapp.service.api;

public interface Validator<T> {
    boolean isValid(T dto);
}
