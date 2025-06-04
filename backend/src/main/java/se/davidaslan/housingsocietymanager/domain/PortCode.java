package se.davidaslan.housingsocietymanager.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Setter
@Getter
@Embeddable
public class PortCode {
    @Column(name = "port_code")
    private String code;

    @Column(name = "port_status")
    private String status;

    @Column(name = "port_accessibility")
    private String accessibility;

    @Column(name = "port_last_update")
    private LocalDateTime lastUpdate;
}
