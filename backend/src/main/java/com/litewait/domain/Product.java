package com.litewait.domain;

import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "product")
public class Product extends AbstractEntity  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String id;
	private String product_code;
	private String product_name;
	private String description;
	private String purchase_price;
	private Double sell_price;
	private Double tax;
	private Double discount;
	private String image;
	private String addOn;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getProduct_code() {
		return product_code;
	}
	public void setProduct_code(String product_code) {
		this.product_code = product_code;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPurchase_price() {
		return purchase_price;
	}
	public void setPurchase_price(String purchase_price) {
		this.purchase_price = purchase_price;
	}
	public Double getSell_price() {
		return sell_price;
	}
	public void setSell_price(Double sell_price) {
		this.sell_price = sell_price;
	}
	public Double getTax() {
		return tax;
	}
	public void setTax(Double tax) {
		this.tax = tax;
	}
	public Double getDiscount() {
		return discount;
	}
	public void setDiscount(Double discount) {
		this.discount = discount;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getAddOn() {
		return addOn;
	}
	public void setAddOn(String addOn) {
		this.addOn = addOn;
	}

	

}
