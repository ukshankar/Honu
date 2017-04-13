package com.honu.common.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.hibernate.annotations.Parameter;
import org.hibernate.annotations.Sort;
import org.hibernate.annotations.SortType;
import org.hibernate.annotations.Where;
@Entity
@Table(name = "honurequest")
public class Request {
	
	private Long id;
	private Long reqId;
	private Long userId;
	private ReqType type;
	private String message;
	private Date createdTs;
	private Date updatedTs;
	
	
	private List<Event> eventLst = new ArrayList<Event>(2);
	
	
	@GenericGenerator(name = "generator", strategy = "sequence-identity", parameters = @Parameter(name = "sequence", value = "honurequest_honureqId_seq"))
	@Id
	@GeneratedValue(generator = "generator")
	@Column(name = "honureqid", unique = true, nullable = false, precision = 22, scale = 0)
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	
	@Column(name = "userId")
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	@Column(name = "userReqId")
	public long getReqId() {
		return reqId;
	}
	public void setReqId(long reqId) {
		this.reqId = reqId;
	}
	
	@Column(name = "reqType")
	
	public ReqType getType() {
		return type;
	}
	public void setType(ReqType type) {
		this.type = type;
	}
	@Column(name = "message")
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Column(name = "createdTs")
	public Date getCreatedTs() {
		return createdTs;
	}
	public void setCreatedTs(Date createdTs) {
		this.createdTs = createdTs;
	}
	@Column(name = "updatedTs")
	public Date getUpdatedTs() {
		return updatedTs;
	}
	public void setUpdatedTs(Date updatedTs) {
		this.updatedTs = updatedTs;
	}
	
	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
    @JoinColumn(name="honureqid")
   // @Sort(type = SortType.COMPARATOR, comparator = TicketComparator.class)
   // @Where(clause="1=1")
  //  @OnDelete(action=OnDeleteAction.CASCADE)
	public List<Event> getEventLst() {
		return eventLst;
	}
	public void setEventLst(List<Event> eventLst) {
		this.eventLst = eventLst;
	}

	@Override
	public String toString() {
		return " Thanks for using CareerRail , Your Request detail are [id=" + id + ", reqId=" + reqId + ", userId=" + userId + ", type=" + type + ", message="
				+ message + ", createdTs=" + createdTs + ", updatedTs=" + updatedTs + ", eventLst=" + eventLst + "]";
	}
	
			
	
	
}
