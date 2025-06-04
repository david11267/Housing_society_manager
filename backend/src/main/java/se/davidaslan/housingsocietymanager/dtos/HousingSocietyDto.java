package se.davidaslan.housingsocietymanager.dtos;

import se.davidaslan.housingsocietymanager.domain.Note;

import java.time.LocalDateTime;
import java.util.List;

public record HousingSocietyDto(String name, String address, int builtYear, int nrOfApartments, LocalDateTime lastNotesDrop, int registeredPhoneNumbers, LocalDateTime lastUpdated, String portCode, List<Note> notes) { }
