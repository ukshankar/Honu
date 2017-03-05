package com.honu.common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.honu.common.model.User;


@Controller
@RequestMapping("/signon")
public class SignInController {

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody
	User signIn(@RequestBody User user) {

		//user.setMessage("Hello "+ user.getName() + " !!!");
		

		return user;

	}

}