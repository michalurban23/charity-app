package com.codecool.charityapp.repository;

import com.codecool.charityapp.model.fc.Contact;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {

    Optional<Contact> findById(Long id);
    Optional<Contact> findByName(String name);

}
