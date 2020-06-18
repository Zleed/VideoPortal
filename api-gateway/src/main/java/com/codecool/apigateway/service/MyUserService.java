package com.codecool.apigateway.service;

import com.codecool.apigateway.model.MyUser;
import com.codecool.apigateway.model.UserCredentials;
import com.codecool.apigateway.repository.MyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MyUserService {

    @Autowired
    MyUserRepository userRepository;

    private PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

    public MyUser getUserByName(String name) {
        return userRepository.findByName(name).get();
    }

    public MyUser register(UserCredentials user) {
        MyUser newUser = MyUser.builder()
                .name(user.getUserName())
                .password(passwordEncoder.encode(user.getPassword()))
                .roles("USER")
                .build();
        return userRepository.save(newUser);
    }
}
