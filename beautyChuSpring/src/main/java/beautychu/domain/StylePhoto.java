package beautychu.domain;

import java.io.Serializable;

public class StylePhoto implements Serializable {

	private static final long serialVersionUID = 1L;
	
	int stylePhotoNo;
	int styleNo;
	String stylePhotoUrl;
	public int getStylePhotoNo() {
		return stylePhotoNo;
	}
	public int getStyleNo() {
		return styleNo;
	}
	public String getStylePhotoUrl() {
		return stylePhotoUrl;
	}
	public void setStylePhotoNo(int stylePhotoNo) {
		this.stylePhotoNo = stylePhotoNo;
	}
	public void setStyleNo(int styleNo) {
		this.styleNo = styleNo;
	}
	public void setStylePhotoUrl(String stylePhotoUrl) {
		this.stylePhotoUrl = stylePhotoUrl;
	}
	@Override
	public String toString() {
		return "StylePhoto [stylePhotoNo=" + stylePhotoNo + ", styleNo="
				+ styleNo + ", stylePhotoUrl=" + stylePhotoUrl + "]";
	}

	
	
}
