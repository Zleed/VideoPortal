package com.codecool.videoservice.repository;

import com.codecool.videoservice.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
    List<Video> getAllByOrderByDateDesc();
    List<Video> getAllByOrderByRatingDesc();
    List<Video> getAllByOrderByPopularityDesc();
}
