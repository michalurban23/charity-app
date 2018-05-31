package com.codecool.charityapp.service;

import com.codecool.charityapp.model.user.User;

public interface UserService {

    Iterable<User> index();
    User getUserById(Integer id);
    User getUserByEmail(String email);
    User saveUser(User user);
    void deleteUser(Integer id);
}
