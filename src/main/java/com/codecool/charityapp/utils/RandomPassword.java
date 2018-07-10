package com.codecool.charityapp.utils;

import java.util.Random;

public class RandomPassword {

    public static String create() {

        StringBuilder sb = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < 16; i++) {
            sb.append(Character.toString((char) (random.nextInt(78) + 48)));
        }

        return sb.toString();
    }
}