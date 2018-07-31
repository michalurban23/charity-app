package com.codecool.charityapp.service;

import com.codecool.charityapp.dao.UserDetailsImpl;
import com.codecool.charityapp.model.message.Message;
import com.codecool.charityapp.dto.PasswordDTO;
import com.codecool.charityapp.model.person.user.Role;
import com.codecool.charityapp.model.person.user.User;
import com.codecool.charityapp.repository.UserRepository;
import com.codecool.charityapp.utils.RandomPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import static com.codecool.charityapp.model.message.Type.*;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository repo;
    private PasswordEncoder encoder;
    private EmailServiceImpl mailSender;
    private UserDetailsService userDetailsService;

    @Autowired
    public UserServiceImpl(UserRepository repo, PasswordEncoder encoder, EmailServiceImpl mailSender, UserDetailsService userDetailsService) {
        this.repo = repo;
        this.encoder = encoder;
        this.mailSender = mailSender;
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

        if (user.getId() == null) {
            user.setPassword(RandomPassword.create());
            downgradeRole(user);
            sendRegistrationEmail(user);
            user.setEncryptedPassword(encoder.encode(user.getPassword()));
        } else {
            updateRole(user);
        }
        return repo.save(user);
    }

    private void sendRegistrationEmail(User user) {
        mailSender.sendSimpleMessage(user.getEmail(), "Your Password", user.getPassword());
    }

    @Override
    public void deleteUser(Integer id) {
        repo.deleteById(id);
    }

    @Override
    public User updateUser(User oldData, User newData) {

        if (!oldData.getEmail().equals(newData.getEmail())) {
            updateCurrentSessionAuth(newData);
        }
        copy(oldData, newData);

        return repo.save(oldData);
    }

    @Override
    public Message updatePassword(PasswordDTO newPass) {

        User user = newPass.getUser();

        if (isPassCorrect(newPass) && newPass.isMatching() && newPass.isNew()) {
            user.setEncryptedPassword(encoder.encode(newPass.getNewPass()));
            upgradeRole(user);
            repo.save(user);
            return new Message("Hasło zostało zmienione.", SUCCESS);
        } else {
            return new Message("Nie udało się zmienić hasła. Spróbuj ponownie.", WARNING);
        }
    }

    private void upgradeRole(User user) {

        if (user.getRole().equals(Role.COORDINATOR_NEW)) {
            user.setRole(Role.COORDINATOR);
        }
        if (user.getRole().equals(Role.CONSULTANT_NEW)) {
            user.setRole(Role.CONSULTANT);
        }
    }

    private void downgradeRole(User user) {

        if (user.getRole().equals(Role.COORDINATOR)) {
            user.setRole(Role.COORDINATOR_NEW);
        }
        if (user.getRole().equals(Role.CONSULTANT)) {
            user.setRole(Role.CONSULTANT_NEW);
        }
    }

    private void updateRole(User user) {

        if (repo.findDistinctById(user.getId()).getRole().equals(Role.CONSULTANT_NEW)) {
            user.setRole(Role.CONSULTANT_NEW);
        } else if (repo.findDistinctById(user.getId()).getRole().equals(Role.COORDINATOR_NEW)) {
            user.setRole(Role.COORDINATOR_NEW);
        }

    }

    private boolean isPassCorrect(PasswordDTO pass) {
        return encoder.matches(pass.getOldPass(), pass.getUser().getEncryptedPassword());
    }

    private void updateCurrentSessionAuth(User newData) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Authentication newAuth = new UsernamePasswordAuthenticationToken(
                new UserDetailsImpl(newData), auth.getCredentials(), auth.getAuthorities());

        SecurityContextHolder.getContext().setAuthentication(newAuth);
    }

    private void copy(User oldData, User newData) {

        oldData.setFirstName(newData.getFirstName());
        oldData.setLastName(newData.getLastName());
        oldData.setEmail(newData.getEmail());
    }
}
