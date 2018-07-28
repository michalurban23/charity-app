package com.codecool.charityapp.service.api.survey;

import com.codecool.charityapp.dto.survey.SurveyDto;
import com.codecool.charityapp.service.api.Validator;
import org.springframework.stereotype.Component;

@Component
public class SurveyValidator implements Validator<SurveyDto> {
    @Override
    public boolean isValid(SurveyDto dto) {
        return true;
    }
}
