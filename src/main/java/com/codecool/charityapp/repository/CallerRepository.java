package com.codecool.charityapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CallerRepository extends JpaRepository<com.codecool.charityapp.model.contact.Contact, Integer> {
}
