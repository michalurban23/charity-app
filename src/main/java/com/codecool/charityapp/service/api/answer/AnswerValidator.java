package com.codecool.charityapp.service.api.answer;

import com.codecool.charityapp.controller.api.ResourceNotFoundException;
import com.codecool.charityapp.dto.answer.AnswerDto;
import com.codecool.charityapp.model.fc.Contact;
import com.codecool.charityapp.model.fc.Question;
import com.codecool.charityapp.model.fc.Survey;
import com.codecool.charityapp.repository.ContactRepository;
import com.codecool.charityapp.repository.QuestionRepository;
import com.codecool.charityapp.repository.SurveyRepository;
import com.codecool.charityapp.service.api.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class AnswerValidator implements Validator<AnswerDto> {

    @Autowired
    SurveyRepository surveyRepository;

    @Autowired
    ContactRepository contactRepository;

    @Autowired
    QuestionRepository questionRepository;

    @Override
    public boolean isValid(AnswerDto dto) throws ResourceNotFoundException {

        isSurveyIdValid(dto);
        isContactIdValid(dto);
        areResponsesValid(dto);

        return true;
    }

    private void isSurveyIdValid(AnswerDto dto) throws ResourceNotFoundException {

        long surveyId = dto.getSurveyId();
        Optional<Survey> optionalSurvey = surveyRepository.findById(surveyId);
        optionalSurvey.orElseThrow(() -> new ResourceNotFoundException("survey", surveyId));
    }

    private void isContactIdValid(AnswerDto dto) throws ResourceNotFoundException {

        long contactId = dto.getContactId();
        Optional<Contact> optionalContact = contactRepository.findById(contactId);
        optionalContact.orElseThrow(() -> new ResourceNotFoundException("contact", contactId));
    }

    private void isQuestionIdValid(long questionId) throws ResourceNotFoundException {

        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        optionalQuestion.orElseThrow(() -> new ResourceNotFoundException("question", questionId));
    }


    private void areResponsesValid(AnswerDto answerDto) throws ResourceNotFoundException {
        //
        //        Map<String, String[]> responses = answerDto.getResponses();
        //
        //        for (String questionCode: responses.keySet()) {
        //            Long questionId = AnswerHelper.retrieveQuestionIdFromCode(questionCode);
        //            isQuestionIdValid(questionId);
        //        }
    }

}


/*
{id surweja : x,
 id contacta: y,
 odpowiedzi : {
 lineup-id: odp1,
 pyt2: odp2
 }
 }
 */
