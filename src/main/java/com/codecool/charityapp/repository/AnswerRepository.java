package com.codecool.charityapp.repository;

import com.codecool.charityapp.model.fc.Answer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository extends CrudRepository<Answer, Long> {

    List<Answer> getAnswersByContact_Id(Long contactId);
    List<Answer> getAnswersByQuestionSurveyId(Long surveyId);
    List<Answer> getAnswersByQuestionSurveyIdAndContactId(Long surveyId, Long contactId);

}