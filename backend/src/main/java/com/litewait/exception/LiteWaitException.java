package com.litewait.exception;

import java.io.Serializable;

public class LiteWaitException extends Exception implements Serializable {
	private static final long serialVersionUID = 1L;

	public LiteWaitException() {
		super();
	}

	public LiteWaitException(String msg) {
		super(msg);
	}

	public LiteWaitException(String msg, Exception e) {
		super(msg, e);
	}

	public LiteWaitException(Exception e) {
		super(e);
	}

}