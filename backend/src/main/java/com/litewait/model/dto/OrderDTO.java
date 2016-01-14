package com.litewait.model.dto;

import java.util.Date;
import java.util.List;

import com.litewait.domain.dto.OrderDetails;

public class OrderDTO {

	private Date order_date;
	private String merchant_id;
	private Integer total_quantity;
	private Double tota_tax;
	private Double total_discount;
	private Double total_gross;
	private Double total_net;
	private List<OrderDetails> order_details;

	

	public Date getOrder_date() {
		return order_date;
	}

	public void setOrder_date(Date order_date) {
		this.order_date = order_date;
	}

	public String getMerchant_id() {
		return merchant_id;
	}

	public void setMerchant_id(String merchant_id) {
		this.merchant_id = merchant_id;
	}

	public Integer getTotal_quantity() {
		return total_quantity;
	}

	public void setTotal_quantity(Integer total_quantity) {
		this.total_quantity = total_quantity;
	}

	public Double getTota_tax() {
		return tota_tax;
	}

	public void setTota_tax(Double tota_tax) {
		this.tota_tax = tota_tax;
	}

	public Double getTotal_discount() {
		return total_discount;
	}

	public void setTotal_discount(Double total_discount) {
		this.total_discount = total_discount;
	}

	public Double getTotal_gross() {
		return total_gross;
	}

	public void setTotal_gross(Double total_gross) {
		this.total_gross = total_gross;
	}

	public Double getTotal_net() {
		return total_net;
	}

	public void setTotal_net(Double total_net) {
		this.total_net = total_net;
	}

	public List<OrderDetails> getOrder_details() {
		return order_details;
	}

	public void setOrder_details(List<OrderDetails> order_details) {
		this.order_details = order_details;
	}

}
