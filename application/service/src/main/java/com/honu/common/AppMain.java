package com.honu.common;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.honu.common.model.Event;
import com.honu.common.model.HonuUserAuthority;
import com.honu.common.model.Request;
import com.honu.common.model.RequestWrapperForEvents;
import com.honu.common.model.User;
import com.honu.common.service.CalendarService;
import com.honu.common.service.UserService;
@EnableCaching
public class AppMain {

	public static void main(String[] args) throws IOException {
		System.out.println(System.getenv("AUTH"));
		if(Boolean.valueOf(System.getenv("AUTH")) || (System.getenv("AUTH") == null))  {
			System.out.println("Hello");
		}
		AnnotationConfigApplicationContext  context = new AnnotationConfigApplicationContext();
		context.scan("com.honu"); 
		context.refresh();
		UserService ser = (UserService)context.getBean("userService");
		System.out.println(ser.findUserbyUserName("test0.15457526714715408"));
		System.out.println(ser);
		User user = new User();
		user.setEmail("test"+Math.random());
		user.setPassword("adfd");
		user.setFirstName("ff");
		user.setLastName("dafr");
		user.addUserRole(new HonuUserAuthority("Visitor"));
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
		
		RequestWrapperForEvents re = new RequestWrapperForEvents();
		re.setUser(user);
		re.setRequest(r);
		ObjectMapper mapper = new ObjectMapper();
		System.out.println(mapper.writeValueAsString(re));
		
		CalendarService serCal = (CalendarService)context.getBean("calendarService");
		serCal.getAllEvents();
		System.out.println("Calling again");
		serCal.getAllEvents();
		
	}
}
