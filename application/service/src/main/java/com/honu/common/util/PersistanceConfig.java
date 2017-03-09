package com.honu.common.util;

import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@PropertySource({ "classpath:database.properties" })
@ComponentScan({ "com.honu" })
public class PersistanceConfig {
 
   @Autowired
   private Environment env;
 
   @Bean
   public LocalSessionFactoryBean sessionFactory() {
      LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
      sessionFactory.setDataSource(restDataSource());
      sessionFactory.setPackagesToScan(
        new String[] { "com.honu.common.model" });
      sessionFactory.setHibernateProperties(hibernateProperties());
 
      
      return sessionFactory;
   }
 
   @Bean
   public DataSource restDataSource() {
	   DriverManagerDataSource dataSource = new DriverManagerDataSource();
      dataSource.setDriverClassName(env.getProperty("database.driver"));
      dataSource.setUrl(env.getProperty("database.jdbcURL"));
      dataSource.setUsername(env.getProperty("database.user"));
      dataSource.setPassword(env.getProperty("database.password"));
 
      return dataSource;
   }
 
   @Bean
   @Autowired
   public HibernateTransactionManager transactionManager(
     SessionFactory sessionFactory) {
  
      HibernateTransactionManager txManager
       = new HibernateTransactionManager();
      txManager.setSessionFactory(sessionFactory);
 
      return txManager;
   }
 
   @Bean
   public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
      return new PersistenceExceptionTranslationPostProcessor();
   }
 
   Properties hibernateProperties() {
    
        	 Properties properties = new Properties();
             properties.put("hibernate.dialect", env.getRequiredProperty("hibernate.dialect"));
             properties.put("hibernate.show_sql", env.getRequiredProperty("hibernate.show_sql"));
             properties.put("hibernate.format_sql", env.getRequiredProperty("hibernate.format_sql"));
             return properties;  
         
      
   }
}