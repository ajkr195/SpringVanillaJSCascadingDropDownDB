package com.spring.boot.rocks.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.boot.rocks.model.City;
import com.spring.boot.rocks.model.State;

@Repository
public interface CityRepository extends JpaRepository <City, Long>{
	List<City> findByState(State state);
}
