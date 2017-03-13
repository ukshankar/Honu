package com.honu.common.service;


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
      throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
    } else {
    	User userNew = new User();
       dao.save(userNew);
       return userNew;
    }
  }

}
