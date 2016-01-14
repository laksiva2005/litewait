package com.litewait.common;

public enum Module {
	ORDER("ORD-"),
	PAYMENT("PAY-");
	
	private String column;
	
	Module(String column) {
        this.column = column;
    }

	public String getColumn() {
		return column;
	}
	
	
}
