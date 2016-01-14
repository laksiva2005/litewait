package com.litewait.sevice.security;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.cxf.io.CachedOutputStream;
import org.apache.cxf.message.Message;
import org.apache.cxf.phase.AbstractPhaseInterceptor;
import org.apache.cxf.phase.Phase;
import org.apache.cxf.transport.http.AbstractHTTPDestination;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.litewait.common.SessionHolder;
import com.litewait.domain.UserMaster;
import com.litewait.domain.dto.Contact;
import com.litewait.domain.dto.UserLoginDetails;
import com.litewait.model.dto.LoginDTO;
import com.litewait.model.dto.SessionDTO;
import com.litewait.model.dto.SignupDTO;
import com.litewait.service.dao.IGenericDAO;

public class AuthenticatorInterceptor extends AbstractPhaseInterceptor<Message> {

	private static final Logger LOG = LoggerFactory
			.getLogger(AuthenticatorInterceptor.class);


	@Autowired
	SessionDTO sessionDto;

	@Autowired
	IGenericDAO genericDAO;

	public AuthenticatorInterceptor() {
		super(Phase.RECEIVE);
	}

	public void handleMessage(Message message) {
		HttpServletRequest request = (HttpServletRequest) message
				.get(AbstractHTTPDestination.HTTP_REQUEST);
		String method = (String) message.get(Message.HTTP_REQUEST_METHOD);
		String requestUrl = message.get(Message.REQUEST_URL).toString();
		if ("POST".equalsIgnoreCase(method) && requestUrl.contains("rest/user")) {
			loadValues(request, message);
		} else if ("POST".equalsIgnoreCase(method)
				&& requestUrl.contains("rest/login")) {
			login(request, message);
		}
}

	private void login(HttpServletRequest request, Message message) {
		HttpSession session = request.getSession(true);
		String sessionId = session.getId();
		String json = getJson(message);
		if (json != null) {
			ObjectMapper mapper = new ObjectMapper();
			LoginDTO loginDTO;
			try {
				loginDTO = mapper.readValue(json.getBytes(), LoginDTO.class);
				UserMaster userMaster = genericDAO.get(UserMaster.class,"user",loginDTO.getUser());
				userMaster.setUser_session(sessionId);
				loadSession(loginDTO.getUser(), userMaster, session);
			} catch (Exception e) {
				LOG.error("Error in login ",e);
			}
		}
	}

	private void loadValues(HttpServletRequest request, Message message) {
		HttpSession session = request.getSession(true);
		String sessionId = session.getId();
		String userAgent = request.getHeader("user-agent");
		String accept = request.getHeader("Accept");
		String remoteHost = request.getRemoteHost();
		Integer remotePort = request.getRemotePort();
		String remoteUser = request.getRemoteUser();
		String json = getJson(message);
		if (json != null) {
			try {
				ObjectMapper mapper = new ObjectMapper();
				SignupDTO signupDTO = mapper.readValue(json.getBytes(),
						SignupDTO.class);

				UserLoginDetails userLoginDetails = new UserLoginDetails();
				userLoginDetails.setIs_locked('N');
				userLoginDetails.setIs_logged_in('N');
				userLoginDetails.setLast_login(new Date());
				userLoginDetails.setPassword_history(new ArrayList<String>());
				userLoginDetails.setPort(remotePort);
				userLoginDetails.setSystem_ip(remoteHost);
				userLoginDetails.setUser_id(remoteUser);
				userLoginDetails.setWrong_attempts(0);
				UserMaster userMaster = new UserMaster();
				userMaster.setUser_type(signupDTO.getUser_type());
				userMaster.setUser_password(signupDTO.getUser_password());
				userMaster.setUser_session(sessionId);
				userMaster.setIs_active('Y');
				userMaster.setUser_dob(new Date());
				userMaster.setUser_login_details(userLoginDetails);
				userMaster.setUser(signupDTO.getUser());

				Contact contact = new Contact();
				contact.setMail_id(signupDTO.getUser_mail());
				userMaster.setContact(contact);
				loadSession(signupDTO.getUser(), userMaster, session);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	}

	private void loadSession(String user, UserMaster userMaster,
			HttpSession session) {
		Map<String, UserMaster> map = new HashMap<String, UserMaster>();
		map.put(user, userMaster);
		sessionDto.setSessionMap(map);
		SessionHolder.getIntance().saveSession(user, session);
	}

	private String getJson(Message message) {
		String json = null;
		StringBuilder sb = new StringBuilder();
		InputStream is = message.getContent(InputStream.class);
		if (is != null) {
			CachedOutputStream bos = new CachedOutputStream();
			try {
				copy(is, bos, 4096);
				bos.flush();
				is.close();
				message.setContent(InputStream.class, bos.getInputStream());
				bos.writeCacheTo(sb);
				bos.close();
				json = sb.toString();
			} catch (Exception e) {
				LOG.error("Error in converting message", e);
			}
		}
		return json;
	}

	public static int copy(final InputStream input, final OutputStream output,
			int bufferSize) throws IOException {
		int avail = input.available();
		if (avail > 262144) {
			avail = 262144;
		}
		if (avail > bufferSize) {
			bufferSize = avail;
		}
		final byte[] buffer = new byte[bufferSize];
		int n = 0;
		n = input.read(buffer);
		int total = 0;
		while (-1 != n) {
			if (n == 0) {
				throw new IOException(
						"0 bytes read in violation of InputStream.read(byte[])");
			}
			output.write(buffer, 0, n);
			total += n;
			n = input.read(buffer);
		}
		return total;
	}

	public static String getBody(HttpServletRequest request) throws IOException {

		String body = null;
		StringBuilder stringBuilder = new StringBuilder();
		BufferedReader bufferedReader = null;

		try {
			InputStream inputStream = request.getInputStream();
			if (inputStream != null) {
				bufferedReader = new BufferedReader(new InputStreamReader(
						inputStream));
				char[] charBuffer = new char[128];
				int bytesRead = -1;
				while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
					stringBuilder.append(charBuffer, 0, bytesRead);
				}
			} else {
				stringBuilder.append("");
			}
		} catch (IOException ex) {
			throw ex;
		} finally {
			if (bufferedReader != null) {
				try {
					bufferedReader.close();
				} catch (IOException ex) {
					throw ex;
				}
			}
		}

		body = stringBuilder.toString();
		return body;
	}
}
