package com.codecool.videoservice.service;

import com.codecool.videoservice.model.RecommendationModel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Slf4j
public class RecommendationServiceCaller {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${video-recommendation-service.url}")
    private String baseUrl;

    public RecommendationModel[] getVideoRecommendationList(Long videoId) {
        return restTemplate.getForEntity(baseUrl+"/"+videoId, RecommendationModel[].class).getBody();
    }

    public void save(long videoId, RecommendationModel recommendation) {
        restTemplate.postForEntity(baseUrl+"/"+videoId, recommendation,RecommendationModel.class);
    }

}
