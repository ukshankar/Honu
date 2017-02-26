package com.honu.common.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.honu.common.model.Appointment;
import com.honu.common.model.User;


@Controller
@RequestMapping("/signon")
public class SignInController {

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	User signIn(@RequestBody User user) {
 
		System.out.println("Hello");
		user.setMessage("Hello "+ user.getName() + " !!!");
		

		return user;

	}
	 @RequestMapping(method = RequestMethod.GET)
	    public @ResponseBody String get() {
	    	System.out.println("hello");
	        return "Hello";
	    }


}