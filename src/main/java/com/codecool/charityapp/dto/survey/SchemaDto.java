package com.codecool.charityapp.dto.survey;

import java.util.ArrayList;
import java.util.List;

public class SchemaDto {
    private List<FieldDto> fields;

    public SchemaDto() {
        this.fields = new ArrayList<>();
    }

    public List<FieldDto> getFields() {
        return fields;
    }

    public void setFields(List<FieldDto> fields) {
        this.fields = fields;
    }
}
