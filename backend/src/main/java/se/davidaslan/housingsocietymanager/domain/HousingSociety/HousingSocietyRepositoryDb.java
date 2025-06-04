package se.davidaslan.housingsocietymanager.domain.HousingSociety;

import org.springframework.data.repository.ListCrudRepository;

import java.util.List;
import java.util.UUID;

public interface HousingSocietyRepositoryDb extends ListCrudRepository<HousingSociety, Long> {
    HousingSociety findByName(String name);
    HousingSociety findById(long id);

    void deleteById(long id);
    void deleteByName(String name);

    boolean existsByName(String name);

    List<HousingSociety> findByUserId(String userId);

    HousingSociety findHousingSocietiesByUuid(UUID uuid);
}
