package com.honu.common.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.honu.common.dao.UserDao;
import com.honu.common.model.User;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserDao dao;
	
	public void save(User user) {
        dao.save(user);
    }
}
