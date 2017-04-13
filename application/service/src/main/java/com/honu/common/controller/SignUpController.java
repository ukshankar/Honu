package com.honu.common.controller;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.honu.common.model.SignupReq;
import com.honu.common.model.User;
import com.honu.common.service.EmailService;
import com.honu.common.service.UserService;
@Controller
@RequestMapping("/signup")
public class SignUpController {
	@Autowired
	UserService userSer;
	
	@Autowired
	EmailService emailSer;

	@RequestMapping(method = RequestMethod.POST, headers = "Accept=application/json")
	public @ResponseBody User  signUp(@RequestBody SignupReq req) {
		System.out.println("called signup");
		User user = new User();
		user.setEmail(req.getEmail());
		user.setIsActivated(false);
		user.setPassword(req.getPassword());
		SecureRandom random = new SecureRandom();			  
		String randomAuth = new BigInteger(130, random).toString(32);
		user.setAuthString(randomAuth);
		try {
			userSer.save(user);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
			throw new RuntimeException("Something went wrong");
		}		
		emailSer.sendEmail(user.getEmail(), "Please complete signup", "Please click on http://careerrail.com/services/signup/confirm?auth="+randomAuth+"&email="+user.getEmail());
		System.out.println("http://localhost:8888/services/signup/confirm?auth="+randomAuth+"&email="+user.getEmail());
		return user;
		
	}

	@RequestMapping(value = "/confirm", method = RequestMethod.GET)
	public @ResponseBody  String confirm(@RequestParam("auth")  String auth,@RequestParam("email")  String email) {
		User user = userSer.findUserbyUserName(email);
		if(user.getIsActivated()) {
			return "Invalid Request";
		}
		if(user== null) {
			return "Invalid request";
		}
		if(user.getAuthString().equals(auth)) {
			user.setIsActivated(true);
		}
		user.setBiography("verified on "+(new Date()));
		userSer.update(user);
		
	
	return "Registration Confirmed!!!";
	}
}
