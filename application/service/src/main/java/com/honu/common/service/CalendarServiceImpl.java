package com.honu.common.service;

import java.io.IOException;
import java.io.StringBufferInputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import org.springframework.stereotype.Service;

import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.DateTime;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.calendar.CalendarScopes;
import com.google.api.services.calendar.model.Acl;
import com.google.api.services.calendar.model.AclRule;
import com.google.api.services.calendar.model.AclRule.Scope;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.Event.Reminders;
import com.google.api.services.calendar.model.EventDateTime;
import com.google.api.services.calendar.model.Events;

@Service
public class CalendarServiceImpl implements CalendarService{
    /** Application name. */
    private static final String APPLICATION_NAME =
        "Google Calendar API Java Quickstart";

    /** Directory to store user credentials for this application. */
    private static final java.io.File DATA_STORE_DIR = new java.io.File(
        System.getProperty("user.home"), ".credentials/calendar-java-quickstart");

    /** Global instance of the {@link FileDataStoreFactory}. */
    private static FileDataStoreFactory DATA_STORE_FACTORY;

    /** Global instance of the JSON factory. */
    private static final JsonFactory JSON_FACTORY =
        JacksonFactory.getDefaultInstance();

    /** Global instance of the HTTP transport. */
    private static HttpTransport HTTP_TRANSPORT;

    /** Global instance of the scopes required by this quickstart.
     *
     * If modifying these scopes, delete your previously saved credentials
     * at ~/.credentials/calendar-java-quickstart
     */
    
    private static GoogleCredential credential;
    private static com.google.api.services.calendar.Calendar service;
    private static final List<String> SCOPES =
        Arrays.asList(CalendarScopes.CALENDAR);

    static {
        try {
            HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
            DATA_STORE_FACTORY = new FileDataStoreFactory(DATA_STORE_DIR);
            //"c:/temp/HonuCareers-d50774e811d4.json"
             credential = GoogleCredential.fromStream(CalendarServiceImpl.class.getClassLoader()
                     .getResourceAsStream("cal.json"))
        		    .createScoped(Collections.singleton(CalendarScopes.CALENDAR
        		    	));
              service = getCalendarService();
              //Do not call this , needed only FIRST Time when the application gets deployed  
              //oneTimeSetup(service);
        } catch (Throwable t) {
            t.printStackTrace();
            //System.exit(1);
        }
    }

    
  
    /**
     * Build and return an authorized Calendar client service.
     * @return an authorized Calendar client service
     * @throws IOException
     */
    public static com.google.api.services.calendar.Calendar
        getCalendarService() throws IOException {
       
        return new com.google.api.services.calendar.Calendar.Builder(
                HTTP_TRANSPORT, JSON_FACTORY, credential)
                .setApplicationName(APPLICATION_NAME)
                
                .build();
    }

    public static void main(String[] args) throws IOException {
     

       CalendarService ser = new CalendarServiceImpl();
        
     
      //  insertNewEvent();
    
        
        
        
                
       // Events eevv= service.events().;
        
   
        
       List<Event> items =  ser.getAllEvents();
       if (items.size() == 0) {
           System.out.println("No upcoming events found.");
       } else {
           System.out.println("Upcoming events");
           for (Event event : items) {
               DateTime start = event.getStart().getDateTime();
               
               if (start == null) {
                   start = event.getStart().getDate();
               }
               System.out.printf("%s (%s)\n", event.getSummary(), start);
           }
       }
    }

	private  void insertNewEvent() throws IOException {
		Calendar calee =Calendar.getInstance();
        		calee.add(Calendar.DAY_OF_MONTH, 2);
        Date oneHourFromNow = calee.getTime();
        calee.add(Calendar.HOUR, 2);
        Date twoHoursFromNow = calee.getTime();
        DateTime start1 = new DateTime(oneHourFromNow, TimeZone.getTimeZone("UTC"));
        DateTime end = new DateTime(twoHoursFromNow, TimeZone.getTimeZone("UTC"));

        Event event1 = new Event().setSummary("Place Holder Meeting")
            .setReminders(new Reminders().setUseDefault(false))
            .setStart(new EventDateTime().setDateTime(start1))
            .setEnd(new EventDateTime().setDateTime(end));
        service.events().insert("primary", event1).execute();
	}

	public  List<Event> getAllEvents() throws IOException {
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
    
    public  static void oneTimeSetup( com.google.api.services.calendar.Calendar service) throws IOException {
    	// Retrieve access rule
        // Iterate over a list of access rules
         Acl acl = service.acl().list("primary").execute();

         boolean found = false;
         for (AclRule rule : acl.getItems()) {
           System.out.println(rule.getId() + " dd: " + rule.getRole());
           if(rule.getId().contains("honucareers@gmail.com")) {
         	  found = true;
           }
         }
         if(!found) {
         	System.out.println("Did not find creating");
         	// Create access rule with associated scope
         	AclRule rule = new AclRule();
         	Scope scope = new Scope();
         	scope.setType("user").setValue("honucareers@gmail.com");
         	rule.setScope(scope).setRole("owner");

         	// Insert new access rule
         	AclRule createdRule = service.acl().insert("primary", rule).execute();
         	System.out.println(createdRule.getId());
         }
         
         AclRule rule = service.acl().get("primary", "user:honuserviceaccount1@honucareers-162700.iam.gserviceaccount.com").execute();

         System.out.println(rule.getScope().getType());
         System.out.println(rule.getScope().getValue());
         System.out.println(rule.getId() + ": " + rule.getRole());

    }

}