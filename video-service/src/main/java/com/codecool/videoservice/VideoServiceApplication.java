package com.codecool.videoservice;

import com.codecool.videoservice.model.RecommendationModel;
import com.codecool.videoservice.model.Video;
import com.codecool.videoservice.service.RecommendationServiceCaller;
import com.codecool.videoservice.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableEurekaClient
public class VideoServiceApplication {

    @Autowired
    private VideoService videoService;

    @Autowired
    private RecommendationServiceCaller recommendationServiceCaller;

    public static void main(String[] args) {
        SpringApplication.run(VideoServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner init() {
        return args -> {
            Video video1 = Video.builder()
                    .name("Yungness & Jaminn - What To Do")
                    .url("https://www.youtube.com/watch?v=fycpLiQGeEg")
                    .build();
            Video video2 = Video.builder()
                    .name("Liquid Drum and Bass Mix #60")
                    .url("https://www.youtube.com/watch?v=aJoo79OwZEI")
                    .build();
            Video video3 = Video.builder()
                    .name("React JS Crash Course")
                    .url("https://www.youtube.com/watch?v=sBws8MSXN7A")
                    .build();
            Video video4 = Video.builder()
                    .name("Multi Step Form With React & Material UI")
                    .url("https://www.youtube.com/watch?v=zT62eVxShsY")
                    .build();
            Video video5 = Video.builder()
                    .name("SOLID design principles")
                    .url("https://www.youtube.com/watch?v=rtmFCcjEgEw")
                    .build();
            Video video6 = Video.builder()
                    .name("Bohemian Rhapsody | Muppet Music Video")
                    .url("https://www.youtube.com/watch?v=tgbNymZ7vqY")
                    .build();
            Video video7 = Video.builder()
                    .name("Boris Brejcha Minimal Techno - Baby Yoda")
                    .url("https://www.youtube.com/watch?v=BgAHDSyxDHg")
                    .build();
            Video video8 = Video.builder()
                    .name("Sub Focus - Solar System")
                    .url("https://www.youtube.com/watch?v=hRgcgcTP7nM")
                    .build();
            Video video9 = Video.builder()
                    .name("Sub Focus - Solar System")
                    .url("https://www.youtube.com/watch?v=UK15xIMc1DY")
                    .build();
            Video video10 = Video.builder()
                    .name("Bohemian Rhapsody | Muppet Music Video")
                    .url("https://www.youtube.com/watch?v=tgbNymZ7vqY")
                    .build();
            Video video11 = Video.builder()
                    .name("React JS Crash Course")
                    .url("https://www.youtube.com/watch?v=sBws8MSXN7A")
                    .build();
            Video video12 = Video.builder()
                    .name("Sub Focus - Solar System")
                    .url("https://www.youtube.com/watch?v=hRgcgcTP7nM")
                    .build();

            RecommendationModel recommendation = RecommendationModel.builder()
                    .comment("Good one")
                    .rating(4)
                    .videoId(1)
                    .build();

            RecommendationModel recommendation2 = RecommendationModel.builder()
                    .comment("zero")
                    .rating(1)
                    .videoId(1)
                    .build();

            recommendationServiceCaller.save(1, recommendation);
            recommendationServiceCaller.save(1, recommendation2);

            videoService.save(video1);
            videoService.save(video2);
            videoService.save(video3);
            videoService.save(video4);
            videoService.save(video5);
            videoService.save(video6);
            videoService.save(video7);
            videoService.save(video8);
            videoService.save(video9);
            videoService.save(video10);
            videoService.save(video11);
            videoService.save(video12);

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

    @Bean
    @LoadBalanced
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }
}

