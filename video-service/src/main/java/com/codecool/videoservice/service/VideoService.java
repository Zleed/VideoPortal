package com.codecool.videoservice.service;

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
        videoRepository.save(video);
        return video;
    }

    public Video getVideoBy(Long videoId) {
        return videoRepository.findById(videoId).get();
    }
}
