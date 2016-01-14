package com.litewait.service.dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.litewait.domain.AbstractEntity;
import com.litewait.domain.KeyGenerator;
import com.litewait.domain.PlaceOrder;
import com.litewait.domain.UserMaster;
import com.litewait.domain.UserPaymentConfig;
import com.litewait.exception.LiteWaitException;

@Component("genericDAO")
public class GenericDAO implements IGenericDAO {

	@Autowired
	MongoOperations mongoOperation;

	public MongoOperations getMongoOperation() {
		return mongoOperation;
	}

	public void setMongoOperation(MongoOperations mongoOperation) {
		this.mongoOperation = mongoOperation;
	}

	@Override
	public List<PlaceOrder> searchOrder(String searchColumn, String searchKey)
			throws LiteWaitException {
		return mongoOperation.find(
				Query.query(Criteria.where(searchColumn).regex(searchKey)),
				PlaceOrder.class, "place_order");
	}

	@Override
	public Serializable save(AbstractEntity entity) throws LiteWaitException {
		mongoOperation.save(entity);
		return "success";
	}

	@Override
	public <T> T get(Class<T> clazz, String key, String value)
			throws LiteWaitException {
		return mongoOperation.findOne(
				Query.query(Criteria.where(key).is(value)), clazz);
	}

	@Override
	public <T> List<T> list(Class<T> clazz, String key, String value)
			throws LiteWaitException {
		return mongoOperation.find(Query.query(Criteria.where(key).is(value)),
				clazz);
	}

	@Override
	public <T> T get(Class<T> clazz, Map<String, String> map)
			throws LiteWaitException {
		Query query = new Query();
		query.addCriteria(getCriteria(map));
		return mongoOperation.findOne(query, clazz);
	}

	@Override
	public <T> List<T> list(Class<T> clazz, Map<String, String> map)
			throws LiteWaitException {
		Query query = new Query();
		query.addCriteria(getCriteria(map));
		return  mongoOperation.find(query, clazz);
	}

	@Override
	public <T> List<T> list(Class<T> clazz) throws LiteWaitException {
		return mongoOperation.findAll(clazz);
	}

	@Override
	public <T> boolean delete(Class<T> clazz, Map<String, String> map)
			throws LiteWaitException {
		Query query = new Query();
		query.addCriteria(getCriteria(map));
		mongoOperation.remove(query, clazz);

		return true;
	}

	private Criteria getCriteria(Map<String, String> map) {
		Criteria criteria = new Criteria();
		int i = 0;
		for (Map.Entry<String, String> entry : map.entrySet()) {
			if (i == 0) {
				criteria.where(entry.getKey()).is(entry.getValue());
				i++;
			} else {
				criteria.and(entry.getKey()).is(entry.getValue());
			}
		}
		return criteria;
	}
}