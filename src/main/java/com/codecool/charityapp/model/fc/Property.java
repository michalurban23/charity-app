package com.codecool.charityapp.model.fc;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class Property extends AbstractEntity {

    public Property() {}

    public Property(Question question, String property, String value) {
        this.question = question;
        this.property = property;
        this.value = value;
    }

    @ManyToOne
    private Question question;

    private String property;
    private String value;

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public String getProperty() {
        return property;
    }

    public void setProperty(String property) {
        this.property = property;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}