package beautychu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import beautychu.dao.StyleDao;
import beautychu.domain.Review;
import beautychu.domain.Style;
import beautychu.domain.StyleDetail;
import beautychu.domain.StyleGrid;

@Service
public class StyleService {
  @Autowired StyleDao styleDao;
  
  public List<?> getList(StyleGrid styleList) {
	    return styleDao.getList(); 
	  }
  
  public List<?> getGridList() {
	    return styleDao.getGridList(); 
	  }
  
/*  public List<?> getStyleDetail() {
	    return styleDao.getStyleDetail(); 
	  }*/
  
  
/*	public Style validate(String email, String password) {
		HashMap<String, String> params = new HashMap<>();
		params.put("email", email);
		params.put("password", password);
		return styleDao.existUser(params);
	}*/

	public void insertStyle(Style style) {
		styleDao.insertStyle(style);
	}
	
	  public StyleDetail get(Review review) {
		  	System.out.println(review.getStyleNo());
		    StyleDetail styleDetail = styleDao.getStyleDetail(review.getStyleNo());
		    styleDetail.setPhotoList( styleDao.selectPhoto(review.getStyleNo()));
		    styleDetail.setReview( styleDao.getReviewList(review));
		    return styleDetail;
		  }
}







