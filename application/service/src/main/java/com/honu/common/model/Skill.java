package com.honu.common.model;

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
@Table(name = "userskill")
public class Skill {
	
	
	Long id;
	
	Long userId;
	
	String skillName;
	String skillDetail;
	
	@GenericGenerator(name = "generator", strategy = "sequence-identity", parameters = @Parameter(name = "sequence", value = "userSkill_skillId_seq"))
	@Id
	@GeneratedValue(generator = "generator")
	@Column(name = "skillid", unique = true, nullable = false, precision = 22, scale = 0)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getUser() {
		return userId;
	}
	public void setUser(Long userId) {
		this.userId = userId;
	}
	public String getSkillName() {
		return skillName;
	}
	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}
	public String getSkillDetail() {
		return skillDetail;
	}
	public void setSkillDetail(String skillDetail) {
		this.skillDetail = skillDetail;
	}
	
	

}
