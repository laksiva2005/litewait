package com.litewait.model.dto;

import java.util.Date;

import com.litewait.domain.dto.Contact;

public class PayementDTO {
	private String card_type;
	private String card_number;
	private String card_name;
	private Date card_expiry;
	private String cvv;
	private Contact contact;

	public String getCard_type() {
		return card_type;
	}

	public void setCard_type(String card_type) {
		this.card_type = card_type;
	}

	public String getCard_number() {
		return card_number;
	}

	public void setCard_number(String card_number) {
		this.card_number = card_number;
	}

	public String getCard_name() {
		return card_name;
	}

	public void setCard_name(String card_name) {
		this.card_name = card_name;
	}

	public Date getCard_expiry() {
		return card_expiry;
	}

	public void setCard_expiry(Date card_expiry) {
		this.card_expiry = card_expiry;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}

	public Contact getContact() {
		return contact;
	}

	public void setContact(Contact contact) {
		this.contact = contact;
	}

}
