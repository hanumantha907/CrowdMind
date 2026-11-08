package com.CrowdMind.CrowdMind_Backend.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import jakarta.persistence.PrePersist;

@Entity
@Table(name = "crowd_data")
public class CrowdData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String location;

    private String density;

    private Integer peopleCount;

    private Double latitude;

    private Double longitude;
    
    private LocalDateTime observedAt;
    
    @PrePersist
    public void setObservedAt() {
        if (observedAt == null) {
            observedAt = LocalDateTime.now();
        }
    }
    
    public LocalDateTime getObservedAt() {
        return observedAt;
    }

    public CrowdData() {
    }

    public CrowdData(String location, String density,
                     Integer peopleCount, Double latitude,
                     Double longitude) {
        this.location = location;
        this.density = density;
        this.peopleCount = peopleCount;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Long getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDensity() {
        return density;
    }

    public void setDensity(String density) {
        this.density = density;
    }

    public Integer getPeopleCount() {
        return peopleCount;
    }

    public void setPeopleCount(Integer peopleCount) {
        this.peopleCount = peopleCount;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
}
