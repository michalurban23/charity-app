package com.codecool.charityapp.utils;

import com.codecool.charityapp.model.campaign.Campaign;
import com.codecool.charityapp.model.person.contact.Contact;
import com.codecool.charityapp.model.person.user.Role;
import com.codecool.charityapp.model.person.user.User;
import com.codecool.charityapp.repository.CampaignRepository;
import com.codecool.charityapp.repository.ContactPersonRepository;
import com.codecool.charityapp.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.codecool.charityapp.model.campaign.CampaignStatus.*;

@Component
public class DataLoader implements ApplicationListener<ContextRefreshedEvent> {

    private UserRepository userRepo;
    private ContactPersonRepository contactRepo;
    private CampaignRepository campaignRepo;
    private PasswordEncoder encoder;
    private List<Contact> contacts;
    private static final Logger log = LoggerFactory.getLogger(DataLoader.class);

    @Autowired
    public DataLoader(UserRepository userRepo, ContactPersonRepository contactRepo, CampaignRepository campaignRepo, PasswordEncoder encoder) {
        this.userRepo = userRepo;
        this.contactRepo = contactRepo;
        this.campaignRepo = campaignRepo;
        this.encoder = encoder;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {

        addUsers();
        addContacts();
        addCampaigns();
    }

    private void addCampaigns() {

        Campaign campaign1 = Campaign.builder()
                .name("First Campaign")
                .contacts(Arrays.asList(contacts.get(0), contacts.get(1)))
                .status(ACTIVE)
                .build();
        Campaign campaign2 = Campaign.builder()
                .name("Second Campaign")
                .contacts(Arrays.asList(contacts.get(1), contacts.get(2)))
                .status(ACTIVE)
                .build();

        List<Campaign> campaigns = Arrays.asList(campaign1, campaign2);
        campaignRepo.saveAll(campaigns);
        log.info("Saved 2 campaigns");
    }

    private void addContacts() {

        this.contacts = new ArrayList<>();

        Contact contact1 = Contact.builder().phoneNumber("123456789").build();
        contact1.setEmail("contact@email.com");
        contact1.setFirstName("Kazimierz");
        contact1.setLastName("Jagiellończyk");

        Contact contact2 = Contact.builder().phoneNumber("123456780").build();
        contact2.setEmail("anothercontact@email.com");
        contact2.setFirstName("Władysław");
        contact2.setLastName("Łokietek");

        Contact contact3 = Contact.builder().phoneNumber("126666780").build();
        contact3.setEmail("yetanothercontact@email.com");
        contact3.setFirstName("Bolesław");
        contact3.setLastName("Chrobry");

        List<Contact> contacts = Arrays.asList(contact1, contact2, contact3);
        contactRepo.saveAll(contacts);
        this.contacts.addAll(contacts);
        log.info("Saved 3 contacts");
    }

    private void addUsers() {

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
    }
}
