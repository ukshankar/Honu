package com.honu.common.dao;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.honu.common.model.Request;
import com.honu.common.model.User;
@Repository("userDao")
@Transactional
public class UserDaoImpl extends AbstractDao implements UserDao{
 
    @Override
    public void save(User stock) {
    	// TODO Auto-generated method stub
    	persist(stock);
    }
    
    @Override
    public void delete(User stock) {
    	// TODO Auto-generated method stub
    	
    }
    
    @Override
    public User findByUserName(String username) {
    	Criteria criteria = getSession().createCriteria(User.class);
        criteria.add(Restrictions.eq("email",username));
        return (User) criteria.uniqueResult();
    }
    @Override
    public void update(User stock) {
    	// TODO Auto-generated method stub
    	
    }
    
    @Override
    public void addSkill(User user, Request skill) {
     persist(skill);
    	
    }
}
