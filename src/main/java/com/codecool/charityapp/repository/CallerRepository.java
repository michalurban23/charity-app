package com.codecool.charityapp.repository;

import com.codecool.charityapp.model.caller.Caller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CallerRepository extends JpaRepository<Caller, Integer> {
}
