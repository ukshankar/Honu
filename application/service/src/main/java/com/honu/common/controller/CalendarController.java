package com.honu.common.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.api.services.calendar.model.Event;
import com.honu.common.service.CalendarService;
@Controller
@RequestMapping("/calendar")
public class CalendarController {
	
	@Autowired
	CalendarService service;
	
	@RequestMapping(value = "/events", method = RequestMethod.GET)
	public @ResponseBody List<Event> getEvents() throws IOException {

		return service.getAllEvents();
          
	}

}
