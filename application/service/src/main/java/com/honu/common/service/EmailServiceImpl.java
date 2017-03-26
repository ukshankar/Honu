package com.honu.common.service;

import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;
@Service
public class EmailServiceImpl implements EmailService {

	@Override
	public void sendEmail(String to, String subject, String body) {
		if(Boolean.valueOf(System.getenv("mail.smtp.auth"))) {
		Properties properties = System.getProperties();

	      // Setup mail server
	      
	      properties.put("mail.smtp.auth", "true");
	      properties.put("mail.smtp.starttls.enable", "true");
	      properties.put("mail.smtp.host", "smtp.gmail.com");
	      properties.put("mail.smtp.port", "587");
	      
	      Session session = Session.getInstance(properties,
	    		  new javax.mail.Authenticator() {
	    			protected PasswordAuthentication getPasswordAuthentication() {
	    				return new PasswordAuthentication(System.getenv("email.user"), System.getenv("email.pass"));
	    			}
	    		  });


	      try {
	         // Create a default MimeMessage object.
	         MimeMessage message = new MimeMessage(session);

	         // Set From: header field of the header.
	         message.setFrom(new InternetAddress("honucareers@gmail.com"));

	         // Set To: header field of the header.
	         message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

	         // Set Subject: header field
	         message.setSubject(subject);

	         // Now set the actual message
	         message.setText(body);

	         // Send message
	         Transport.send(message);
	         System.out.println("Sent message successfully...."+to+" body "+body);
	      }catch (MessagingException mex) {
	    	  System.out.println("Error sending email to ...."+to+" body "+body);
	         mex.printStackTrace();
	      }
		}
	}
	
	public void sendInvite(String to, String subject, String body, Date time) {};
	
	public static void main(String[] args) {
		EmailServiceImpl ser = new EmailServiceImpl();
		ser.sendEmail("visrow@gmail.com", "hello", "How are you");
	}
}
