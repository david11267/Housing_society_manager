package se.davidaslan.housingsocietymanager.domain.HousingSociety;

import org.springframework.beans.factory.annotation.Autowired;

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

    void save(HousingSociety housingSociety){
        repo.save(housingSociety);
    }


}
