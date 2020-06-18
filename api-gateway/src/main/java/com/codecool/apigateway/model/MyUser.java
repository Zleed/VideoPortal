package com.codecool.apigateway.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class MyUser {

    @Id
    @GeneratedValue
    private long id;

    private String name;

    @JsonIgnore
    private String password;

    @Singular("roles")
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

}
