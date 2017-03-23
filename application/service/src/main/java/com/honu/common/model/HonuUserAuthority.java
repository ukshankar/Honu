package com.honu.common.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@Entity
@Table(name = "user_roles",
uniqueConstraints = @UniqueConstraint(
	columnNames = { "role", "honuuserid" }))
public class HonuUserAuthority {
	private int userRoleId;
	private User user;
	private String role;

	public HonuUserAuthority() {
	}

	public HonuUserAuthority(User user, String role) {
		this.user = user;
		this.role = role;
	}

	public HonuUserAuthority( String role) {

		this.role = role;
	}

	@GenericGenerator(name = "generator", strategy = "sequence-identity", parameters = @Parameter(name = "sequence", value = "user_roles_user_role_id_seq"))
	@Id
	@GeneratedValue(generator = "generator")
	@Column(name = "user_role_id"
			, unique = true, nullable = false, precision = 22, scale = 0)
	public int getUserRoleId() {
		return this.userRoleId;
	}

	public void setUserRoleId(int userRoleId) {
		this.userRoleId = userRoleId;
	}

	@ManyToOne
	@JoinColumn(name="honuuserid", 
				insertable=false, updatable=false, 
				nullable=false)
	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Column(name = "role", nullable = false, length = 45)
	public String getRole() {
		return this.role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}
