package com.codecool.charityapp.service;

import com.codecool.charityapp.model.person.contact.Contact;
import com.codecool.charityapp.repository.ContactPersonRepository;
import org.springframework.stereotype.Service;

@Service
public class ContactServiceImpl implements ContactService {

    private ContactPersonRepository repo;

    public ContactServiceImpl(ContactPersonRepository repo) {

        this.repo = repo;
    }

    @Override
    public Iterable<Contact> index() {
        return repo.findAll();
    }

    @Override
    public Contact getContactById(Integer id) {
        return repo.findById(id).get();
    }

    @Override
    public Contact saveContact(Contact contact) {

        return repo.save(contact);
    }

    @Override
    public void deleteContact(Integer id) {
        repo.deleteById(id);
    }
}
