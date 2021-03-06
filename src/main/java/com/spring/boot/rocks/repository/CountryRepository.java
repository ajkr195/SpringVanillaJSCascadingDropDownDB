package com.spring.boot.rocks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.boot.rocks.model.Country;

@Repository
public interface CountryRepository extends JpaRepository <Country, Long>{

}
