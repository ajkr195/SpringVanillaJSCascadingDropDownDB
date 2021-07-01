package com.spring.boot.rocks.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.boot.rocks.model.Country;
import com.spring.boot.rocks.model.State;

@Repository
public interface StateRepository extends JpaRepository <State, Long>{
 List<State> findByCountry(Country country);
}
