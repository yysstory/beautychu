package beautychu.control.json;

import java.util.HashMap;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import beautychu.domain.Member;
import beautychu.service.MemberService;

@Controller("json.userControl")
@RequestMapping("/json/user")
public class UserControl {
	@Autowired
	MemberService memberService;

	@RequestMapping("/updateUser")
	public Object updateUser(String email, String name, String phone, String address,
	    String password, HttpSession session)	throws Exception {
	  
	  Member member = new Member();
	  member.setEmail(email);
	  member.setName(name);
	  member.setAddress(address);
	  member.setPhone(phone);
	  member.setPassword(password);
	  memberService.updateUser(member);

	  HashMap<String, Object> resultMap = new HashMap<>();
	  
	  session.setAttribute("loginUser", member);
	  resultMap.put("status","success");
	  resultMap.put("loginUser", member);
	  
	  return resultMap;
	}
	
	@RequestMapping("/deleteUser")
	public Object deleteUser(String email, String name, String address, 
      String phone, String password, HttpSession session) throws Exception {
	  
	  Member member = new Member();
	  member.setEmail(email);
	  memberService.deleteUser(member);
	  
	  HashMap<String, Object> resultMap = new HashMap<>();
	  
	  resultMap.put("status", "success");
	  resultMap.remove("loginUser", member);
	  session.invalidate();
	  
    return resultMap;
	  
	}

}
