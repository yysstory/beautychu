package beautychu.domain;

import java.io.Serializable;

public class StylePhoto implements Serializable {

	private static final long serialVersionUID = 1L;
	
	int stylePhotoNumber;
	int styleNumber;
	String url;
	public int getStylePhotoNumber() {
		return stylePhotoNumber;
	}
	public void setStylePhotoNumber(int stylePhotoNumber) {
		this.stylePhotoNumber = stylePhotoNumber;
	}
	public int getStyleNumber() {
		return styleNumber;
	}
	public void setStyleNumber(int styleNumber) {
		this.styleNumber = styleNumber;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	@Override
	public String toString() {
		return "StylePhoto [stylePhotoNumber=" + stylePhotoNumber
				+ ", styleNumber=" + styleNumber + ", url=" + url
				+ "]";
	}
	
	
	
}
