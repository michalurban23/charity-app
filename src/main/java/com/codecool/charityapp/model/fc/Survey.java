package com.codecool.charityapp.model.fc;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Survey extends AbstractEntity {

    public Survey(String name, Set<Question> questions) {
        this.name = name;
        this.questions = questions;
    }

    public Survey() {
        this("", new HashSet<>());
    }

    private String name;

    @OneToMany(mappedBy = "survey", cascade = CascadeType.ALL)
    private Set<Question> questions;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(Set<Question> questions) {
        this.questions = questions;
    }
}
