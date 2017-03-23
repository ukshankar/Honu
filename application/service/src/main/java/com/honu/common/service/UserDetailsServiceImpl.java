package com.honu.common.service;


import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.honu.common.dao.UserDao;
import com.honu.common.model.HonuUserAuthority;
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
    Set<HonuUserAuthority> roles = user.getUserRole();
    List<GrantedAuthority> authList = new ArrayList<GrantedAuthority>();
    for (Iterator iterator = roles.iterator(); iterator.hasNext();) {
		HonuUserAuthority honuUserAuthority = (HonuUserAuthority) iterator.next();
		   authList.add(new SimpleGrantedAuthority(honuUserAuthority.getRole()));
	} 
    user.setAuthorities(authList);
    return user;
  }

}
