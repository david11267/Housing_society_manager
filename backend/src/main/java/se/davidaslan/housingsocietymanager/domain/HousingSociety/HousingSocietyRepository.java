package se.davidaslan.housingsocietymanager.domain.HousingSociety;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class HousingSocietyRepository {
    HousingSocietyRepositoryDb db;

    @Autowired
    public HousingSocietyRepository(HousingSocietyRepositoryDb db) {
        this.db = db;
    }

    public HousingSociety save(HousingSociety housingSociety) {
        return db.save(housingSociety);
    }

    public List<HousingSociety> getAll(String userId){
        return db.findByUserId(userId);
    }

    public HousingSociety get(UUID hsId){
        return db.findHousingSocietiesByUuid(hsId);
    }

    public void delete(HousingSociety hs) {
        db.delete(hs);
    }
}
