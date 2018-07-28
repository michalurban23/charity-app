package com.codecool.charityapp.dto.survey;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class FieldCustomDeserializer extends StdDeserializer<FieldDto> {
    public FieldCustomDeserializer() {
        this(null);
    }

    public FieldCustomDeserializer(Class<?> vc) {
        super(vc);
    }

    @Override
    public FieldDto deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);

        String type = node.get("type").textValue();
        String label = node.get("label").textValue();
        Integer lineup = node.get("lineup").intValue();

        Map<String, String> properties = findProperties(node);

        List<String> values = findValues(node);

        return new FieldDto(type, label, "", lineup, properties, values);
    }

    private List<String> findValues(JsonNode node) {
        List<String> values = new ArrayList<>();
        if(node.has("values")) {

            JsonNode valuesNode = node.get("values");
            if (valuesNode.isArray()) {
                for (final JsonNode value : valuesNode) {
                    values.add(value.asText());
                }
            }
        }

        return values;
    }

    private Map<String,String> findProperties(JsonNode node) {
        Map<String, String> properties = new HashMap<>();

        Iterable<String> nodesNames = node::fieldNames;
        List<String> otherNodesNames = StreamSupport.stream(nodesNames.spliterator(), false)
                .filter(name -> !name.equals("type"))
                .filter(name -> !name.equals("label"))
                .filter(name -> !name.equals("values"))
                .collect(Collectors.toList());

        for(String name : otherNodesNames) {
            properties.put(name, node.get(name).asText());
        }

        return properties;
    }
}
