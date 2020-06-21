package com.codecool.videorecommendationservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Recommendation {

    @Id
    @GeneratedValue
    private long id;

    private int rating;

    private String comment;

    private long videoId;
}
