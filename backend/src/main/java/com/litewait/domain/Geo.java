package com.litewait.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.litewait.domain.dto.State;

@Document(collection = "geo")
public class Geo extends AbstractEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String id;

	private String country;
	private List<State> state_list;

	public String getId() {
		return id;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public List<State> getState_list() {
		return state_list;
	}

	public void setState_list(List<State> state_list) {
		this.state_list = state_list;
	}

}
