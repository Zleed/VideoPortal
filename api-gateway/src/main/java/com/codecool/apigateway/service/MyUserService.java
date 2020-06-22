package com.codecool.apigateway.service;

import com.codecool.apigateway.model.MyUser;
import com.codecool.apigateway.model.UserCredentials;
import com.codecool.apigateway.repository.MyUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class MyUserService {

    @Autowired
    MyUserRepository userRepository;

    private PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

    public MyUser getUserByName(String name) {
        return userRepository.findByName(name).get();
    }

    public MyUser getById(long id) {
        return userRepository.findById(id).get();
    }

    public MyUser register(UserCredentials user) {
        try {
            getUserByName(user.getUserName());
        } catch (NoSuchElementException e) {
            MyUser newUser = MyUser.builder()
                    .name(user.getUserName())
                    .password(passwordEncoder.encode(user.getPassword()))
                    .roles("USER")
                    .build();
            return userRepository.save(newUser);
        }
        throw new BadCredentialsException("Username is already taken.");
    }
}
