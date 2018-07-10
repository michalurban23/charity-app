package com.codecool.charityapp.model.user;

import com.codecool.charityapp.model.Person;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Setter @Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
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
