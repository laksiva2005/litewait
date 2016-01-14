package com.litewait.domain;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.litewait.domain.dto.OrderDetails;

@Document(collection = "place_order")
public class PlaceOrder extends AbstractEntity  {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private String id;
	private String order_id;
	private String user;
	private String merchant_id;
	private Date order_date;
	private Character order_status;
	private Integer total_quantity;
	private Double tota_tax;
	private Double total_discount;
	private Double total_gross;
	private Double total_net;
	private List<OrderDetails> orderDetails;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getOrder_id() {
		return order_id;
	}

	public void setOrder_id(String order_id) {
		this.order_id = order_id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getMerchant_id() {
		return merchant_id;
	}

	public void setMerchant_id(String merchant_id) {
		this.merchant_id = merchant_id;
	}

	public Date getOrder_date() {
		return order_date;
	}

	public void setOrder_date(Date order_date) {
		this.order_date = order_date;
	}

	public Character getOrder_status() {
		return order_status;
	}

	public void setOrder_status(Character order_status) {
		this.order_status = order_status;
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

	public List<OrderDetails> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<OrderDetails> orderDetails) {
		this.orderDetails = orderDetails;
	}

}
