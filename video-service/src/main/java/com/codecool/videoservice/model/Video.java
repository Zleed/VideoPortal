package com.codecool.videoservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Video {

    @Id
    @GeneratedValue
    private long id;

    private String name;

    private String url;

    private String youTubeId;

    private LocalDateTime date;

    @Transient
    private RecommendationModel[] recommendationList;

    private long userId;

    private int rating;

    @JsonIgnore
    private int numberOfVotes;

    @JsonIgnore
    private int sumOfRating;

    private int popularity;
}
