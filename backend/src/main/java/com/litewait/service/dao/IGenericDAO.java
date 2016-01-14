package com.litewait.service.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.litewait.domain.AbstractEntity;
import com.litewait.domain.PlaceOrder;
import com.litewait.exception.LiteWaitException;

public interface IGenericDAO {

	<T> T get(Class<T> clazz, String key, String value)
			throws LiteWaitException;

	<T> List<T> list(Class<T> clazz) throws LiteWaitException;

	<T> List<T> list(Class<T> clazz, String key, String value)
			throws LiteWaitException;

	<T> T get(Class<T> clazz, Map<String, String> map) throws LiteWaitException;

	<T> List<T> list(Class<T> clazz, Map<String, String> map)
			throws LiteWaitException;

	abstract Serializable save(AbstractEntity entity) throws LiteWaitException;

	<T> boolean delete(Class<T> clazz, Map<String, String> map)
			throws LiteWaitException;

	List<PlaceOrder> searchOrder(String searchColumn, String searchKey)
			throws LiteWaitException;

}
