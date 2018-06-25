package com.codecool.charityapp.service;

import com.codecool.charityapp.dao.UserDetailsImpl;
import com.codecool.charityapp.model.user.User;
import com.codecool.charityapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository repo;
    private PasswordEncoder encoder;
    private UserDetailsService userDetailsService;

    @Autowired
    public UserServiceImpl(UserRepository repo, PasswordEncoder encoder, UserDetailsService userDetailsService) {
        this.repo = repo;
        this.encoder = encoder;
        this.userDetailsService = userDetailsService;
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
        return repo.findDistinctByEmail(email);
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

    @Override
    public User updateUser(User oldData, User newData) {

        oldData.setFirstName(newData.getFirstName());
        oldData.setLastName(newData.getLastName());
        oldData.setNewlyRegistered(false);

        if (!oldData.getEmail().equals(newData.getEmail())) {
            updateCurrentSessionAuth(newData);
            oldData.setEmail(newData.getEmail());
        }

        return repo.save(oldData);
    }

    private void updateCurrentSessionAuth(User newData) {

        // UserDetails details = userDetailsService.loadUserByUsername(newData.getEmail());
        // System.out.println(details);
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Authentication newAuth = new UsernamePasswordAuthenticationToken(
                new UserDetailsImpl(newData), auth.getCredentials(), auth.getAuthorities());

        SecurityContextHolder.getContext().setAuthentication(newAuth);
    }
}
