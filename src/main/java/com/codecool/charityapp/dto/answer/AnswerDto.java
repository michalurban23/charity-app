package com.codecool.charityapp.dto.answer;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class AnswerDto {

    private Long surveyId;
    private Long contactId;
    private Map<String, List<String>> responses = new TreeMap<>();

    public AnswerDto(long surveyId, long contactId, Map<String, List<String>> responses) {
        this.surveyId = surveyId;
        this.contactId = contactId;
        this.responses = responses;
    }

    public AnswerDto() {}

    public Long getSurveyId() {
        return surveyId;
    }

    public void setSurveyId(long surveyId) {
        this.surveyId = surveyId;
    }

    public Long getContactId() {
        return contactId;
    }

    public void setContactId(long contactId) {
        this.contactId = contactId;
    }

    public Map<String, List<String>> getResponses() {
        return responses;
    }

    public void setResponses(Map<String, List<String>> responses) {
        this.responses = responses;
    }

    @Override
    public boolean equals(Object other) {
        if (!(other instanceof AnswerDto)) return false;
        if (((AnswerDto) other).getSurveyId().equals(this.surveyId) &&
                ((AnswerDto) other).contactId.equals(this.contactId)) return true;
        else return false;
    }

    @Override
    public int hashCode() {
        return surveyId.hashCode() + contactId.hashCode();
    }
}