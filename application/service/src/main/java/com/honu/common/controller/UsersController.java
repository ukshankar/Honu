package com.honu.common.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.honu.common.model.Request;
import com.honu.common.model.User;
import com.honu.common.service.EmailService;
import com.honu.common.service.UserService;

@Controller
@RequestMapping("/users")
public class UsersController {

	@Autowired
	UserService userSer;
	
	@Autowired
	EmailService emailSer;

	@RequestMapping(method = RequestMethod.POST, headers = "Accept=application/json")
	public void createUser(@RequestBody User user) {

		System.out.println("Create " + user.getEmail() + "-" + user.getPassword());
		userSer.save(user);

	}

	@RequestMapping(value = "/skills", method = RequestMethod.POST, headers = "Accept=application/json")
	public @ResponseBody Request userSkills(@RequestBody Request r) {
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		r.setReqId(System.currentTimeMillis());
		userSer.addSkills(user, r);
        emailSer.sendEmail(user.getEmail(), "Your CareerRail Request made at "+(new Date()), r.toString());
		return r;
	}

	@RequestMapping(value = { "{email}" }, method = RequestMethod.GET, headers = "Accept=application/json")
	public User getUser(@PathVariable String email) {
		return userSer.findUserbyUserName(email);

	}

}