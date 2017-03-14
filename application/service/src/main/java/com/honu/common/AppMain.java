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
		System.out.println(ser.findUserbyUserName("something@some.com"));
		System.out.println(ser);
		User user = new User();
		user.setEmail("test"+Math.random());
		user.setPassword("adfd");
		user.setFirstName("ff");
		user.setLastName("dafr");
		ser.save(user);
		System.out.println(user);
	}
}
