package com.codecool.videoservice.controller;

import com.codecool.videoservice.model.Container;
import com.codecool.videoservice.model.RecommendationModel;
import com.codecool.videoservice.model.Video;
import com.codecool.videoservice.service.RecommendationServiceCaller;
import com.codecool.videoservice.service.VideoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;


@RestController
@Slf4j
@RequestMapping("/video")
@CrossOrigin
public class VideoController {

    @Autowired
    private VideoService videoService;

    @Autowired
    private RecommendationServiceCaller recommendationServiceCaller;

    @GetMapping
    public List<Video> getAllVideo(){
        return videoService.getAllVideo();
    }

    @GetMapping("/featured")
    public List<Video> getAllVideoOrderByDate(){
        return videoService.getAllVideoOrderByDate();
    }
    @GetMapping("/toprated")
    public List<Video> getAllVideoOrderByRating(){
        return videoService.getAllVideoOrderByRating();
    }

    @GetMapping("/popular")
    public List<Video> getAllVideoOrderByPopularity() {
        return videoService.getAllVideoOrderByPopularity();
    }

    @GetMapping("/{videoId}")
    public Video getVideoWithAllRecommendations(@PathVariable("videoId") Long videoId){
        Video video = videoService.getVideoBy(videoId);
        video.setRecommendationList(recommendationServiceCaller.getVideoRecommendationList(videoId));
        return video;
    }

    @PostMapping
    public Video save(@RequestBody Video video) {
        return videoService.save(video);
    }

    @PostMapping("/fav")
    public List<Video> getFavVids(@RequestBody Container ids) {
        System.out.println(ids.getIds());
        return videoService.getFavVideos(ids.getIds());
    }
    @PostMapping("/fav/pop/{videoId}")
    public void addPopularity(@PathVariable("videoId") long id) {
        videoService.updatePopularity(id);
    }

    @PostMapping("/{videoId}")
    public void newRecommendation(@PathVariable("videoId") long videoId ,@RequestBody RecommendationModel recommendation) {
        recommendationServiceCaller.save(videoId, recommendation);
    }

}
