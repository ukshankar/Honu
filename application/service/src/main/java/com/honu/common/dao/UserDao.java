package com.honu.common.dao;

import com.honu.common.model.Request;
import com.honu.common.model.User;

public interface UserDao {
	

	

		void save(User stock);
		void update(User stock);
		void delete(User stock);
		User findByUserName(String username);
		void addSkill(User user, Request skill);
	
}
