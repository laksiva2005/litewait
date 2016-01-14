package com.litewait.domain;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "retailer_master")
public class RetailerMaster extends AbstractEntity  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private String id;
	private String user_id;
	private String website;
	private String latitude;
	private String longitude;
	private Date opening_time;
	private Date closing_time;
	private Integer ratings;
	private Date moodification_date;
	private Integer waiting_time;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public Date getOpening_time() {
		return opening_time;
	}

	public void setOpening_time(Date opening_time) {
		this.opening_time = opening_time;
	}

	public Date getClosing_time() {
		return closing_time;
	}

	public void setClosing_time(Date closing_time) {
		this.closing_time = closing_time;
	}

	public Integer getRatings() {
		return ratings;
	}

	public void setRatings(Integer ratings) {
		this.ratings = ratings;
	}

	public Date getMoodification_date() {
		return moodification_date;
	}

	public void setMoodification_date(Date moodification_date) {
		this.moodification_date = moodification_date;
	}

	public Integer getWaiting_time() {
		return waiting_time;
	}

	public void setWaiting_time(Integer waiting_time) {
		this.waiting_time = waiting_time;
	}

}
