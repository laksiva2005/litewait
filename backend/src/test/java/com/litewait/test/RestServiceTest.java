package com.litewait.test;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.commons.io.IOUtils;
import org.apache.cxf.jaxrs.client.WebClient;
import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.map.MappingJsonFactory;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.litewait.domain.Geo;
import com.litewait.domain.UserMaster;
import com.litewait.domain.dto.Contact;
import com.litewait.domain.dto.OrderDetails;
import com.litewait.domain.dto.State;
import com.litewait.model.dto.LoginDTO;
import com.litewait.model.dto.OrderDTO;
import com.litewait.model.dto.PasswordDTO;
import com.litewait.model.dto.PayementDTO;
import com.litewait.model.dto.Result;
import com.litewait.model.dto.SessionDTO;
import com.litewait.model.dto.SignupDTO;
import com.litewait.model.dto.UserDTO;
import com.litewait.service.dao.IGenericDAO;
import com.litewait.service.web.RestService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-test-config.xml")
public class RestServiceTest {
	private Logger LOG = LoggerFactory.getLogger(this.getClass());

	@Autowired
	IGenericDAO genericDAO;

	@Autowired
	RestService restService;

	@Autowired
	SessionDTO sessionDTO;
	List<Object> providers = new ArrayList<Object>();

	private WebClient uploadClient;
	private String url = "http://localhost:8080/litewait/v1.0/rest/";
	private String user="test";
	private String sessionID="2925C03737B64CC5FE019F49A5F19966";

	@Test
	public void signup() {
		UserMaster userMaster = new UserMaster();
		Map<String, UserMaster> map = new HashMap<String, UserMaster>();
		sessionDTO.setSessionMap(map);
		SignupDTO signupDTO = getSignupDto(user);
		loadUserMaster(userMaster, signupDTO);
		map.put(user, userMaster);
		try {
			Response response = restService.saveUser(signupDTO);
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void login() {
		LoginDTO loginDTO = new LoginDTO();
		loginDTO.setUser("test");
		loginDTO.setUser_password("test@123");
		try {
			Response response = restService.login(loginDTO);
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void changePassword() {
		PasswordDTO passwordDTO = new PasswordDTO();
		passwordDTO.setOld_password("test@123");
		passwordDTO.setNew_password("admin@123");
		try {
			Response response = restService.changePassword(sessionID, passwordDTO);
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	

	@Test
	public void fetchUser() {
		try {
			Response response = restService.fetchUser(sessionID);
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void updateUser() {
		try {
			UserDTO userDTO=new UserDTO();
			userDTO.setUser(user);
			userDTO.setUser_name("admin");
			Contact contact=new Contact();
			contact.setAddress_1("ashok nagar");
			userDTO.setUser_session(sessionID);
			userDTO.setContact(contact);
			Response response = restService.updateUser(sessionID, userDTO);
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	public void savePayment() {
		try {
			PayementDTO payementDTO=new PayementDTO();
			payementDTO.setContact(getContact());
			payementDTO.setCard_expiry(new Date());
			payementDTO.setCard_number("123456");
			payementDTO.setCard_type("Credit");
			Response response = restService.savePayment(sessionID, payementDTO);
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void fetchPayment() {
		try {
			Response response = restService.fetchPayment(sessionID, "PAY-00002");
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void deletePayment() {
		try {
			Response response = restService.deletePayment(sessionID, "PAY-00002");
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void saveOrder() {
		try {
			OrderDTO orderDTO=new OrderDTO();
			orderDTO.setOrder_date(new Date());
			orderDTO.setMerchant_id("merchant");
			orderDTO.setOrder_details(getOrderDetails());
			Response response = restService.saveOrder(sessionID,orderDTO);
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	
	@Test
	public void fetchOrder() {
		try {
			Response response = restService.fetchOrder(sessionID);
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void saveGeo() {
		Geo geo=new Geo();
		geo.setCountry("US");
		List<State> stateList=new ArrayList<State>();
		State State=new State();
		 State.setState("newyork");
		 stateList.add(State);
		 List<String> list=new ArrayList<String>();
		 list.add("salem");
		 list.add("atlas");
		 State.setCity_list(list);
		 geo.setState_list(stateList);
		 
		try {
			Response response = restService.saveGeo(geo);
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Test
	public void fetchGeo() {
		try {
			Response response = restService.fetchGeo(sessionID);
			Result result = (Result) response.getEntity();
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private List<OrderDetails> getOrderDetails() {
		List<OrderDetails> order_details=new ArrayList<OrderDetails>();
		OrderDetails OrderDetail=new OrderDetails();
		OrderDetail.setProduct_code("Prod001");
		OrderDetail.setBatch_code("Batch001");
		OrderDetail.setDiscount(0.00);
		OrderDetail.setGross(100.00);
		OrderDetail.setNet(100.00);
		OrderDetail.setOrder_quantity(2);
		OrderDetail.setPrice(50.00);
		OrderDetail.setTax(0.00);
		order_details.add(OrderDetail);
		return order_details;
	}

	@Test
	public void webClientTest() {
		UserMaster userMaster = new UserMaster();
		String user = "test";
		SignupDTO signupDTO = getSignupDto(user);
		loadUserMaster(userMaster, signupDTO);
		try {
			providers.add(new org.codehaus.jackson.jaxrs.JacksonJsonProvider());
			uploadClient = WebClient.create(url + "user", providers);
			uploadClient.accept(MediaType.APPLICATION_JSON).type(
					MediaType.APPLICATION_JSON);
			Response response = uploadClient.post(signupDTO);
			Result result = processResponse(response, Result.class);
			printResult(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private void loadUserMaster(UserMaster userMaster, SignupDTO signupDTO) {
		userMaster.setUser_type(signupDTO.getUser_type());
		userMaster.setUser_password(signupDTO.getUser_password());
		userMaster.setUser_session(sessionID);
		userMaster.setIs_active('Y');
		userMaster.setUser_dob(new Date());
		userMaster.setUser(signupDTO.getUser());
		userMaster.setContact(getContact());

	}
	
	private Contact getContact(){
		Contact contact = new Contact();
		contact.setMail_id("mail@gmail.com");
		return contact;
	}

	private SignupDTO getSignupDto(String user) {
		SignupDTO signupDTO = new SignupDTO();
		signupDTO.setUser(user);
		signupDTO.setUser_password("test@123");
		signupDTO.setUser_mail("mail@gmail.com");
		signupDTO.setUser_type('C');

		return signupDTO;
	}

	private void printResult(Result result) {
		LOG.info("Code : " + result.getCode());
		LOG.info("Message : " + result.getMessage());
		LOG.info("Data : " + convertToJson(result.getData()));

	}
	
	private String convertToJson(Object obj) {
		String json = null;

		ObjectMapper mapper = new ObjectMapper();
		try {
			json = new String(mapper.writer().writeValueAsBytes(obj));
		} catch (Exception e) {
			LOG.error("exception in converting json", e);
		}
		return json;
	}

	private <T> T processResponse(Response resp, Class<T> clazz)
			throws Exception {

		try {
			if (resp.getStatus() != 200) {
				String str = IOUtils.toString((InputStream) resp.getEntity());
				throw new Exception(str);
			}

			if ("String".equals(clazz.getSimpleName())) {
				return (T) IOUtils.toString((InputStream) resp.getEntity());
			} else if ("List".equals(clazz.getSimpleName())) {
				InputStream is = (InputStream) resp.getEntity();
				ObjectMapper mapper = new ObjectMapper();
				return (T) mapper.readValue(is, List.class);
			} else if ("Set".equals(clazz.getSimpleName())) {
				InputStream is = (InputStream) resp.getEntity();
				ObjectMapper mapper = new ObjectMapper();
				return (T) mapper.readValue(is, Set.class);
			} else {
				MappingJsonFactory factory = new MappingJsonFactory();
				JsonParser parser = factory.createJsonParser((InputStream) resp
						.getEntity());
				return parser.readValueAs(clazz);
			}
		} catch (Exception e) {
			LOG.info("Error in processing response", e);
			throw new RuntimeException("Process response failed", e);
		}
	}
}
