package com.CrowdMind.CrowdMind_Backend.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.CrowdMind.CrowdMind_Backend.Entity.CrowdData;
import com.CrowdMind.CrowdMind_Backend.Service.CrowdDataService;

@RestController
@RequestMapping("/api/crowd")
@CrossOrigin(origins = "http://localhost:5173")
public class CrowdController {

    private final CrowdDataService service;

    public CrowdController(CrowdDataService service) {
        this.service = service;
    }
    
    @GetMapping("/history")
    public List<CrowdData> getHistory(@RequestParam String location) {
        return service.getHistoryByLocation(location);
    }

    // GET all crowd data
    @GetMapping
    public List<CrowdData> getAllCrowdData() {
        return service.getAllCrowdData();
    }

    // GET crowd data by ID
    @GetMapping("/{id}")
    public CrowdData getCrowdDataById(@PathVariable Long id) {
        return service.getCrowdDataById(id);
    }

    // POST new crowd data
    @PostMapping
    public CrowdData saveCrowdData(@RequestBody CrowdData crowdData) {
        return service.saveCrowdData(crowdData);
    }

    // DELETE crowd data
    @DeleteMapping("/{id}")
    public String deleteCrowdData(@PathVariable Long id) {
        service.deleteCrowdData(id);
        return "Crowd data deleted successfully!";
    }
}