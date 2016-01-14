package com.litewait.domain.dto;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

public class UserLoginDetails {
	private Date last_login;
	private Character is_logged_in;
	private Character is_locked;
	private Integer wrong_attempts;
	private List<String> password_history;
	private String system_ip;
	private String user_id;
	private Integer port;

	public Date getLast_login() {
		return last_login;
	}

	public void setLast_login(Date last_login) {
		this.last_login = last_login;
	}

	public Character getIs_logged_in() {
		return is_logged_in;
	}

	public void setIs_logged_in(Character is_logged_in) {
		this.is_logged_in = is_logged_in;
	}

	public Character getIs_locked() {
		return is_locked;
	}

	public void setIs_locked(Character is_locked) {
		this.is_locked = is_locked;
	}

	public Integer getWrong_attempts() {
		return wrong_attempts;
	}

	public void setWrong_attempts(Integer wrong_attempts) {
		this.wrong_attempts = wrong_attempts;
	}

	public List<String> getPassword_history() {
		return password_history;
	}

	public void setPassword_history(List<String> password_history) {
		this.password_history = password_history;
	}

	public String getSystem_ip() {
		return system_ip;
	}

	public void setSystem_ip(String system_ip) {
		this.system_ip = system_ip;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public Integer getPort() {
		return port;
	}

	public void setPort(Integer port) {
		this.port = port;
	}

}
