package com.spring.boot.rocks.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

	@GetMapping ("/index") 
	public String myhopePage() {
		return "index";
	}
	
	@GetMapping ("/index2") 
	public String myhopesPage() {
		return "index2";
	}
	
	@GetMapping ("/index3") 
	public String myhopes2Page() {
		return "index3";
	}
	
	@GetMapping ("/index4") 
	public String myhopes5Page() {
		return "index4";
	}
	
}
