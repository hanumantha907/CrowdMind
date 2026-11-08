package com.CrowdMind.CrowdMind_Backend.Service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.CrowdMind.CrowdMind_Backend.Entity.CrowdData;
import com.CrowdMind.CrowdMind_Backend.Repo.CrowdDataRepo;



@Service
public class CrowdDataService {

    private final CrowdDataRepo repository;
    
    public List<CrowdData> getHistoryByLocation(String location) {
        return repository.findByLocationIgnoreCaseOrderByObservedAtAsc(location);
    }

    public CrowdDataService(CrowdDataRepo repository) {
        this.repository = repository;
    }

    // Get all crowd records
    public List<CrowdData> getAllCrowdData() {
        return repository.findAll();
    }

    // Save crowd data
    public CrowdData saveCrowdData(CrowdData crowdData) {
        return repository.save(crowdData);
    }

    // Get crowd data by ID
    public CrowdData getCrowdDataById(Long id) {
        return repository.findById(id).orElse(null);
    }

    // Delete crowd data
    public void deleteCrowdData(Long id) {
        repository.deleteById(id);
    }
}
