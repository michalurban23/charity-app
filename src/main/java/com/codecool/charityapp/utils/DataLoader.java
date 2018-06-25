package com.codecool.charityapp.utils;

import com.codecool.charityapp.model.user.Role;
import com.codecool.charityapp.model.user.User;
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
                .newlyRegistered(false)
                .role(Role.COORDINATOR).build();
        user1.setEmail("coordinator@email.com");
        user1.setFirstName("Jan");
        user1.setLastName("Kowalski");

        User user2 = User.builder()
                .encryptedPassword(encoder.encode("password"))
                .newlyRegistered(false)
                .role(Role.CONSULTANT).build();
        user2.setEmail("consultant@email.com");
        user2.setFirstName("Janek");
        user2.setLastName("Wiśniewski");

        User user3 = User.builder()
                .encryptedPassword(encoder.encode("password"))
                .newlyRegistered(false)
                .role(Role.VISOR).build();
        user3.setEmail("visor@email.com");
        user3.setFirstName("Adam");
        user3.setLastName("Nowak");

        userRepo.saveAll(Arrays.asList(user1, user2, user3));
        log.info("Saved 3 users");
        log.info(user1.getEmail());
        log.info(user2.getEmail());
        log.info(user3.getEmail());
    }
}
