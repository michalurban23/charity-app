package com.codecool.charityapp.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotNull;

@MappedSuperclass
@Setter @Getter
public abstract class Person {

//    @NotNull
    private String firstName;

//    @NotNull
    private String lastName;
}
