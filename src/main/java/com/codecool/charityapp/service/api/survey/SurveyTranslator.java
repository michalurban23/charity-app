package com.codecool.charityapp.service.api.survey;

import com.codecool.charityapp.dto.survey.FieldDto;
import com.codecool.charityapp.dto.survey.SchemaDto;
import com.codecool.charityapp.dto.survey.SurveyDto;
import com.codecool.charityapp.model.fc.AvailableAnswer;
import com.codecool.charityapp.model.fc.Property;
import com.codecool.charityapp.model.fc.Question;
import com.codecool.charityapp.model.fc.Survey;
import com.codecool.charityapp.service.api.Translator;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class SurveyTranslator implements Translator<SurveyDto, Survey> {

    public SurveyDto modelToDto(Survey survey) {
        Long id = survey.getId();
        String name = survey.getName();
        SchemaDto schema = new SchemaDto();
        schema.setFields(translateQuestionsToFields(survey.getQuestions()));

        return new SurveyDto(id, name, schema);
    }

    private List<FieldDto> translateQuestionsToFields(Set<Question> questions) {
        List<FieldDto> fields = new ArrayList<>();
        for(Question question : questions) {
            fields.add(getFieldFromQuestion(question));
        }

        Collections.sort(fields, (final FieldDto f1, final FieldDto f2) -> f1.getLineup().compareTo(f2.getLineup()));

        return fields;
    }

    private FieldDto getFieldFromQuestion(Question question) {
        Map<String, String> properties = translateProperties(question.getProperties());
        List<String> values = translateValues(question.getAvailableAnswers());

        return new FieldDto(question.getType(), question.getDescription(), question.getModel(), question.getLineup(), properties, values);

    }

    private List<String> translateValues(Set<AvailableAnswer> availableAnswers) {
        List<String> values = new ArrayList<>();

        for(AvailableAnswer availableAnswer : availableAnswers) {
            values.add(availableAnswer.getValue());
        }

        return values;
    }

    private Map<String,String> translateProperties(Set<Property> properties) {
        Map<String, String> propertiesMap = new HashMap<>();

        for(Property property : properties) {
            propertiesMap.put(property.getProperty(), property.getValue());
        }

        return propertiesMap;
    }


    public Survey dtoToModel(SurveyDto surveyDto) {
        Survey survey = new Survey();

        survey.setName(surveyDto.getName());
        survey.setQuestions(createQuestions(surveyDto.getSchema(), survey));
        if(surveyDto.hasId()) {
            survey.setId(surveyDto.getId());
        }

        return survey;
    }

    private Set<Question> createQuestions(SchemaDto schema, Survey survey) {
        Set<Question> questions = new HashSet<>();
        for(FieldDto field : schema.getFields()) {
            questions.add(createSingleQuestion(field, survey));
        }
        return questions;
    }

    private Question createSingleQuestion(FieldDto fieldDto, Survey survey) {
        Question question = new Question();

        question.setSurvey(survey);

        question.setType(fieldDto.getType());
        question.setDescription(fieldDto.getLabel());
        question.setLineup(fieldDto.getLineup());

        Set<Property> properties = createProperties(question, fieldDto);
        question.setProperties(properties);

        Set<AvailableAnswer> availableAnswers = createAvailableAnswers(question, fieldDto);
        question.setAvailableAnswers(availableAnswers);

        return question;
    }

    private Set<AvailableAnswer> createAvailableAnswers(Question question, FieldDto fieldDto) {
        Set<AvailableAnswer> availableAnswers = new HashSet<>();
        for(String value : fieldDto.getValues()) {
            availableAnswers.add(new AvailableAnswer(question, value));
        }
        return availableAnswers;
    }

    private Set<Property> createProperties(Question question, FieldDto fieldDto) {
        Set<Property> properties = new HashSet<>();
        for(String propertyStr : fieldDto.getProperties().keySet()) {
            String value = fieldDto.getProperties().get(propertyStr);
            Property property = new Property(question, propertyStr, value);
            properties.add(property);
        }

        return properties;
    }
}
