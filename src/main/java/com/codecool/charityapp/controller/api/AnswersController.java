package com.codecool.charityapp.controller.api;

import com.codecool.charityapp.dto.answer.AnswerDto;
import com.codecool.charityapp.model.fc.Answer;
import com.codecool.charityapp.model.fc.Contact;
import com.codecool.charityapp.repository.AnswerRepository;
import com.codecool.charityapp.repository.ContactRepository;
import com.codecool.charityapp.repository.QuestionRepository;
import com.codecool.charityapp.service.api.answer.AnswerTranslator;
import com.codecool.charityapp.service.api.answer.AnswerValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

/**
 * Controller responsible for managment answers for the surveys, accessible under path /answers
 */
@CrossOrigin
@RestController
@RequestMapping("/answers")
public class AnswersController {

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    ContactRepository contactRepository;

    @Autowired
    AnswerRepository answerRepository;

    @Autowired
    AnswerTranslator answerTranslator;

    @Autowired
    AnswerValidator answerValidator;

    /**
     * Saves answer to database
     * @param dto AnswerDto
     * @return surveyId Long
     * @throws ResourceNotFoundException if contactId or surveyId or questionId or answer is not valid
     *
     * request POST with AnswerDto json in the body must be send to the /answers
     */
    @RequestMapping(method = RequestMethod.POST)
    public Long createAnswer(@RequestBody AnswerDto dto) throws ResourceNotFoundException {

        Long surveyId = null;

        if (answerValidator.isValid(dto)) {

            long contactId = dto.getContactId();
            surveyId = dto.getSurveyId();

            Set<Answer> answers = answerTranslator.dtoToModel(dto);

            Contact contact = contactRepository.findById(contactId).get();

            contact.addAnswers(answers);

            saveAnswers(answers);
        }

        return surveyId;
    }

    private void saveAnswers(Set<Answer> answers) {

        for (Answer answer: answers) {
            answerRepository.save(answer);
        }
    }

    /**
     * Retrieves list of answers of contact specified by id passed as path variable
     * @param contactId Long
     * @return answers List of AnswerDto all that was given by contact specified by id
     * @exception ResourceNotFoundException if contact did not give any
     *
     * request GET to /answers/contact/{contactId}
     */
    @RequestMapping(path = "contact/{contactId}", method = RequestMethod.GET)
    public List<AnswerDto> getAnswersOfContact(@PathVariable Long contactId) {

        List<Answer> answers = answerRepository.getAnswersByContact_Id(contactId);
        if (answers.isEmpty()) throw new ResourceNotFoundException("answers of the contact", contactId);

        return answerTranslator.modelToDto(answers);
    }

    /**
     * Retrieves list of filled forms of specified id
     * @param surveyId Long
     * @return list of AnswerDto
     *
     * request GET /answers/survey/{surveyId}
     */
    @RequestMapping(path = "survey/{surveyId}", method = RequestMethod.GET)
    public List<AnswerDto> getAnswersOfSurvey(@PathVariable Long surveyId) {
        List<Answer> answers = answerRepository.getAnswersByQuestionSurveyId(surveyId);
        return answerTranslator.modelToDto(answers);
    }

    /**
     * Retrieves form of specified surveyId filled by spec. contactId
     * @param surveyId
     * @param contactId
     * @throws ResourceNotFoundException if contact didn't fill the survey or the survey of specified id doesn't exist
     * @return List of AnswerDto
     *
     * request GET /naswers?surveyId={surveyId}&contactId={contactId}
     */
    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<AnswerDto> getAnswersOfSurvey(@RequestParam("surveyId") Long surveyId, @RequestParam("contactId") Long contactId) {

        List<Answer> answers = answerRepository.getAnswersByQuestionSurveyIdAndContactId(surveyId, contactId);
        if (answers.isEmpty())
            throw new ResourceNotFoundException(String.format("answers of contact %d for survey", contactId), surveyId);

        return answerTranslator.modelToDto(answers);
    }
}

