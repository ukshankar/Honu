package com.honu.common.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Request {
	private int reqId;
	private int userId;
	private ReqType type;
	private String message;
	private Date createdTs;
	private Date updatedTs;
	private List<Event> eventLst = new ArrayList<Event>(2);
	
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getReqId() {
		return reqId;
	}
	public void setReqId(int reqId) {
		this.reqId = reqId;
	}
	public ReqType getType() {
		return type;
	}
	public void setType(ReqType type) {
		this.type = type;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Date getCreatedTs() {
		return createdTs;
	}
	public void setCreatedTs(Date createdTs) {
		this.createdTs = createdTs;
	}
	public Date getUpdatedTs() {
		return updatedTs;
	}
	public void setUpdatedTs(Date updatedTs) {
		this.updatedTs = updatedTs;
	}
	public List<Event> getEventLst() {
		return eventLst;
	}
	public void setEventLst(List<Event> eventLst) {
		this.eventLst = eventLst;
	}
	
			
	
	
}
