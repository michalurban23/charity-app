package com.codecool.charityapp.service.api.answer;

import com.codecool.charityapp.dto.answer.AnswerDto;
import com.codecool.charityapp.model.fc.Answer;
import com.codecool.charityapp.model.fc.Contact;
import com.codecool.charityapp.model.fc.Question;
import com.codecool.charityapp.model.fc.Survey;
import com.codecool.charityapp.repository.ContactRepository;
import com.codecool.charityapp.repository.QuestionRepository;
import com.codecool.charityapp.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class AnswerTranslator {

    @Autowired
    ContactRepository contactRepository;

    @Autowired
    SurveyRepository surveyRepository;

    @Autowired
    QuestionRepository questionRepository;

    public Set<Answer> dtoToModel(AnswerDto answerDto) {
        Map<String, List<String>> responses = answerDto.getResponses();
        Contact contact = contactRepository.findById(answerDto.getContactId()).get();

        return createAnswers(responses, contact);
    }

    private Answer createAnswer(Question question, Contact contact, String value) {
        return new Answer(question, contact, value);
    }

    private Set<Answer> createAnswers(Map<String, List<String>> responses, Contact contact) {
        Set<Answer> answers = new HashSet<>();
        for (String questionCode: responses.keySet()) {

            Question question = getQuestionFromCode(questionCode);
            responses.get(questionCode).stream()
                    .forEach(value -> {
                        Answer answer = createAnswer(question, contact, value);
                        answers.add(answer);
                    });
        }
        return answers;
    }

    private Question getQuestionFromCode(String questionCode) {
        long questionId = AnswerHelper.retrieveQuestionIdFromCode(questionCode);
        return questionRepository.findById(questionId).get();
    }

    public List<AnswerDto> modelToDto(List<Answer> answers) {

        List<AnswerDto> answerDtoList = new ArrayList<>();

        for (Answer answer: answers) {
            AnswerDto dto = retrieveDto(answer, answerDtoList);
            addAnswerToDto(dto, answer);
        }

        return answerDtoList;
    }

    private AnswerDto retrieveDto(Answer answer, List<AnswerDto> answerDtoList) {
        Long surveyId = getSurveyId(answer);
        Long contactId = answer.getContact().getId();

        return createOrGetDtoIfListed(answerDtoList, surveyId, contactId);
    }

    private AnswerDto createOrGetDtoIfListed(List<AnswerDto> answerDtoList, Long surveyId, Long contactId) {
        AnswerDto dto;

        if (isSurveyListed(surveyId, contactId, answerDtoList)) {
            dto = getAnswerDtoFromListBySurveyIdAndContactId(surveyId, contactId, answerDtoList);
        } else {
            dto = createNewAnswerDto(surveyId, contactId);
            answerDtoList.add(dto);
        }
        return dto;
    }

    private AnswerDto createNewAnswerDto(Long suveyId, Long contactId) {
        AnswerDto answerDto = new AnswerDto();
        answerDto.setSurveyId(suveyId);
        answerDto.setContactId(contactId);

        return answerDto;
    }

    private Long getSurveyId(Answer answer) {
        Question question = answer.getQuestion();
        Survey survey = question.getSurvey();
        return survey.getId();
    }

    private void addAnswerToDto(AnswerDto dto, Answer answer) {
        Map<String, List<String>> responses = dto.getResponses();
        Question question = answer.getQuestion();
        String questionCode = question.getModel();
        String value = answer.getValue();

        createValuesHolderIfNotExists(responses, questionCode);
        addValueToResponses(responses, questionCode, value);
    }

    private void addValueToResponses(Map<String, List<String>> responses, String questionCode, String value) {
        List<String> values = responses.get(questionCode);
        values.add(value);
    }

    private void createValuesHolderIfNotExists(Map<String, List<String>> responses, String questionCode) {
        if (!responses.containsKey(questionCode)) {
            List<String> values = new ArrayList<>();
            responses.put(questionCode, values);
        }
    }

    private boolean isSurveyListed(Long surveyId, Long contactId, List<AnswerDto> answerDtoList) {
        for (AnswerDto dto : answerDtoList) {
            if (dto.getSurveyId().equals(surveyId) && dto.getContactId().equals(contactId)) return true;
        }

        return false;
    }

    private AnswerDto getAnswerDtoFromListBySurveyIdAndContactId(Long surveyId, Long contactId, List<AnswerDto> answerDtoList) {
        AnswerDto adto = null;
        for (AnswerDto dto : answerDtoList) {
            if (dto.getSurveyId().equals(surveyId) && dto.getContactId().equals(contactId)) adto = dto;
        }

        return adto;
    }
}
