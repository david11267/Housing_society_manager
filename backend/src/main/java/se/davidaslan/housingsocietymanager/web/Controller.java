package se.davidaslan.housingsocietymanager.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@CrossOrigin(origins = "https://housing-service-backend-876198057788.europe-north2.run.app")
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
    ResponseEntity<HousingSocietyDto> post(Authentication user, @RequestBody HousingSocietyDto dto){
        String userId= getUserIdFromAuth(user);
        HousingSociety hs= dto.toDomain(userId);
        return hsService.save(hs);
    }

    @PutMapping
    ResponseEntity<HousingSocietyDto> put(Authentication user, @RequestBody HousingSociety hs){
        String userId= getUserIdFromAuth(user);
        return hsService.update(hs,userId);
    }

    @DeleteMapping
    ResponseEntity<HousingSocietyDto> delete(Authentication user, @RequestBody HousingSociety hs){
        String userId= getUserIdFromAuth(user);
        return hsService.delete(hs);
    }


    private String getUserIdFromAuth(Authentication user){
        Jwt jwt = ((JwtAuthenticationToken)user).getToken();
        return jwt.getClaimAsString("sub");
    }

}
