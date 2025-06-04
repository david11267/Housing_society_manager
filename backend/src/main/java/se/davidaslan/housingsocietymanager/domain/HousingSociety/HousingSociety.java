
package se.davidaslan.housingsocietymanager.domain.HousingSociety;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import se.davidaslan.housingsocietymanager.domain.Note;
import se.davidaslan.housingsocietymanager.domain.PortCode;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
@Setter
@Getter
@Entity
@Table(name = "housing_society")
public class HousingSociety {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid;
    @Column(name = "userid")
    private String userId ;
    private String name;
    private String address;
    private int builtYear;
    private int nrOfApartments;
    private LocalDateTime lastNotesDrop;
    private int registeredPhoneNumbers;
    private LocalDateTime lastUpdated;
    @Embedded
    private PortCode port;
    @OneToMany(mappedBy = "housingSociety", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Note> notes;
}
