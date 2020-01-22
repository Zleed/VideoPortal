package com.codecool.videorecommendationservice;

import com.codecool.videorecommendationservice.model.Recommendation;
import com.codecool.videorecommendationservice.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableEurekaClient
public class VideoRecommendationServiceApplication {

    @Autowired
    RecommendationService recommendationService;

	public static void main(String[] args) {
		SpringApplication.run(VideoRecommendationServiceApplication.class, args);
	}

    @Bean
    public CommandLineRunner init() {
        return args -> {
            Recommendation recommendation = Recommendation.builder()
                    .comment("Good one")
                    .rating(4)
                    .videoId(1)
                    .build();

            Recommendation recommendation2 = Recommendation.builder()
                    .comment("zero")
                    .rating(1)
                    .videoId(1)
                    .build();

            recommendationService.save(recommendation);
            recommendationService.save(recommendation2);
        };
    }

	@Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();

    }
}
