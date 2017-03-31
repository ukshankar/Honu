package com.honu.common.dao;

import java.io.IOException;
import java.util.List;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Repository;

import com.google.api.client.util.DateTime;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.Events;
@Repository("caledarDao")

public class CalendarDaoImpl implements CalendarDao {

	@Override
	  @Cacheable("events")
	public List<Event> getAllEvents(com.google.api.services.calendar.Calendar service) throws IOException {
		System.out.println(service.getBaseUrl());
        // List the next 10 events from the primary calendar.
        DateTime now = new DateTime(System.currentTimeMillis());
        Events events = service.events().list("primary")
            .setMaxResults(10)
            .setTimeMin(now)
            .setOrderBy("startTime")
            .setSingleEvents(true)
            .execute();
        List<Event> items = events.getItems();
       return items;
	}
	
}
