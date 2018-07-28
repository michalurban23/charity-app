package com.codecool.charityapp.service.api.answer;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class AnswerHelper {

    /**
     *
     * @param questionCode String obtained from question by method getModel() is consists of [lineup]-[questionId]
     * @return questionId Long
     */
    static Long retrieveQuestionIdFromCode(String questionCode) {
        Pattern pattern = Pattern.compile("^\\d+-(\\d+)$");
        Matcher matcher = pattern.matcher(questionCode);
        matcher.find();
        String qId = matcher.group(1);
        return Long.valueOf(qId);

    }
}
