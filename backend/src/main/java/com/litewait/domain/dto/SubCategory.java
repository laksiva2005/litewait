package com.litewait.domain.dto;


import java.util.List;

import com.litewait.domain.Product;

public class SubCategory {
	private List<Product> productList;

	public List<Product> getProductList() {
		return productList;
	}

	public void setProductList(List<Product> productList) {
		this.productList = productList;
	}

}
