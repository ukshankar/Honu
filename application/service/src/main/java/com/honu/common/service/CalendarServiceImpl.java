package com.honu.common.service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
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


public class CalendarServiceImpl {
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
    private static final List<String> SCOPES =
        Arrays.asList(CalendarScopes.CALENDAR);

    static {
        try {
            HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
            DATA_STORE_FACTORY = new FileDataStoreFactory(DATA_STORE_DIR);
        } catch (Throwable t) {
            t.printStackTrace();
            System.exit(1);
        }
    }

    /**
     * Creates an authorized Credential object.
     * @return an authorized Credential object.
     * @throws IOException
     */
    public static Credential authorize1() throws IOException {
        // Load client secrets.
        InputStream in =
            CalendarServiceImpl.class.getResourceAsStream("/HonuCareers-977ffb50842c.json");
        GoogleClientSecrets clientSecrets =
            GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

        // Build flow and trigger user authorization request.
        GoogleAuthorizationCodeFlow flow =
                new GoogleAuthorizationCodeFlow.Builder(
                        HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
                .setDataStoreFactory(DATA_STORE_FACTORY)
                .setAccessType("offline")
                .build();
        Credential credential = new AuthorizationCodeInstalledApp(
            flow, new LocalServerReceiver()).authorize("user");
        System.out.println(
                "Credentials saved to " + DATA_STORE_DIR.getAbsolutePath());
        return credential;
    }
    
    public static Credential authorize() throws IOException {
    	GoogleCredential credential = GoogleCredential.fromStream(new FileInputStream("c:/temp/HonuCareers-d50774e811d4.json"))
    		    .createScoped(Collections.singleton(CalendarScopes.CALENDAR
    		    	));
  
    	return credential;
    }

    public static Credential authorize2() throws IOException {
    GoogleCredential credential = new GoogleCredential.Builder()
    	    .setTransport(HTTP_TRANSPORT)
    	    .setJsonFactory(JSON_FACTORY)
    	    .setServiceAccountId("honucareers@gmail.com")
  //  	    .setServiceAccountF
    	//    .setServiceAccountScopes(Collections.singleton(SQLAdminScopes.SQLSERVICE_ADMIN))
    	    .setServiceAccountUser("honucareers@gmail.com")
    	    .build();
    return null;
    }
    /**
     * Build and return an authorized Calendar client service.
     * @return an authorized Calendar client service
     * @throws IOException
     */
    public static com.google.api.services.calendar.Calendar
        getCalendarService() throws IOException {
        Credential credential = authorize();
        return new com.google.api.services.calendar.Calendar.Builder(
                HTTP_TRANSPORT, JSON_FACTORY, credential)
                .setApplicationName(APPLICATION_NAME)
                
                .build();
    }

    public static void main(String[] args) throws IOException {
        // Build a new authorized API client service.
        // Note: Do not confuse this class with the
        //   com.google.api.services.calendar.model.Calendar class.
        com.google.api.services.calendar.Calendar service =
            getCalendarService();

        
        com.google.api.services.calendar.Calendar.CalendarList.List lll = service.calendarList().list();
        Calendar calee =Calendar.getInstance();
        		calee.add(Calendar.DAY_OF_MONTH, 2);
        Date oneHourFromNow = calee.getTime();
        calee.add(Calendar.HOUR, 2);
        Date twoHoursFromNow = calee.getTime();
        DateTime start1 = new DateTime(oneHourFromNow, TimeZone.getTimeZone("UTC"));
        DateTime end = new DateTime(twoHoursFromNow, TimeZone.getTimeZone("UTC"));

        Event event1 = new Event().setSummary("check this")
            .setReminders(new Reminders().setUseDefault(false))
            .setStart(new EventDateTime().setDateTime(start1))
            .setEnd(new EventDateTime().setDateTime(end));
        service.events().insert("primary", event1).execute();
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
        
       // Events eevv= service.events().;
        
   
        
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

}