package com.codecool.charityapp.model.person.contact;

import com.codecool.charityapp.model.person.Person;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Setter @Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString @EqualsAndHashCode(callSuper = false)
@Table(name = "contact_person")
public class Contact extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    private String phoneNumber;

    public String getFullName() {
        return this.getFirstName() + " " + this.getLastName();
    }
}
