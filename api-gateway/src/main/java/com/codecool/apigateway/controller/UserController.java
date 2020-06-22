package com.codecool.apigateway.controller;

import com.codecool.apigateway.model.MyUser;
import com.codecool.apigateway.service.MyUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/user/{id}")
public class UserController {

    @Autowired
    private MyUserService userService;

    @GetMapping("/name")
    public Character getUserNameFirstLetter(@PathVariable("id") long id) {
        return userService.getById(id).getName().charAt(0);
    }

    @GetMapping("/fav")
    public Set<Long> getFavVidIds(@PathVariable("id") long id) {
        return userService.getById(id).getFavouriteVideos();
    }

    @PostMapping("/fav/{videoId}")
    public void addFavVid(@PathVariable("id") long id, @PathVariable("videoId") long videoId) {
        MyUser user = userService.getById(id);
        Set<Long> vidIds = user.getFavouriteVideos();
        vidIds.add(videoId);
        user.setFavouriteVideos(vidIds);
        userService.save(user);
    }
}
