package com.codecool.videoservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Rating {

    @JsonIgnore
    @OneToOne
    @MapsId
    private Video video;

    @Id
    @JsonIgnore
    @GeneratedValue
    private long id;

    private int rating;

    @JsonIgnore
    private int numberOfVotes;

    @JsonIgnore
    private int sumOfRating;

    public void update(int rating) {
        numberOfVotes++;
        sumOfRating += rating;
        this.rating = sumOfRating/numberOfVotes;
    }
}
