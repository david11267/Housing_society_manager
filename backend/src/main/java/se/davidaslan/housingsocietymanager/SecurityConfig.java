package se.davidaslan.housingsocietymanager;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain defaultChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.GET,"/api").authenticated()
                        .requestMatchers(HttpMethod.POST,"/api").authenticated()
                        .requestMatchers(HttpMethod.PUT,"/api").authenticated()
                        .requestMatchers(HttpMethod.DELETE,"/api").authenticated()
                        .requestMatchers("/api").authenticated()
                )
                .cors(withDefaults())
                .oauth2ResourceServer(oauth2  -> oauth2.jwt(withDefaults()))
                .build();
    }
}