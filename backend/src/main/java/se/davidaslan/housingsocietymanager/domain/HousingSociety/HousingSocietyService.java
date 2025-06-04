package se.davidaslan.housingsocietymanager.domain.HousingSociety;

import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class HousingSocietyService {
    private final HousingSocietyRepository repo;

    @Autowired
    public HousingSocietyService(HousingSocietyRepository repository) {
        this.repo = repository;
    }

    void save(HousingSociety housingSociety){
        repo.save(housingSociety);
    }


}
