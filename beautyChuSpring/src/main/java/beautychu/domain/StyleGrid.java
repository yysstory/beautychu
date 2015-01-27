package beautychu.domain;

import java.io.Serializable;

public class StyleGrid implements Serializable {

	private static final long serialVersionUID = 1L;

	int 		styleNumber;
	String 	email;
	String 	styleName;
	String    	styleLength;
	String 	url;
	
	
	
	
	public String getStyleLength() {
		return styleLength;
	}
	public void setStyleLength(String styleLength) {
		this.styleLength = styleLength;
	}
	public int getStyleNumber() {
		return styleNumber;
	}
	public void setStyleNumber(int styleNumber) {
		this.styleNumber = styleNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getStyleName() {
		return styleName;
	}
	public void setStyleName(String styleName) {
		this.styleName = styleName;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	
	@Override
	public String toString() {
		return "StyleGrid [styleNumber=" + styleNumber + ", email=" + email
				+ ", styleName=" + styleName + ", styleLength=" + styleLength
				+ ", url=" + url + "]";
	}
	
	
	
	

	
	


	
	
	
	
}