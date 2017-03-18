package com.honu.common.service;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.honu.common.dao.UserDao;
import com.honu.common.model.User;

@Service

public class UserDetailsServiceImpl implements UserDetailsService {

  
	@Autowired
	UserDao dao;
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = this.dao.findByUserName(username);

    if (user == null) {
      throw new UsernameNotFoundException("Wrong user or password");
    }
    return user;
  }

}
