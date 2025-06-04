package se.davidaslan.housingsocietymanager.domain.HousingSociety;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import se.davidaslan.housingsocietymanager.domain.Note;
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





    public ResponseEntity<HousingSocietyDto> update(HousingSociety hs, String userId) {
        // Fetch the original record from the repository
        hs.setUserId(userId);
        if (hs.getNotes() != null) {
            for (Note note : hs.getNotes()) {
                note.setHousingSociety(hs);
            }
        }

        // Save the updated entity (JPA will handle the update in the database)
        HousingSociety saved = repo.save(hs);

        // Convert the updated entity to DTO
        HousingSocietyDto dtoResp = HousingSocietyDto.toDto(saved);

        // Return the response with status 200 and updated data
        return ResponseEntity.status(HttpStatus.OK).body(dtoResp);
    }


    public ResponseEntity<HousingSocietyDto> delete(HousingSociety hs) {
       repo.delete(hs);
        return ResponseEntity.status(HttpStatus.OK).body(HousingSocietyDto.toDto(hs));
    }

}
