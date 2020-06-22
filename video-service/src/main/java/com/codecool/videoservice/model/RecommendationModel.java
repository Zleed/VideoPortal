package com.codecool.videoservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecommendationModel {

    private long id;

    private int rating;

    private String comment;

    private LocalDateTime date;

    private long videoId;

    private long userId;

}
