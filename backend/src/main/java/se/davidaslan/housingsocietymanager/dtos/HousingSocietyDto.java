package se.davidaslan.housingsocietymanager.dtos;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import se.davidaslan.housingsocietymanager.domain.HousingSociety.HousingSociety;
import se.davidaslan.housingsocietymanager.domain.Note;
import se.davidaslan.housingsocietymanager.domain.PortCode;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record HousingSocietyDto(
        @JsonProperty("name") String name,
        @JsonProperty("uuid") UUID uuid,
        @JsonProperty("address") String address,
        @JsonProperty("builtYear") Integer builtYear,
        @JsonProperty("nrOfApartments") Integer nrOfApartments,
        @JsonProperty("lastNotesDrop") LocalDateTime lastNotesDrop,
        @JsonProperty("registeredPhoneNumbers") Integer registeredPhoneNumbers,
        @JsonProperty("lastUpdated") LocalDateTime lastUpdated,
        @JsonProperty("port") PortCode port,
        @JsonProperty("notes") List<Note> notes

) {
    @JsonCreator
    public HousingSocietyDto(@JsonProperty("name") String name, @JsonProperty("uuid") UUID uuid, @JsonProperty("address") String address, @JsonProperty("builtYear") Integer builtYear, @JsonProperty("nrOfApartments") Integer nrOfApartments, @JsonProperty("lastNotesDrop") LocalDateTime lastNotesDrop, @JsonProperty("registeredPhoneNumbers") Integer registeredPhoneNumbers, @JsonProperty("lastUpdated") LocalDateTime lastUpdated, @JsonProperty("port") PortCode port, @JsonProperty("notes") List<Note> notes) {
        this.name = name;
        this.uuid =uuid;
        this.address = address;
        this.builtYear = builtYear;
        this.nrOfApartments = nrOfApartments;
        this.lastNotesDrop = lastNotesDrop;
        this.registeredPhoneNumbers = registeredPhoneNumbers;
        this.lastUpdated = lastUpdated;
        this.port = port;
        this.notes = notes;
    }

    public HousingSociety toDomain(String userId){
        return new HousingSociety(userId,this.name(),this.address(),this.builtYear(),this.nrOfApartments(),this.lastNotesDrop(),this.registeredPhoneNumbers(),this.lastUpdated(),this.port(),this.notes());
    }

    public static HousingSocietyDto toDto(HousingSociety domain ){
        return new HousingSocietyDto(domain.getName(),domain.getUuid(),domain.getAddress(),domain.getBuiltYear(),domain.getNrOfApartments(),domain.getLastNotesDrop(),domain.getRegisteredPhoneNumbers(),domain.getLastUpdated(),domain.getPort(),domain.getNotes());
    }
}