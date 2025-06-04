package se.davidaslan.housingsocietymanager.web;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class Controller {


    @GetMapping
    public String hello(){
        return "hello";
    }

    @PutMapping
    String update(Authentication user){
        return user.isAuthenticated() ? "They are!" : "They are not T_T";
    }
}
