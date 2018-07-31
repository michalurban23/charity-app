package com.codecool.charityapp.service;

import com.codecool.charityapp.model.call.Call;
import org.springframework.stereotype.Service;

@Service
public interface CallService {

    Call getCallById(Integer id);
    Call saveCall(Call call);
    void deleteCall(Integer id);
}
