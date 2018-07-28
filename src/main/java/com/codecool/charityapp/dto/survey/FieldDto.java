package com.codecool.charityapp.dto.survey;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.util.List;
import java.util.Map;

@JsonDeserialize(using = FieldCustomDeserializer.class)
@JsonSerialize(using = FieldCustomSerializer.class)
public class FieldDto {
    String type;
    String label;
    String model;
    Integer lineup;
    Map<String, String> properties;
    List<String> values;

    public FieldDto(String type, String label, String model, Integer lineup, Map<String, String> properties, List<String> values) {
        this.type = type;
        this.label = label;
        this.model = model;
        this.lineup = lineup;
        this.properties = properties;
        this.values = values;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getLineup() {
        return lineup;
    }

    public void setLineup(Integer lineup) {
        this.lineup = lineup;
    }

    public Map<String, String> getProperties() {
        return properties;
    }

    public void setProperties(Map<String, String> properties) {
        this.properties = properties;
    }

    public List<String> getValues() {
        return values;
    }

    public void setValues(List<String> values) {
        this.values = values;
    }
}
