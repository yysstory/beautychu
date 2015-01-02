package beautychu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import beautychu.dao.MakerDao;
import beautychu.domain.Maker;

@Service
public class MakerService {
  @Autowired MakerDao makerDao;
  
  public List<Maker> getList() {
    return makerDao.selectNameList(); 
  }
}







