package com.honu.common.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.honu.common.model.User;
import com.honu.common.service.UserService;


@Controller
@RequestMapping("/users")
public class UsersController {

	@Autowired
	UserService userSer;
	
	@RequestMapping(method = RequestMethod.POST,headers="Accept=application/json")
	public 
	void createUser(@RequestBody User user) {

		System.out.println("Create " + user.getEmail()+"-"+ user.getPassword());
		userSer.save(user);

	}
	
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST,headers="Accept=application/json")
	public @ResponseBody
	void authenticateUser(@RequestBody User user) {
	
		userSer.authenticateUser(user);

	}
	
	@RequestMapping(value={"{email}"},method = RequestMethod.GET,headers="Accept=application/json")
	public  User getUser(@PathVariable String email) {
		return userSer.findUserbyUserName(email);

	}
	


}