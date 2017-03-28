package com.honu.common.dao;

import java.io.IOException;
import java.util.List;

import com.google.api.services.calendar.model.Event;

public interface CalendarDao {

	public List<Event> getAllEvents(com.google.api.services.calendar.Calendar service)throws IOException;
}
