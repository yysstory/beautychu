package beautychu.domain;

import java.io.Serializable;

public class StyleGrid implements Serializable {

	private static final long serialVersionUID = 1L;

	String styleName;
	String stylePhoto;
	
	
	
	public String getStyleName() {
		return styleName;
	}
	public void setStyleName(String styleName) {
		this.styleName = styleName;
	}
	public String getStylePhoto() {
		return stylePhoto;
	}
	public void setStylePhoto(String stylePhoto) {
		this.stylePhoto = stylePhoto;
	}
	
	
	@Override
	public String toString() {
		return "StyleGrid [styleName=" + styleName + ", stylePhoto="
				+ stylePhoto + "]";
	}

	
	
	
	
}