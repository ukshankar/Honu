package com.honu.common;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.honu.common.model.Event;
import com.honu.common.model.Request;
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
		Request r = new Request();
		r.setUserId(user.getId());
		r.setReqId(123);
		r.setMessage("hello");
		List l = new ArrayList<Event>();
		
		Event e = new Event();
		e.setName("soemtin");
		l.add(e);
		e = new Event();
		e.setName("soemtinagain");
		l.add(e);
		e = new Event();
		e.setName("soemtinagainandagin");
		l.add(e);
		
		
		r.setEventLst(l);
		ser.addSkills(user, r);
		System.out.println(user);
	}
}
