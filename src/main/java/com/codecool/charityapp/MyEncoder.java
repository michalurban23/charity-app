package com.codecool.charityapp;

import org.springframework.security.crypto.password.PasswordEncoder;

public class MyEncoder implements PasswordEncoder {

    @Override
    public String encode(CharSequence charSequence) {

        return applyEncoding(charSequence.toString());
    }

    @Override
    public boolean matches(CharSequence charSequence, String s) {

        return s.equals(applyEncoding(charSequence.toString()));
    }

    private String applyEncoding(String s) {

        return new StringBuilder(s).append(s.charAt(1)).reverse().append(s.charAt(1)).toString();
    }
}