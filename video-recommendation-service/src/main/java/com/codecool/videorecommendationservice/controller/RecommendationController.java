package com.codecool.videorecommendationservice.controller;

import com.codecool.videorecommendationservice.model.Recommendation;
import com.codecool.videorecommendationservice.service.RecommendationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/recommendation")
public class RecommendationController {

    @Autowired
    RecommendationService recommendationService;

    @GetMapping("/{videoId}")
    public Recommendation[] getAllRecommendationsByVideoId(@PathVariable("videoId") Long videoId) {
        return recommendationService.getAllByVideoId(videoId);
    }

    @PostMapping("/{videoId}")
    public Recommendation saveNewRecommendation(@RequestBody Recommendation recommendation) {
        return recommendationService.save(recommendation);
    }

//    @PostMapping
//    public Recommendation saveNewRecommendation(@RequestBody Recommendation recommendation) {
//        return Recommendation.builder()
//                .recommendations(recommendationService.save(recommendation))
//                .port(env.getProperty("server.port"))
//                .build();

//    }

}
