package com.codecool.charityapp.model.campaign;

import com.codecool.charityapp.model.person.contact.Contact;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Setter @Getter
@Builder
@NoArgsConstructor @AllArgsConstructor
@ToString @EqualsAndHashCode
public class Campaign {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    private String name;

    @ManyToMany
    private List<Contact> contacts;

    @Enumerated(EnumType.STRING)
    private CampaignStatus status;
}

