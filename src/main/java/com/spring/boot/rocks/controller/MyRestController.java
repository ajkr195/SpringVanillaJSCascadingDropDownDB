package com.spring.boot.rocks.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.rocks.model.City;
import com.spring.boot.rocks.model.Country;
import com.spring.boot.rocks.model.State;
import com.spring.boot.rocks.model.ZipCode;
import com.spring.boot.rocks.repository.CityRepository;
import com.spring.boot.rocks.repository.CountryRepository;
import com.spring.boot.rocks.repository.StateRepository;
import com.spring.boot.rocks.repository.ZipCodeRepository;

import lombok.extern.slf4j.Slf4j;



@Slf4j
@RestController
@RequestMapping(path = "/api")
public class MyRestController {

	@Autowired
	CountryRepository countryRepository;
	@Autowired
	StateRepository stateRepository;
	@Autowired
	CityRepository cityRepository;
	@Autowired
	ZipCodeRepository zipCodeRepository;
	
	@GetMapping(path = "/countries")
	public List<Country> getCountries() {
		return countryRepository.findAll();
	}
	
	@PostMapping(path = "/country")
	public Country postCountry(Country country) {
		return countryRepository.save(country);
	}
	
	@GetMapping(path = "/states")
	public List<State> getStates() {
		return stateRepository.findAll();
	}
	
	@GetMapping(path = "/statesbycountry/{id}")
	public List<State> getStatesByCountry(@PathVariable Long id) {
		return stateRepository.findByCountry(countryRepository.findById(id).get());
	}
	
	@GetMapping(path = "/cities")
	public List<City> getCities() {
		return cityRepository.findAll();
	}
	
	@GetMapping(path = "/citiesbystate/{id}")
	public List<City> getCitiesByState(@PathVariable Long id) {
		return cityRepository.findByState(stateRepository.findById(id).get());
	}
	
	@GetMapping(path = "/zipcodes")
	public List<ZipCode> getZips() {
		return zipCodeRepository.findAll();
	}
	
	@GetMapping(path = "/zipcodesbycity/{id}")
	public List<ZipCode> getZipsByCity(@PathVariable Long id) {
		return zipCodeRepository.findByCity(cityRepository.findById(id).get());
	}
	
}
