package com.litewait.model.dto;

public class SignupDTO {
	private String user;
	private String user_password;
	private String user_mail;
	private Character user_type;
	
	

	public SignupDTO() {
		super();
		
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

	public String getUser_mail() {
		return user_mail;
	}

	public void setUser_mail(String user_mail) {
		this.user_mail = user_mail;
	}

	public Character getUser_type() {
		return user_type;
	}

	public void setUser_type(Character user_type) {
		this.user_type = user_type;
	}

	

}
