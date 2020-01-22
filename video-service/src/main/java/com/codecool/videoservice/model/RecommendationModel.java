package com.codecool.videoservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class RecommendationModel {

    private long id;

    private int rating;

    private String comment;

    private long videoId;

    private String port;
}
