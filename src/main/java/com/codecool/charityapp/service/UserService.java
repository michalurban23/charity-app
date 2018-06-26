package com.codecool.charityapp.service;

import com.codecool.charityapp.model.message.Message;
import com.codecool.charityapp.model.PasswordDTO;
import com.codecool.charityapp.model.user.User;

public interface UserService {

    Iterable<User> index();
    User getUserById(Integer id);
    User getUserByEmail(String email);
    User saveUser(User user);
    User updateUser(User oldData, User newData);
    void deleteUser(Integer id);
    Message updatePassword(PasswordDTO newData);
}
