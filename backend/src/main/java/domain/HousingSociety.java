package domain;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table
public class HousingSociety {
    @Id
    private String id;
    private String name;
    private String address;
    private int builtYear;
    private int nrOfApartments;
    private LocalDateTime lastNotesDrop;
    private int registeredPhoneNumbers;
    private LocalDateTime lastUpdated;
    private String portCode;
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
    private List<Note> notes;

}
