package com.codecool.charityapp.service;

import com.codecool.charityapp.model.user.User;
import com.codecool.charityapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository repo;
    private PasswordEncoder encoder;

    @Autowired
    public UserServiceImpl(UserRepository repo, PasswordEncoder encoder) {
        this.repo = repo;
        this.encoder = encoder;
    }

    @Override
    public Iterable<User> index() {
        return repo.findAll();
    }

    @Override
    public User getUserById(Integer id) {
        return repo.findById(id).get();
    }

    @Override
    public User getUserByEmail(String email) {
        return null;
    }

    @Override
    public User saveUser(User user) {
        if (user.getPassword() == null) {
            user.setPassword("password");
        }
        user.setEncryptedPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    @Override
    public void deleteUser(Integer id) {
        repo.deleteById(id);
    }
}
