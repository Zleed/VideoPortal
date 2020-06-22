package com.codecool.apigateway.controller;

import com.codecool.apigateway.service.MyUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private MyUserService userService;

    @GetMapping("/name/{id}")
    public Character getUserNameFirstLetter(@PathVariable("id") long id) {
        return userService.getById(id).getName().charAt(0);
    }

}
