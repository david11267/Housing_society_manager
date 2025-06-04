
package se.davidaslan.housingsocietymanager.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import se.davidaslan.housingsocietymanager.domain.HousingSociety.HousingSociety;

import java.time.LocalDateTime;
import java.util.UUID;
@Setter
@Getter
@Entity
@Table(name = "note")
public class Note {
    @Id()
    private UUID uuid;
    private String type;
    private String header;
    @Column(columnDefinition = "TEXT")
    private String note;
    private LocalDateTime lastUpdated;
    private LocalDateTime dueDateTime;
    @ManyToOne
    @JoinColumn(name = "housing_society_uuid", nullable = false) // Maps to housing_socity UUID
    @JsonIgnore
    private HousingSociety housingSociety;

}

