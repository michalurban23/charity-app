package com.codecool.charityapp.model.fc;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Question extends AbstractEntity {

    public Question(Survey survey, String type, String description, Integer lineup, Set<Property> properties, Set<Answer> answers, Set<AvailableAnswer> availableAnswers) {
        this.survey = survey;
        this.type = type;
        this.description = description;
        this.lineup = lineup;
        this.properties = properties;
        this.answers = answers;
        this.availableAnswers = availableAnswers;
    }

    public Question() {
        this(null, "", "", null, new HashSet<>(), new HashSet<>(), new HashSet<>());
    }

    @ManyToOne
    private Survey survey;

    private String type;

    private String description;

    private Integer lineup;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private Set<Property> properties;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private Set<Answer> answers;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private Set<AvailableAnswer> availableAnswers;

    public String getModel() {
        if(lineup != null && getId() != null) {
            return lineup.toString()+ "-" +
                    getId().toString();
        }

        return "";
    }

    public Survey getSurvey() {
        return survey;
    }

    public void setSurvey(Survey survey) {
        this.survey = survey;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Property> getProperties() {
        return properties;
    }

    public void setProperties(Set<Property> properties) {
        this.properties = properties;
    }

    public Set<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(Set<Answer> answers) {
        this.answers = answers;
    }

    public Set<AvailableAnswer> getAvailableAnswers() {
        return availableAnswers;
    }

    public void setAvailableAnswers(Set<AvailableAnswer> availableAnswers) {
        this.availableAnswers = availableAnswers;
    }

    public Integer getLineup() {
        return lineup;
    }

    public void setLineup(int lineup) {
        this.lineup = lineup;
    }

}
