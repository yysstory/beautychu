package beautychu.dao;

import java.util.Map;

import beautychu.domain.Member;

public interface MemberDao {
  Member existUser(Map<String,String> params);
}
