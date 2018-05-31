package com.codecool.charityapp.repository;

import com.codecool.charityapp.model.user.Role;
import com.codecool.charityapp.model.user.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataLoader implements ApplicationListener<ContextRefreshedEvent> {

    private UserRepository userRepo;
    private CallerRepository callerRepo;
    private static final Logger log = LoggerFactory.getLogger(DataLoader.class);

    @Autowired
    public DataLoader(UserRepository userRepo, CallerRepository callerRepo) {
        this.userRepo = userRepo;
        this.callerRepo = callerRepo;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {

        User user1 = User.builder().email("email@email.com").password("password").role(Role.SUPERUSER).build();
        user1.setFirstName("Jan");
        user1.setLastName("Kowalski");

        User user2 = User.builder().email("wololo@email.com").password("password").role(Role.ADMIN).build();
        user2.setFirstName("Janek");
        user2.setLastName("Wiśniewski");

        User user3 = User.builder().email("justuser@email.com").password("password").role(Role.USER).build();
        user3.setFirstName("Adam");
        user3.setLastName("Nowak");

        userRepo.saveAll(Arrays.asList(user1, user2, user3));
        log.info("Saved 3 users");
    }
}
