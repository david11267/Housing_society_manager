package se.davidaslan.housingsocietymanager.domain.HousingSociety;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HousingSocietyRepository {
    HousingSocietyRepositoryDb db;

    @Autowired
    public HousingSocietyRepository(HousingSocietyRepositoryDb db) {
        this.db = db;
    }

    public void save(HousingSociety housingSociety) {
        db.save(housingSociety);
    }

    public List<HousingSociety> getAll(String userId){
        return db.findByUserId(userId);
    }
}
