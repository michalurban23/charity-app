package com.codecool.charityapp.repository;

import com.codecool.charityapp.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findDistinctByEmail(String email);
    User findDistinctById(Integer id);
}
