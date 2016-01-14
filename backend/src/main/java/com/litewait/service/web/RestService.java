package com.litewait.service.web;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import org.apache.commons.io.IOUtils;
import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.map.MappingJsonFactory;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

import uk.co.jemos.podam.api.PodamFactory;
import uk.co.jemos.podam.api.PodamFactoryImpl;

import com.litewait.common.DESEncrypter;
import com.litewait.common.DESEncrypter.EncryptionException;
import com.litewait.common.Module;
import com.litewait.domain.Geo;
import com.litewait.domain.KeyGenerator;
import com.litewait.domain.NewCity;
import com.litewait.domain.PlaceOrder;
import com.litewait.domain.UserMaster;
import com.litewait.domain.UserPaymentConfig;
import com.litewait.domain.dto.City;
import com.litewait.domain.dto.Contact;
import com.litewait.exception.LiteWaitException;
import com.litewait.model.dto.LoginDTO;
import com.litewait.model.dto.OrderDTO;
import com.litewait.model.dto.PasswordDTO;
import com.litewait.model.dto.PayementDTO;
import com.litewait.model.dto.Result;
import com.litewait.model.dto.SessionDTO;
import com.litewait.model.dto.SignupDTO;
import com.litewait.model.dto.UserDTO;
import com.litewait.service.dao.IGenericDAO;
import com.mongodb.util.Hash;

@Path("/rest")
public class RestService {
	private static final Logger LOG = LoggerFactory
			.getLogger(RestService.class);

	private static ApplicationContext applicationContext;

	public void setApplicationContext(ApplicationContext applicationContextIn) {
		applicationContext = applicationContextIn;
	}

	@Autowired
	SessionDTO sessionDTO;

	@Autowired
	IGenericDAO genericDAO;

	@Autowired
	DESEncrypter desEncrypter;
	
	
	//TODO - validations pending

	/*----------------------------------------- LOGIN MODULE START-------------------------------------------*/

	@POST
	@Path("/login")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response login(LoginDTO loginDTO) throws LiteWaitException {
		Result result = new Result();
		try {
			UserMaster userMaster = genericDAO.get(UserMaster.class, "user",
					loginDTO.getUser());
			if (validatepassword(loginDTO.getUser_password(),
					userMaster.getUser_password())) {
				result.setCode(0);
				result.setMessage("success");
				result.setData(getUseDto(userMaster));
			} else {
				result.setCode(1);
				result.setMessage("Authentication failed");
			}
		} catch (Exception e) {
			LOG.error("Error in login ", e);
			result.setCode(1);
			result.setMessage("Error in login " + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	@PUT
	@Path("/passhash")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response changePassword(@QueryParam("sessionID") String sessionID,
			PasswordDTO passwordDTO) throws LiteWaitException {
		Result result = new Result();
		UserMaster userMaster = genericDAO.get(UserMaster.class,
				"user_session", sessionID);
		if (validatepassword(passwordDTO.getOld_password(),
				userMaster.getUser_password())) {
			userMaster.setUser_password(encrypt(passwordDTO.getNew_password()));
			genericDAO.save(userMaster);
			result.setCode(0);
			result.setMessage("Success");
		} else {
			result.setCode(1);
			result.setMessage("Password not matched");
		}
		return Response.status(200).entity(result).build();
	}

	/*----------------------------------------- LOGIN MODULE END-------------------------------------------*/
	
	
	
	

	/*----------------------------------------- USER MODULE START-------------------------------------------*/

	@POST
	@Path("/user")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response saveUser(SignupDTO dto) throws LiteWaitException {
		Result result = new Result();
		try {
			UserMaster userMaster = sessionDTO.getSessionMap().get(
					dto.getUser());
			userMaster.setUser_password(encrypt(userMaster.getUser_password()));
			genericDAO.save(userMaster);
			result.setCode(0);
			result.setMessage("success");
			result.setData(getUseDto(userMaster));
		} catch (Exception e) {

			LOG.error("Error in saving user " + dto.getUser(), e);
			result.setCode(1);
			result.setMessage("Error in saving." + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	private UserDTO getUseDto(UserMaster userMaster) {
		UserDTO userDto = new UserDTO();
		userDto.setContact(userMaster.getContact());
		userDto.setUser(userMaster.getUser());
		userDto.setUser_name(userMaster.getUser_name());
		userDto.setUser_session(userMaster.getUser_session());
		return userDto;
	}

	@GET
	@Path("/user")
	@Produces({ "application/json" })
	public Response fetchUser(@QueryParam("sessionID") String sessionID)
			throws LiteWaitException {
		Result result = new Result();
		try {
			UserMaster userMaster = genericDAO.get(UserMaster.class,
					"user_session", sessionID);
			result.setCode(0);
			if (userMaster.getContact() == null) {
				userMaster.setContact(new Contact());
			}
			UserDTO userDto = new UserDTO();
			userDto.setContact(userMaster.getContact());
			userDto.setUser(userMaster.getUser());
			userDto.setUser_name(userMaster.getUser_name());
			result.setData(userDto);
			result.setMessage("Success");
		} catch (Exception e) {
			LOG.error("Error in fetching user ", e);
			result.setCode(1);
			result.setMessage("Error in fetching user " + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	@PUT
	@Path("/user")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response updateUser(@QueryParam("sessionID") String sessionID,
			UserDTO userDTO) throws LiteWaitException {
		Result result = new Result();
		try {
			UserMaster userMaster = genericDAO.get(UserMaster.class,
					"user_session", sessionID);
			userMaster.setContact(userDTO.getContact());
			userMaster.setUser_name(userDTO.getUser_name());
			genericDAO.save(userMaster);
			result.setMessage("success");
			result.setCode(0);
			result.setData(userMaster);
		} catch (Exception e) {
			LOG.error("Error in fetching user ", e);
			result.setCode(1);
			result.setMessage("Error in updating user " + e.getMessage());
		}

		return Response.status(200).entity(result).build();
	}

	/*----------------------------------------- USER MODULE END----------------------------------------------*/
	
	
	
	

	/*----------------------------------------- PAYMENT MODULE START-----------------------------------------*/

	@POST
	@Path("/payment")
	@Produces({ "application/json" })
	public Response savePayment(@QueryParam("sessionID") String sessionID,
			PayementDTO dto) throws LiteWaitException {
		Result result = new Result();
		String userCode = null;
		try {
			UserMaster userMaster = genericDAO.get(UserMaster.class,
					"user_session", sessionID);
			UserPaymentConfig userPaymentConfig = new UserPaymentConfig();
			userPaymentConfig.setUser(userMaster.getUser());
			userPaymentConfig.setPayment_number(generateId(
					userMaster.getUser(), Module.PAYMENT.getColumn()));
			userPaymentConfig.setCard_expiry(dto.getCard_expiry());
			userPaymentConfig.setCard_name(dto.getCard_name());
			userPaymentConfig.setCard_number(dto.getCard_number());
			userPaymentConfig.setCard_type(dto.getCard_type());
			userPaymentConfig.setCvv(dto.getCvv());
			userPaymentConfig.setCard_address(dto.getContact());
			genericDAO.save(userPaymentConfig);
			result.setCode(0);
			result.setMessage("success");
			result.setData(userPaymentConfig.getPayment_number());
		} catch (Exception e) {
			LOG.error("Error in payment " + userCode, e);
			result.setCode(1);
			result.setMessage("Error in payment." + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	@GET
	@Path("/payment")
	@Produces({ "application/json" })
	public Response fetchPayment(@QueryParam("sessionID") String sessionID,
			@QueryParam("paymentNO") String paymentNO) throws LiteWaitException {
		Result result = new Result();
		try {
			UserMaster userMaster = genericDAO.get(UserMaster.class,
					"user_session", sessionID);
			UserPaymentConfig payment = genericDAO.get(UserPaymentConfig.class,
					"user", userMaster.getUser());
			result.setCode(0);
			if (payment != null) {
				PayementDTO dto = new PayementDTO();
				dto.setContact(payment.getCard_address());
				dto.setCard_expiry(payment.getCard_expiry());
				dto.setCard_name(payment.getCard_name());
				dto.setCard_number(payment.getCard_number());
				dto.setCvv(payment.getCvv());
				result.setMessage("success");
				result.setData(dto);
				
			}else{
				result.setMessage("Payment not found");
			}
		} catch (Exception e) {
			LOG.error("Error in fetching user ", e);
			result.setCode(1);
			result.setMessage("Error in fetching user " + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	@DELETE
	@Path("/payment")
	@Produces({ "application/json" })
	public Response deletePayment(@QueryParam("sessionID") String sessionID,
			@QueryParam("paymentNO") String paymentNO) throws LiteWaitException {
		UserMaster userMaster = genericDAO.get(UserMaster.class,
				"user_session", sessionID);
		Map<String, String> map = new HashMap<String, String>();
		map.put("user", userMaster.getUser());
		map.put("payment_number", paymentNO);
		Result result = new Result();
		try {
			genericDAO.delete(UserPaymentConfig.class, map);
			result.setCode(0);
			result.setMessage("success");
		} catch (Exception e) {
			LOG.error("Error in fetching user ", e);
			result.setCode(1);
			result.setMessage("Error in fetching user " + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	/*----------------------------------------- PAYMENT MODULE END----------------------------------------------*/
	
	
	
	

	/*----------------------------------------- ORDER MODULE START----------------------------------------------*/

	@POST
	@Path("/order")
	@Produces({ "application/json" })
	public Response saveOrder(@QueryParam("sessionID") String sessionID,
			OrderDTO dto) throws LiteWaitException {
		Result result = new Result();
		String userCode = null;
		try {
			UserMaster userMaster = genericDAO.get(UserMaster.class,
					"user_session", sessionID);
			PlaceOrder placeOrder = new PlaceOrder();
			String orderId = generateId(dto.getMerchant_id(),
					Module.ORDER.getColumn());
			placeOrder.setOrder_id(orderId);
			placeOrder.setOrder_date(dto.getOrder_date());
			placeOrder.setTota_tax(dto.getTota_tax());
			placeOrder.setTotal_discount(dto.getTotal_discount());
			placeOrder.setTotal_gross(dto.getTotal_gross());
			placeOrder.setTotal_net(dto.getTotal_net());
			placeOrder.setTotal_quantity(dto.getTotal_quantity());
			placeOrder.setUser(userMaster.getUser());
			placeOrder.setOrderDetails(dto.getOrder_details());
			genericDAO.save(placeOrder);
			result.setCode(0);
			result.setMessage(orderId);
		} catch (Exception e) {
			LOG.error("Error in saving order for " + userCode, e);
			result.setCode(1);
			result.setMessage("Error in saving order." + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	@GET
	@Path("/order")
	@Produces({ "application/json" })
	public Response fetchOrder(@QueryParam("sessionID") String sessionID)
			throws LiteWaitException {
		Result result = new Result();
		try {
			UserMaster userMaster = genericDAO.get(UserMaster.class,
					"user_session", sessionID);
			result.setCode(0);
			result.setMessage("sucess");
			result.setData(genericDAO.list(PlaceOrder.class, "user",
					userMaster.getUser()));
		} catch (Exception e) {
			LOG.error("Error in fetching user ", e);
			result.setCode(1);
			result.setMessage("Error in fetching user " + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	/*----------------------------------------- ORDER MODULE END----------------------------------------------*/
	
	
	
	

	/*----------------------------------------- KEY GENERATION MODULE START------------------------------------*/

	private String generateId(String user_id, String module)
			throws LiteWaitException {
		String id = null;
		Map<String, String> map = new HashMap<String, String>();
		map.put("user_id", user_id);
		map.put("module", module);
		KeyGenerator keyGenerator = genericDAO.get(KeyGenerator.class, map);
		if (keyGenerator == null) {
			keyGenerator = new KeyGenerator();
			keyGenerator.setModule(module);
			keyGenerator.setPrefix(module);
			keyGenerator.setSuffix(0);
			keyGenerator.setUser_id(user_id);
			keyGenerator.setSuffix_length(5);
			genericDAO.save(keyGenerator);

		}
		id = constructKey(keyGenerator.getPrefix(), keyGenerator.getSuffix(),
				keyGenerator.getSuffix_length());
		keyGenerator.setSuffix(keyGenerator.getSuffix() + 1);
		// TODO change to update query
		genericDAO.save(keyGenerator);
		return id;
	}

	private String constructKey(String prefix, Integer suffix,
			Integer suffix_length) {
		suffix = suffix + 1;
		Integer length = suffix.toString().length();
		Integer diffLength = suffix_length - length;
		String zeros = generateZeros(diffLength);
		return prefix + zeros + suffix;
	}

	private String generateZeros(Integer diffLength) {
		String zero = "";
		for (int i = 0; i < diffLength; i++) {
			zero = zero + "0";
		}
		return zero.trim();
	}

	/*----------------------------------------- KEY GENERATION MODULE END------------------------------------*/
	
	
	
	

	/*----------------------------------------- GEO MODULE START----------------------------------------------*/
	@POST
	@Path("/geo")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public Response saveGeo(Geo geo) throws LiteWaitException {
		Result result = new Result();
		try {
			genericDAO.save(geo);
			result.setCode(0);
			result.setMessage("success");
			result.setData(null);
		} catch (Exception e) {
			LOG.error("Error in saving user ", e);
			result.setCode(1);
			result.setMessage("Error in saving." + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	@GET
	@Path("/geo")
	@Produces({ "application/json" })
	public Response fetchGeo(@QueryParam("sessionID") String sessionID)
			throws LiteWaitException {
		Result result = new Result();
		try {
			result.setCode(0);
			result.setMessage("success");
			result.setData(genericDAO.list(Geo.class));
		} catch (Exception e) {
			LOG.error("Error in fetching ggeo ", e);
			result.setCode(1);
			result.setMessage("Error in saving." + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	@GET
	@Path("/location")
	@Produces({ "application/json" })
	public Response saveCityGeo(@QueryParam("city") String city)
			throws LiteWaitException {
		Result result = new Result();
		try {
			NewCity newCity = new NewCity();
			newCity.setCity(city);
			genericDAO.save(newCity);
			result.setCode(0);
			result.setMessage("success");
			result.setData(null);
		} catch (Exception e) {
			LOG.error("Error in saving user ", e);
			result.setCode(1);
			result.setMessage("Error in saving." + e.getMessage());
		}
		return Response.status(200).entity(result).build();
	}

	/*----------------------------------------- GEO MODULE END----------------------------------------------*/

	public static void main(String[] args) {
		PodamFactory factory = new PodamFactoryImpl();
		Geo geo = factory.manufacturePojo(Geo.class);
		List<OrderDTO> master = factory.manufacturePojo(List.class);
		RestService service = new RestService();
		String json = service.convertToJson(geo);
		System.out.println(json);
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

	private Boolean validatepassword(String unecrptPass, String encryptPass)
			throws LiteWaitException {
		try {
			String password = desEncrypter.encrypt(unecrptPass);
			if (password.equalsIgnoreCase(encryptPass)) {
				return true;
			}
		} catch (Exception e) {
			throw new LiteWaitException(e);
		}
		return false;

	}

	private String encrypt(String value) throws LiteWaitException {
		try {
			value = desEncrypter.encrypt(value);
		} catch (Exception e) {
			throw new LiteWaitException(e);
		}
		return value;
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

}
