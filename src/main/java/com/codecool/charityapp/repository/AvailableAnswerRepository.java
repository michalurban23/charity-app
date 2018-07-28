package com.codecool.charityapp.repository;

import com.codecool.charityapp.model.fc.AvailableAnswer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvailableAnswerRepository extends CrudRepository<AvailableAnswer, Long> {
}