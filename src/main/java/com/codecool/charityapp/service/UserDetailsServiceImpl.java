package com.codecool.charityapp.service;

import com.codecool.charityapp.dao.UserDetailsImpl;
import com.codecool.charityapp.model.user.User;
import com.codecool.charityapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public UserDetailsServiceImpl(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(final String email) throws UsernameNotFoundException {

        User user = userRepository.findDistinctByEmail(email);

        if (user == null) {
            throw new UsernameNotFoundException("No user with email " + email);
        } else {
            return new UserDetailsImpl(user);
        }
    }
}