package com.codecool.videoservice.service;

import com.codecool.videoservice.model.Video;
import com.codecool.videoservice.repository.VideoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
@Slf4j
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    public List<Video> getAllVideo() {
        return videoRepository.findAll();
    }

    public List<Video> getAllVideoOrderByDate() {
        return videoRepository.getAllByOrderByDateDesc();
    }

    public List<Video> getAllVideoOrderByRating() {
        return videoRepository.getAllByOrderByRatingDesc();
    }

    public List<Video> getAllVideoOrderByPopularity() {
        return videoRepository.getAllByOrderByPopularityDesc();
    }

    public Video save(Video video) {
        String youTubeId = video.getUrl().split("=")[1].replaceAll("&t", "");
        video.setUrl("https://www.youtube.com/embed/" + youTubeId);
        video.setYouTubeId(youTubeId);
        video.setRating(0);
        video.setSumOfRating(0);
        video.setNumberOfVotes(0);
        video.setDate(LocalDateTime.now());
        videoRepository.save(video);
        return video;
    }

    public Video getVideoBy(Long videoId) {
        return videoRepository.findById(videoId).get();
    }

    public void updateRating(long videoId, int rating) {
        Video video = getVideoBy(videoId);
        videoRepository.save(RatingUpdater.update(video, rating));
    }

    public List<Video> getFavVideos(Set<Long> ids) {
        List<Video> videoList = new ArrayList<>();
        for (Long id:ids)
            videoList.add(getVideoBy(id));
        return videoList;
    }

    public void updatePopularity(long videoId) {
        Video video = getVideoBy(videoId);
        video.setPopularity(video.getPopularity()+1);
        videoRepository.save(video);
    }
}
