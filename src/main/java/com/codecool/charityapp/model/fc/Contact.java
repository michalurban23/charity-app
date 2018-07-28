package com.codecool.charityapp.model.fc;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Contact extends AbstractEntity {

    private String name;

    @OneToMany(mappedBy = "contact", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Answer> answers;

    public Contact() {
        this.answers = new HashSet<>();
    }

    public Contact(String name, Set<Answer> answers) {
        this.name = name;
        this.answers = answers;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(Set<Answer> answers) {
        this.answers = answers;
    }

    public void addAnswers(Set<Answer> answers) {

        for (Answer answer: answers) {
            answer.setContact(this);
            this.answers.add(answer);
        }
    }
}
