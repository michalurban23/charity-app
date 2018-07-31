package com.codecool.charityapp.repository;

import com.codecool.charityapp.model.call.Call;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CallRepository extends JpaRepository<Call, Integer> {

}
