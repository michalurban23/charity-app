package com.codecool.charityapp.service;

import com.codecool.charityapp.model.person.contact.Contact;
import org.springframework.stereotype.Service;

@Service
public interface ContactService {

    Iterable<Contact> index();
    Contact getContactById(Integer id);
    Contact saveContact(Contact user);
    void deleteContact(Integer id);
}
