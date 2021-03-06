package com.codecool.charityapp.model.person.user;

import com.codecool.charityapp.model.person.Person;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Setter @Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Table(name = "users")
public class User extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Transient
    private String password;

    @NotNull
    private String encryptedPassword;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Override
    public String toString() {

        return "User{" + "id=" + id +
                ", password='" + password + '\'' +
                ", encryptedPassword='" + encryptedPassword + '\'' +
                ", role=" + role + "} " + super.toString();
    }
}
