package se.davidaslan.housingsocietymanager.domain.HousingSociety;

import org.springframework.data.repository.ListCrudRepository;

public interface HousingSocietyRepositoryDb extends ListCrudRepository<HousingSociety, Long> {
    HousingSociety findByName(String name);
    HousingSociety findById(long id);

    void deleteById(long id);
    void deleteByName(String name);

    boolean existsByName(String name);

}
