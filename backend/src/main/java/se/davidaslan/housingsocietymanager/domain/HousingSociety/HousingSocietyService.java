package se.davidaslan.housingsocietymanager.domain.HousingSociety;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import se.davidaslan.housingsocietymanager.dtos.HousingSocietyDto;

import java.util.List;

@org.springframework.stereotype.Service
public class HousingSocietyService {
    private final HousingSocietyRepository repo;

    @Autowired
    public HousingSocietyService(HousingSocietyRepository repository) {

        this.repo = repository;
    }

    public List<HousingSociety> getAll(String userId){
        return repo.getAll(userId);
    }

    public ResponseEntity<HousingSocietyDto> save(HousingSociety housingSociety){
        HousingSociety created =  repo.save(housingSociety);
        HousingSocietyDto dtoResp = HousingSocietyDto.toDto(created);
        return ResponseEntity.status(HttpStatus.CREATED).body(dtoResp);
    }


}
