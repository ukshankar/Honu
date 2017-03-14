package com.honu.common.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mobile.device.Device;
import org.springframework.mobile.device.DevicePlatform;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.honu.common.configuration.TokenUtils;
import com.honu.common.model.User;
import com.honu.common.service.UserService;

@Controller
@RequestMapping("/signon")
public class SignInController {
	@Autowired
	private TokenUtils tokenUtils;
	@Autowired
	UserService userSer;

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody User signIn(@RequestBody User user) {

		System.out.println("Hello");
		user.setFirstName("Hello");

		// Check if the google token is valid
		// if its valid then create this user in our DB if it does not exists
		// already
		User honuUser = userSer.findUserbyUserName(user.getUsername());

		if (honuUser == null) {
			userSer.save(user);
		}
		Device newDevice = new Device() {
			
			@Override
			public boolean isTablet() {
				// TODO Auto-generated method stub
				return false;
			}
			
			@Override
			public boolean isNormal() {
				// TODO Auto-generated method stub
				return false;
			}
			
			@Override
			public boolean isMobile() {
				// TODO Auto-generated method stub
				return false;
			}
			
			@Override
			public DevicePlatform getDevicePlatform() {
				// TODO Auto-generated method stub
				return DevicePlatform.ANDROID;
			}
		};
		String token = this.tokenUtils.generateToken(user, newDevice);
		user.setJwtToken(token);
		return user;

	}

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody String get() {
		System.out.println("hello");
		return "Hello";
	}

}