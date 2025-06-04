package se.davidaslan.housingsocietymanager.dtos;

import se.davidaslan.housingsocietymanager.domain.HousingSociety.HousingSociety;
import se.davidaslan.housingsocietymanager.domain.Note;
import se.davidaslan.housingsocietymanager.domain.PortCode;

import java.time.LocalDateTime;
import java.util.List;

public record HousingSocietyRequestDto(
        String name,
        String address,
        int builtYear,
        int nrOfApartments,
        LocalDateTime lastNotesDrop,
        int registeredPhoneNumbers,
        LocalDateTime lastUpdated,
        PortCode port,
        List<Note> notes
) {

    public HousingSociety toDomain(String userId){
        return new HousingSociety(userId,this.name(),this.address(),this.builtYear(),this.nrOfApartments(),this.lastNotesDrop(),this.registeredPhoneNumbers(),this.lastUpdated(),this.port(),this.notes());
    }

    public static HousingSocietyRequestDto toDto(HousingSociety domain ){
        return new HousingSocietyRequestDto(domain.getName(),domain.getAddress(),domain.getBuiltYear(),domain.getNrOfApartments(),domain.getLastNotesDrop(),domain.getRegisteredPhoneNumbers(),domain.getLastUpdated(),domain.getPort(),domain.getNotes());
    }
}