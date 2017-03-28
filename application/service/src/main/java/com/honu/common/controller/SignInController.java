package com.honu.common.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mobile.device.Device;
import org.springframework.mobile.device.DevicePlatform;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.json.webtoken.JsonWebToken.Payload;
import com.honu.common.configuration.TokenUtils;
import com.honu.common.model.HonuUserAuthority;
import com.honu.common.model.User;
import com.honu.common.service.EmailService;
import com.honu.common.service.UserService;



@Controller
@RequestMapping("/signon")
public class SignInController {

	 private  String clientId = "280072419521-l9s8j0jig6oee7hqrs1a53itd86dre0h.apps.googleusercontent.com";
	@Autowired
	private TokenUtils tokenUtils;
	@Autowired
	UserService userSer;
	
	@Autowired
	EmailService emailSer;

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody User signIn(@RequestBody User user) {

	
		//System.out.println("ENV"+System.getenv("AUTH"));
		//if(Boolean.valueOf(System.getenv("AUTH")) || (System.getenv("AUTH") == null))  {
				
		try {
			verifyToken(user.getGoogleToken(),user);
		} catch (GeneralSecurityException e) {
			throw new RuntimeException("user not valid");
		} catch (IOException e) {
			throw new RuntimeException("user not valid");
		}
	//	}
		//System.out.println("Hello");
		//user.setFirstName("Hello");

		// Check if the google token is valid
		// if its valid then create this user in our DB if it does not exists
		// already
		User honuUser = userSer.findUserbyUserName(user.getUsername());

		if (honuUser == null) {
			user.addUserRole(new HonuUserAuthority("VISITOR"));
			userSer.save(user);
			
			emailSer.sendEmail(user.getEmail(),  "Welcome to CareerRail!!", "Thanks for registering with CareerRail, an awesome initiaive by Honu Inc.");
			
		}
		Device newDevice = new Device() {
			
			@Override
			public boolean isTablet() {
				// TODO Auto-generated method stub
				return false;
			}
			
			@Override
			public boolean isNormal() {
				// TODO Auto-generated method stub
				return false;
			}
			
			@Override
			public boolean isMobile() {
				// TODO Auto-generated method stub
				return false;
			}
			
			@Override
			public DevicePlatform getDevicePlatform() {
				// TODO Auto-generated method stub
				return DevicePlatform.ANDROID;
			}
		};
		
		String token = this.tokenUtils.generateToken(user, newDevice);
		user.setJwtToken(token);
		return user;

	}

	
	public void verifyToken(String idTokenString, User user) throws GeneralSecurityException, IOException {
		HttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();
		JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();
		GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
			    .setAudience(Collections.singletonList(clientId))
			    // Or, if multiple clients access the backend:
			    //.setAudience(Arrays.asList(CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3))
			    .build();

			// (Receive idTokenString by HTTPS POST)

			GoogleIdToken idToken = verifier.verify(idTokenString);
			System.out.println(idTokenString);
			if (idToken != null) {
			  Payload payload = idToken.getPayload();

			  // Print user identifier
			  String userId = payload.getSubject();
			  System.out.println("User ID: " + userId);

			  // Get profile information from payload
			 String email = idToken.getPayload().getEmail();
			  //boolean emailVerified = Boolean.valueOf(payload.getEmailVerified());
			  String name = (String) payload.get("name");
			  System.out.println(name);
			  String pictureUrl = (String) payload.get("picture");
			  String locale = (String) payload.get("locale");
			  String familyName = (String) payload.get("family_name");
			  String givenName = (String) payload.get("given_name");

			  user.setEmail(email);
			  user.setFirstName(givenName);
			  user.setLastName(familyName);
			  // Use or store profile information
			  // ...

			} else {
			  System.out.println("Invalid ID token.");
			  throw new RuntimeException("Invalid Token");
			}
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody String get() {
		System.out.println("Deployment is good");
		return "Deployment Success!!";
	}

	
}