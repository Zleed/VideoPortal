package com.codecool.videoservice.service;

import com.codecool.videoservice.model.Video;

public class RatingUpdater {

    public static Video update(Video video, int rating){
        video.setNumberOfVotes(video.getNumberOfVotes()+1);
        video.setSumOfRating(video.getSumOfRating()+rating);
        video.setRating(video.getSumOfRating() / video.getNumberOfVotes());
        return video;
    }

}
