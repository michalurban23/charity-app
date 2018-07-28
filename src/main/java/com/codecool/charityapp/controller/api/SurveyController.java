package com.codecool.charityapp.controller.api;

import com.codecool.charityapp.dto.survey.SurveyDto;
import com.codecool.charityapp.model.fc.Survey;
import com.codecool.charityapp.repository.SurveyRepository;
import com.codecool.charityapp.service.api.survey.SurveyTranslator;
import com.codecool.charityapp.service.api.survey.SurveyValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/surveys")
public class SurveyController {

    @Autowired
    private SurveyRepository surveyRepository;

    @Autowired
    private SurveyTranslator surveyTranslator;

    @Autowired
    private SurveyValidator surveyValidator;


    @RequestMapping(path = "{id}", method = RequestMethod.GET)
    @ResponseBody
    public SurveyDto getSurvey(@PathVariable Long id) {
        Optional<Survey> surveyOptional = this.surveyRepository.findById(id);
        if(surveyOptional.isPresent()) {
            Survey survey = surveyOptional.get();
            return surveyTranslator.modelToDto(survey);
        }
        else {
            throw new ResourceNotFoundException("survey", id);
        }
    }

    @RequestMapping(path = "", method = RequestMethod.GET)
    @ResponseBody
    public Set<SurveyDto> getAllSurveys() {
        Set<SurveyDto> surveyDtos = new HashSet<>();
        for(Survey survey : this.surveyRepository.findAll()) {
            surveyDtos.add(this.surveyTranslator.modelToDto(survey));
        }

        return surveyDtos;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Long createSurvey(@RequestBody SurveyDto surveyDto) {
        if(this.surveyValidator.isValid(surveyDto)) {
            Survey survey = surveyTranslator.dtoToModel(surveyDto);
            Survey savedSurvey = surveyRepository.save(survey);
            return savedSurvey.getId();
        } else {
            throw new ResourceIsNotValidException("survey");
        }
    }

}