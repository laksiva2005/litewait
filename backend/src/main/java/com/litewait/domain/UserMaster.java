package com.litewait.domain;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.litewait.domain.dto.Contact;
import com.litewait.domain.dto.UserLoginDetails;

@Document(collection = "user_master")
public class UserMaster extends AbstractEntity {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private String id;
	private String user;
	private String user_name;
	private String user_session;
	private Date user_dob;
	private String user_image;
	private Character user_type;
	private Character is_active;
	private String user_password;
	private Contact contact;
	private UserLoginDetails user_login_details;


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public Date getUser_dob() {
		return user_dob;
	}

	public void setUser_dob(Date user_dob) {
		this.user_dob = user_dob;
	}

	public String getUser_image() {
		return user_image;
	}

	public void setUser_image(String user_image) {
		this.user_image = user_image;
	}

	public Character getUser_type() {
		return user_type;
	}

	public void setUser_type(Character user_type) {
		this.user_type = user_type;
	}

	public Character getIs_active() {
		return is_active;
	}

	public void setIs_active(Character is_active) {
		this.is_active = is_active;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

	public Contact getContact() {
		return contact;
	}

	public void setContact(Contact contact) {
		this.contact = contact;
	}

	public UserLoginDetails getUser_login_details() {
		return user_login_details;
	}

	public void setUser_login_details(UserLoginDetails user_login_details) {
		this.user_login_details = user_login_details;
	}

	public String getUser_session() {
		return user_session;
	}

	public void setUser_session(String user_session) {
		this.user_session = user_session;
	}


	public UserMaster() {
		super();
	}
	
	@Override
	public String toString() {
		return "UserMaster [id=" + id + ", user=" + user + ", user_name="
				+ user_name + ", user_session=" + user_session + ", user_dob="
				+ user_dob + ", user_image=" + user_image + ", user_type="
				+ user_type + ", is_active=" + is_active + ", user_password="
				+ user_password + ", contact=" + contact
				+ ", user_login_details=" + user_login_details + "]";
	}

	
	
}
