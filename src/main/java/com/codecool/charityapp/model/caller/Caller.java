package com.codecool.charityapp.model.caller;

import com.codecool.charityapp.model.Person;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Setter @Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString @EqualsAndHashCode(callSuper = false)
public class Caller extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    private String phoneNumber;
}
