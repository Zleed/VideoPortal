package com.codecool.videorecommendationservice.service;

import com.codecool.videorecommendationservice.model.Recommendation;
import com.codecool.videorecommendationservice.repository.RecommendationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class RecommendationService {

    @Autowired
    RecommendationRepository recommendationRepository;

    public Recommendation[] getAllByVideoId(Long videoId) {
        List<Recommendation> recommendationList = recommendationRepository.findAllByVideoId(videoId);
        Recommendation[] recommendationArray = new Recommendation[recommendationList.size()];
        return recommendationList.toArray(recommendationArray);
    }

    public Recommendation save(Recommendation recommendation) {
        recommendationRepository.save(recommendation);
        return recommendation;
    }
}
