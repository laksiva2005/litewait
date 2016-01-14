package com.litewait.common;

/*import javax.servlet.http.HttpServlet;*/
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LitewaitSession {

	public void doGet(HttpServletRequest request, HttpServletResponse response) {
		try {
			response.setContentType("text/html");
			String n = request.getParameter("userName");
			HttpSession session = request.getSession();
			session.setAttribute("uname", n);

		} catch (Exception e) {
			System.out.println(e);
		}
	}

}
