package com.codecool.charityapp.model.user;

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
public class User extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

//    @NotNull
//    private String username;

//    @NotNull
    private String email;

//    @Transient
    private String password;

//    @NotNull
    private String encryptedPassword;

    @Enumerated(EnumType.STRING)
    private Role role;
}
