package beautychu.domain;

import java.io.Serializable;
import java.util.List;

public class ShopDetail implements Serializable {

	private static final long serialVersionUID = 1L;


	String			email;
	String 		shopName;
	String			ShopIntro;
	String			shopAddr;
	String			shopTel;
	List<?>		shopPhoto;
	public String getEmail() {
		return email;
	}
	public String getShopName() {
		return shopName;
	}
	public String getShopIntro() {
		return ShopIntro;
	}
	public String getShopAddr() {
		return shopAddr;
	}
	public String getShopTel() {
		return shopTel;
	}
	public List<?> getShopPhoto() {
		return shopPhoto;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;
	}
	public void setShopIntro(String shopIntro) {
		ShopIntro = shopIntro;
	}
	public void setShopAddr(String shopAddr) {
		this.shopAddr = shopAddr;
	}
	public void setShopTel(String shopTel) {
		this.shopTel = shopTel;
	}
	public void setShopPhoto(List<?> shopPhoto) {
		this.shopPhoto = shopPhoto;
	}
	@Override
	public String toString() {
		return "ShopDetail [email=" + email + ", shopName=" + shopName
				+ ", ShopIntro=" + ShopIntro + ", shopAddr=" + shopAddr
				+ ", shopTel=" + shopTel + ", shopPhoto=" + shopPhoto + "]";
	}
	
	
	
	

	
	
	
	
	
}
