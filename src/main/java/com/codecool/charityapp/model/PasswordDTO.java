package com.codecool.charityapp.model;

import com.codecool.charityapp.model.user.User;
import org.springframework.stereotype.Component;

@Component
public class PasswordDTO {

    private User user;
    private String oldPass;
    private String newPass;
    private String confirmPass;

    public boolean isNew() {
        return !oldPass.equals(newPass);
    }

    public boolean isMatching() {
        return newPass.equals(confirmPass);
    }

    public String getOldPass() {

        return oldPass;
    }

    public void setOldPass(String oldPass) {

        this.oldPass = oldPass;
    }

    public String getNewPass() {

        return newPass;
    }

    public void setNewPass(String newPass) {

        this.newPass = newPass;
    }

    public String getConfirmPass() {

        return confirmPass;
    }

    public void setConfirmPass(String confirmPass) {

        this.confirmPass = confirmPass;
    }

    public User getUser() {

        return user;
    }

    public void setUser(User user) {

        this.user = user;
    }

    @Override
    public String toString() {

        return "PasswordDTO{" + "user=" + user + ", oldPass='" + oldPass + '\'' + ", newPass='" + newPass + '\'' + ", confirmPass='" + confirmPass + '\'' + '}';
    }
}
