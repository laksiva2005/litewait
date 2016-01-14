package com.litewait.domain;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.litewait.domain.dto.Contact;

@Document(collection = "user_payment_config")
public class UserPaymentConfig extends AbstractEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private String id;
	private String user;
	private String payment_number;
	private String card_type;
	private String card_number;
	private String card_name;
	private Date card_expiry;
	private String cvv;
	private Contact card_address;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	

	
	public String getPayment_number() {
		return payment_number;
	}

	public void setPayment_number(String payment_number) {
		this.payment_number = payment_number;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

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

	public Contact getCard_address() {
		return card_address;
	}

	public void setCard_address(Contact card_address) {
		this.card_address = card_address;
	}

}
