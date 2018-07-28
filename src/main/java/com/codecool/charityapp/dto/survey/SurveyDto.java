package com.codecool.charityapp.dto.survey;

public class SurveyDto {
    private Long id;
    private String name;
    private SchemaDto schema;

    public SurveyDto() {

    }

    public SurveyDto(Long id, String name, SchemaDto schemaDto) {
        this.id = id;
        this.name = name;
        this.schema = schemaDto;
    }

    public SurveyDto(String name, SchemaDto schemaDto) {
        this.name = name;
        this.schema = schemaDto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean hasId() {
        return this.id != null;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public SchemaDto getSchema() {
        return schema;
    }

    public void setSchema(SchemaDto schema) {
        this.schema = schema;
    }
}
