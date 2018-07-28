package com.codecool.charityapp.model.fc;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class AvailableAnswer extends AbstractEntity {

    public AvailableAnswer() {

    }

    public AvailableAnswer(Question question, String value) {
        this.question = question;
        this.value = value;
    }

    @ManyToOne
    private Question question;

    private String value;

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
