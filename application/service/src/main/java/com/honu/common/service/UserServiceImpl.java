package com.honu.common.service;

import javax.transaction.Transactional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.honu.common.dao.UserDao;
import com.honu.common.model.Request;
import com.honu.common.model.User;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserDao dao;
	
	public void save(User user) {
		//convert the plain text password to the encrypted password
		user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        dao.save(user);
    }
	
	@Override
	public User findUserbyUserName(String username) {
	
		return dao.findByUserName(username);
	}
	
	@Override
	public boolean authenticateUser(User user) {
		User userFromDb = findUserbyUserName(user.getEmail());
		return BCrypt.checkpw(user.getPassword(),userFromDb.getPassword())&& userFromDb.getIsActivated();
				
		
	}
	
	@Override
	public void addSkills(User user, Request skills) {
		skills.setUserId(user.getId());
	 dao.addSkill(user, skills);
		
	}
	
	@Override
	public void update(User user) {
	 dao.update(user);
		
	}
}
