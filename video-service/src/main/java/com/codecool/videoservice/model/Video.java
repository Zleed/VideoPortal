package com.codecool.videoservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

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

    @OneToOne(mappedBy = "video", cascade = CascadeType.ALL)
    private Rating rating;

    @Transient
    private RecommendationModel[] recommendationList;

}
