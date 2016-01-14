package com.litewait.common;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SessionHolder {

	private static SessionHolder sessionHolder = null;
	private HashMap<String, HttpSession> sessionMap = new HashMap<>();
	private final Logger LOG = LoggerFactory.getLogger(this.getClass());

	private SessionHolder() {
	};

	public static synchronized SessionHolder getIntance() {
		if (sessionHolder == null) {
			sessionHolder = new SessionHolder();
		}
		return sessionHolder;
	}
	
	public void saveSession(final String userCode, final HttpSession session) {
		sessionMap.put(userCode, session);
	}

	public void clearSession(final String userCode) {
		HttpSession session = sessionMap.get(userCode);
		if (session != null) {
			try {
				session.invalidate();
			} catch (Exception e) {
				LOG.error("Unable to invalidate session for user:" + userCode + e.getMessage(), e);
			}
			sessionMap.remove(userCode);
		}
	}
}
