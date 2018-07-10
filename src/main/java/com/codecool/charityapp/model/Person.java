package com.codecool.charityapp.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

@MappedSuperclass
@Setter @Getter
@ToString
public abstract class Person {

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    @Column(unique = true)
    private String email;
}
