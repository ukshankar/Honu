package com.honu.common.service;

import com.honu.common.model.Request;
import com.honu.common.model.User;

public interface UserService {

	void save(User user);
	
	User findUserbyUserName(String username);
	
	boolean authenticateUser(User user);
	
	void addSkills(User user, Request skills);
	
	void update(User user);
}
