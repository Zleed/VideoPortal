package com.codecool.videoservice.service;

import com.codecool.videoservice.model.Rating;
import com.codecool.videoservice.model.Video;
import com.codecool.videoservice.repository.VideoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
@Slf4j
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    public List<Video> getAllVideo() {
       return videoRepository.findAll();
    }

    public Video save(Video video) {
        String youTubeId = video.getUrl().split("=")[1].replaceAll("&t", "");
        video.setUrl("https://www.youtube.com/embed/"+youTubeId);
        video.setYouTubeId(youTubeId);
        video.setRating(buildRating(video));
        videoRepository.save(video);
        return video;
    }

    public Video getVideoBy(Long videoId) {
        return videoRepository.findById(videoId).get();
    }

    public void updateRating(long videoId, int rating) {
        Video video = getVideoBy(videoId);
        try {
            video.getRating().update(rating);
        } catch (NullPointerException e) {
            Rating newRating = buildRating(video);
            newRating.update(rating);
            video.setRating(newRating);
        }
        videoRepository.save(video);
    }

    private Rating buildRating(Video video) {
        return Rating.builder().video(video).sumOfRating(0).numberOfVotes(0).rating(0).build();
    }
}
