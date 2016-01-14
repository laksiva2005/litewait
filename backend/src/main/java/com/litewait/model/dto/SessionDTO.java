package com.litewait.model.dto;

import java.util.Map;

import org.springframework.stereotype.Component;

import com.litewait.domain.UserMaster;

@Component("sessionDTO")
public class SessionDTO {

	private Map<String, UserMaster> sessionMap;

	public Map<String, UserMaster> getSessionMap() {
		return sessionMap;
	}

	public void setSessionMap(Map<String, UserMaster> sessionMap) {
		this.sessionMap = sessionMap;
	}

	

}
