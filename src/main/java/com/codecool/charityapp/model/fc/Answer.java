package com.codecool.charityapp.model.fc;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
public class Answer extends AbstractEntity {

    @ManyToOne
    private Question question;

    @ManyToOne
    private Contact contact;

    private String value;

    public Answer(Question question, Contact contact, String value) {
        this.question = question;
        this.contact = contact;
        this.value = value;
    }

    public Answer() {}

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Answer answer = (Answer) o;
        return Objects.equals(question, answer.question) &&
                Objects.equals(contact, answer.contact) &&
                Objects.equals(value, answer.value);
    }

    @Override
    public int hashCode() {

        return Objects.hash(question, contact, value);
    }
}
