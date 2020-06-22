package com.codecool.apigateway;

import com.codecool.apigateway.model.MyUser;
import com.codecool.apigateway.model.UserCredentials;
import com.codecool.apigateway.service.MyUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableEurekaClient
@EnableSwagger2
@EnableZuulProxy
public class ApiGatewayApplication {

	@Autowired
	private MyUserService userService;

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}

	@Bean
    public CommandLineRunner init() {
        return args -> {
            UserCredentials newUser = UserCredentials.builder()
					.userName("Mark")
					.password("asd")
					.build();
            userService.register(newUser);
        };
    }

}
