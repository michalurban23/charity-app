package com.codecool.charityapp.repository;

import com.codecool.charityapp.model.fc.Question;
import org.springframework.data.repository.CrudRepository;

public interface QuestionRepository extends CrudRepository<Question, Long> {
}