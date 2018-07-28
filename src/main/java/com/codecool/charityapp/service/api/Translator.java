package com.codecool.charityapp.service.api;

public interface Translator<Dto, Model> {

    Dto modelToDto(Model model);
    Model dtoToModel(Dto dto);
}
