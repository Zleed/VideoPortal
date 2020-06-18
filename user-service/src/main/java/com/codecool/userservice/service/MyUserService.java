package com.codecool.userservice.service;

import com.codecool.userservice.model.MyUser;
import com.codecool.userservice.repository.MyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class MyUserService {

    @Autowired
    MyUserRepository userRepository;

    public MyUser getUserByName(String name) {
        return userRepository.findByName(name);
    }

    public MyUser registerUser(MyUser user) {
        return userRepository.save(user);
    }
}
