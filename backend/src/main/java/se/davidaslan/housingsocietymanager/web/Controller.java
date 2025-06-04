package se.davidaslan.housingsocietymanager.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import se.davidaslan.housingsocietymanager.domain.HousingSociety.HousingSociety;
import se.davidaslan.housingsocietymanager.domain.HousingSociety.HousingSocietyService;
import se.davidaslan.housingsocietymanager.dtos.HousingSocietyDto;

import java.util.List;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:5173")
public class Controller {
    HousingSocietyService hsService;

    @Autowired
    public Controller(HousingSocietyService hsService) {
        this.hsService = hsService;
    }


    @GetMapping
    public List<HousingSociety> get(Authentication user){
        String userId = getUserIdFromAuth(user);
        return hsService.getAll(userId);
    }

    @PostMapping
    String post(Authentication user, @RequestBody HousingSocietyDto dto){
        String userId= getUserIdFromAuth(user);
        dto.toDomain(userId);
        return user.isAuthenticated() ? "They are!" : "They are not T_T";
    }


    private String getUserIdFromAuth(Authentication user){
        Jwt jwt = ((JwtAuthenticationToken)user).getToken();
        return jwt.getClaimAsString("sub");
    }

}
