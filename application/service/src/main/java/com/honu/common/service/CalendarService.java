package com.honu.common.service;

import java.io.IOException;
import java.util.List;

import com.google.api.services.calendar.model.Event;

public interface CalendarService {
	List<Event> getAllEvents() throws IOException;

}
