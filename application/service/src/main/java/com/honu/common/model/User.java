package com.honu.common.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "honuuser")
public class User {


	Long id;
	/**
	 * EMail will be same as username
	 */
	String email;
	String password;
	String firstName;
	String lastName;	

	
	@GenericGenerator(name = "generator", strategy = "sequence-identity", parameters = @Parameter(name = "sequence", value = "honuuser_honuUserId_seq"))
    @Id
    @GeneratedValue(generator = "generator")
    @Column(name = "honuuserid", unique = true, nullable = false, precision = 22, scale = 0)
    public Long getId() {
        return this.id;
    }
	
	public void setId(Long id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "username", unique =true)	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



}