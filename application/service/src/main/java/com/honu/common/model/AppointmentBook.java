package com.honu.common.model;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;
@Component
public class AppointmentBook {

    public Map<String, Appointment> getAppointmentsForDay(Date day) {
        return new HashMap<String, Appointment>();
    }

    public Map<String, Appointment> getAppointmentsForToday() {
        return new HashMap<String, Appointment>();
    }

    public void addAppointment(AppointmentForm appointment) {

    }
}
