package beautychu.dao;

import java.util.List;

import beautychu.domain.Review;
import beautychu.domain.Style;
import beautychu.domain.StyleDetail;
import beautychu.domain.StyleGrid;

public interface StyleDao {
	
	  List<?> getList(StyleGrid styleList);
	  List<?> getGridList();
	  StyleDetail getStyleDetail(int styleNo);
	  /*Style existUser(Map<String,String> params);*/
	  void insertStyle(Style style);
	  List<?> selectPhoto(int styleNo);
	  List<?> getReviewList(Review review);

	}