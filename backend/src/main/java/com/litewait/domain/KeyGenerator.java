package com.litewait.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "key_generator")
public class KeyGenerator extends AbstractEntity  {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private String id;

	/* Merchant ID */
	private String user_id;
	private String module;
	private String prefix;
	private Integer suffix;
	private Integer suffix_length;

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

	public String getModule() {
		return module;
	}

	public void setModule(String module) {
		this.module = module;
	}

	public String getPrefix() {
		return prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public Integer getSuffix() {
		return suffix;
	}

	public void setSuffix(Integer suffix) {
		this.suffix = suffix;
	}

	public Integer getSuffix_length() {
		return suffix_length;
	}

	public void setSuffix_length(Integer suffix_length) {
		this.suffix_length = suffix_length;
	}

}
