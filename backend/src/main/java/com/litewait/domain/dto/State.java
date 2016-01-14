package com.litewait.domain.dto;

import java.util.List;

public class State {

	private String state;
	private List<String> city_list;

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public List<String> getCity_list() {
		return city_list;
	}

	public void setCity_list(List<String> city_list) {
		this.city_list = city_list;
	}

	

}
