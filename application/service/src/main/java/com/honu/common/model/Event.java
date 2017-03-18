package com.honu.common.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "userevent")
public class Event {
	
	
	private int id;
	private String name;
	private Date eventTime;
	private String description;
	private EventType type;
	
	private Request request;
	
	@ManyToOne
	@JoinColumn(name="honureqid", 
				insertable=false, updatable=false, 
				nullable=false)
	public Request getRequest() {
		return request;
	}
	
	public void setRequest(Request request) {
		this.request = request;
	}
	
	@GenericGenerator(name = "generator", strategy = "sequence-identity", parameters = @Parameter(name = "sequence", value = "userevent_eventId_seq"))
	@Id
	@GeneratedValue(generator = "generator")
	@Column(name = "eventid", unique = true, nullable = false, precision = 22, scale = 0)
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getEventTime() {
		return eventTime;
	}
	public void setEventTime(Date eventTime) {
		this.eventTime = eventTime;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	@Column(name = "eventType") 
	public EventType getType() {
		return type;
	}
	public void setType(EventType type) {
		this.type = type;
	}
	
	
	

}
