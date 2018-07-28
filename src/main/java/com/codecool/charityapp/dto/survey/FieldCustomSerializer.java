package com.codecool.charityapp.dto.survey;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;

public class FieldCustomSerializer extends StdSerializer<FieldDto> {
    public FieldCustomSerializer() {
        this(null);
    }

    public FieldCustomSerializer(Class<FieldDto> t) {
        super(t);
    }

    @Override
    public void serialize(FieldDto fieldDto, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeStringField("label", fieldDto.label);
        jsonGenerator.writeStringField("type", fieldDto.type);
        jsonGenerator.writeStringField("model", fieldDto.model);
        jsonGenerator.writeNumberField("lineup", fieldDto.lineup);

        if(!fieldDto.values.isEmpty()) {
            jsonGenerator.writeArrayFieldStart("values");
            for(String value : fieldDto.values) {
                jsonGenerator.writeString(value);
            }
            jsonGenerator.writeEndArray();
        }

        for(String propety : fieldDto.properties.keySet()) {

            String value = fieldDto.properties.get(propety);
            if(value.equalsIgnoreCase("true") || value.equalsIgnoreCase("false")) {
                jsonGenerator.writeBooleanField(propety, Boolean.valueOf(value));
            } else {
                jsonGenerator.writeStringField(propety, value);
            }

        }

        jsonGenerator.writeEndObject();
    }
}
