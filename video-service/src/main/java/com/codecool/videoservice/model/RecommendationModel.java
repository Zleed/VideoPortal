package com.codecool.videoservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecommendationModel {

    private long id;

    private int rating;

    private String comment;

    private long videoId;

}
