package com.CrowdMind.CrowdMind_Backend.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CrowdMind.CrowdMind_Backend.Entity.CrowdData;

public interface CrowdDataRepo extends JpaRepository<CrowdData, Long>{
	List<CrowdData> findByLocationIgnoreCaseOrderByObservedAtAsc(String location);
}
