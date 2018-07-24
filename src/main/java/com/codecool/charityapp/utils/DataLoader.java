package com.codecool.charityapp.utils;

import com.codecool.charityapp.model.person.contact.Contact;
import com.codecool.charityapp.model.person.user.Role;
import com.codecool.charityapp.model.person.user.User;
import com.codecool.charityapp.repository.ContactRepository;
import com.codecool.charityapp.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataLoader implements ApplicationListener<ContextRefreshedEvent> {

    private UserRepository userRepo;
    private ContactRepository contactRepo;
    private PasswordEncoder encoder;
    private static final Logger log = LoggerFactory.getLogger(DataLoader.class);

    @Autowired
    public DataLoader(UserRepository userRepo, ContactRepository contactRepo, PasswordEncoder encoder) {
        this.userRepo = userRepo;
        this.contactRepo = contactRepo;
        this.encoder = encoder;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {

        User user1 = User.builder()
                .encryptedPassword(encoder.encode("password"))
                .role(Role.COORDINATOR).build();
        user1.setEmail("coordinator@email.com");
        user1.setFirstName("Jan");
        user1.setLastName("Kowalski");

        User user2 = User.builder()
                .encryptedPassword(encoder.encode("password"))
                .role(Role.CONSULTANT).build();
        user2.setEmail("consultant@email.com");
        user2.setFirstName("Janek");
        user2.setLastName("Wiśniewski");

        User user3 = User.builder()
                .encryptedPassword(encoder.encode("password"))
                .role(Role.VISOR).build();
        user3.setEmail("visor@email.com");
        user3.setFirstName("Adam");
        user3.setLastName("Nowak");

        User user4 = User.builder()
                .encryptedPassword(encoder.encode("password"))
                .role(Role.CONSULTANT_NEW).build();
        user4.setEmail("new@email.com");
        user4.setFirstName("Stefan");
        user4.setLastName("Batory");

        userRepo.saveAll(Arrays.asList(user1, user2, user3, user4));
        log.info("Saved 4 users");
        log.info(user1.getEmail());
        log.info(user2.getEmail());
        log.info(user3.getEmail());
        log.info(user4.getEmail());

        Contact contact1 = Contact.builder().phoneNumber("123456789").build();
        contact1.setEmail("contact@email.com");
        contact1.setFirstName("Kazimierz");
        contact1.setLastName("Jagiellończyk");

        Contact contact2 = Contact.builder().phoneNumber("123456780").build();
        contact2.setEmail("anothercontact@email.com");
        contact2.setFirstName("Władysław");
        contact2.setLastName("Łokietek");

        contactRepo.saveAll(Arrays.asList(contact1, contact2));
        log.info("Saved 2 contacts");
        log.info(contact1.getEmail());
        log.info(contact2.getEmail());
    }
}
