package com.honu.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.honu.common.model.User;


@Controller
@RequestMapping("/users")
public class UsersController {

	@RequestMapping(method = RequestMethod.POST,headers="Accept=application/json")
	public 
	void createUser(@RequestBody User user) {

		System.out.println("Create " + user.getEmail()+"-"+ user.getPassword());

	}
	
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST,headers="Accept=application/json")
	public @ResponseBody
	void authenticateUser(@RequestBody User user) {

		System.out.println("Auth " + user.getEmail()+"-"+ user.getPassword());

	}
	
	@RequestMapping(value={"{email}"},method = RequestMethod.GET,headers="Accept=application/json")
	public  User getUser(@PathVariable String email) {
		User user = new User();
		user.setEmail("abc@123.com");
		user.setFirstName("F1");
		user.setLastName("L1");
		return user;

	}
	


}