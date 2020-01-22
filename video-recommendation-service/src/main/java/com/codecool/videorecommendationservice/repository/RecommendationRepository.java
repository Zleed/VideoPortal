package com.codecool.videorecommendationservice.repository;

import com.codecool.videorecommendationservice.model.Recommendation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {
    List<Recommendation> findAllByVideoId (Long videoId);
}