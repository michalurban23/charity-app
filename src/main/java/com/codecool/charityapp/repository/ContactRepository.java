package com.codecool.charityapp.repository;

import com.codecool.charityapp.model.person.contact.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Integer> {
}
