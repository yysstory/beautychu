package beautychu.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import beautychu.dao.MemberDao;
import beautychu.domain.Member;

@Service
public class MemberService {
  @Autowired MemberDao memberDao;
  
  public Member validate(String userId, String password) {
    HashMap<String,String> params = new HashMap<>();
    params.put("userId", userId);
    params.put("password", password);
    return memberDao.existUser(params);
  }

}














