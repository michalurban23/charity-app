package com.codecool.charityapp.model.call;

import com.codecool.charityapp.model.person.contact.Contact;
import com.codecool.charityapp.model.person.user.User;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@ToString @EqualsAndHashCode
public class Call {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private Contact contact;

    @ManyToOne
    private User user;

    private LocalDateTime time;

    @Enumerated(value = EnumType.STRING)
    private CallStatus status;
}
