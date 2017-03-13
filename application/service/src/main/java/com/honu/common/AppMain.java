package com.honu.common;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.honu.common.model.User;
import com.honu.common.service.UserService;

public class AppMain {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext  context = new AnnotationConfigApplicationContext();
		context.scan("com.honu"); 
		context.refresh();
		UserService ser = (UserService)context.getBean("userService");
		User user = new User();
		user.setEmail("test"+Math.random());
		ser.save(user);
		System.out.println(ser);
	}
}
