	$(function(){
		//상품 뷰 탭메뉴
/*		$(".product_tabs li").on("click", function(){
			var idx = $(".product_tabs li").index(this);
	
			$(".product_tabs li").removeClass("on");
			$(".product_tabs li").eq(idx).addClass("on");
			$(".detail_info").hide();
			$(".detail_info").eq(idx).show();
			if(idx == 1) $(".detail_info").eq(idx).find("iframe").attr("src", "/shop/review.asp?pIdx="+$(".detail_info").eq(idx).find("iframe").data("pidx"));
			else if(idx == 2) $(".detail_info").eq(idx).find("iframe").attr("src", "/shop/qna.asp?pIdx="+$(".detail_info").eq(idx).find("iframe").data("pidx"));
		});*/

		//전성분 정보
/*		$("#ingredientView").click(function(){
			var className = $("#ingredientCon").attr("class");
			
			if(className.indexOf("on") == -1) $("#ingredientCon, #ingredientView").addClass("on");
			else $("#ingredientCon, #ingredientView").removeClass("on");
		});*/

		//상품 썸네일 이미지
		$(document).on("ready", ".s_thum", function(){
			$("#productImg .s_thum").children().first().addClass("on");
		});
		 
		$("#productImg .s_thum").on("click", "a", function(){
			var src = $(this).find("img").attr("src");

			$("#productImg .s_thum a").removeClass("on");
			$(this).addClass("on");
			$("#productImg .b_thum > span > img").attr("src", src);
		});

		//상품 썸네일 이미지 (퀵뷰)
		$("#productImg").on("click", "a", function(){
			var src = $(this).find("img").attr("src");

			$("#productImg a").removeClass("on");
			$(this).addClass("on");
			$("#proBigImg > img").attr("src", src);
		});

		//상품 수량
/*		$("#productCnt .btn_minus").click(function(){
			var v = $("[name='pCnt']").val();
			var price = Number($("[name='P_PRICE']").val());

			if(v > 1){
				$("[name='pCnt']").val(Number(v)-1);
				$("#viewTotalPrice").html(formatComma(price * Number($("[name='pCnt']").val())));
			}
		});
		$("#productCnt .btn_add").click(function(){
			var v = $("[name='pCnt']").val();
			var price = Number($("[name='P_PRICE']").val());

			if(v > 0){
				$("[name='pCnt']").val(Number(v)+1);
				$("#viewTotalPrice").html(formatComma(price * Number($("[name='pCnt']").val())));
			}
		});
		$("[name='pCnt']").focusout(function(){
			var v = $(this).val();
			var price = Number($("[name='P_PRICE']").val());
			$("#viewTotalPrice").html(formatComma(price * v));
		});*/

		//상품 뷰 옵션 상품 수량
/*		$("#optionProduct").on("click", " > dl .btn_minus", function(){
			var ele = $(this).parent().find("[name='optionCnt']");
			var v = Number(ele.val());

			if(v > 1){
				ele.val(v-1);
				$("#viewOptionTotalPrice").html(viewOptionPrice());
			}
		});
		$("#optionProduct").on("click", " > dl .btn_add", function(){
			var ele = $(this).parent().find("[name='optionCnt']");
			var v = Number(ele.val());
			
			if(v > 0){
				ele.val(Number(v)+1);
				$("#viewOptionTotalPrice").html(viewOptionPrice());
			}
		});
		$("#optionProduct").on("focusout", " > dl [name='optionCnt']", function(){
			$("#viewOptionTotalPrice").html(viewOptionPrice());
		});
		var viewOptionPrice = function(){
			var totalPrice = 0;
			$("#optionProduct dl").each(function(i, e){
				var pCnt = Number($(e).find("[name='optionCnt']").val());
				var price = Number($(e).find("[name='optionCnt']").data("price"));
				totalPrice += pCnt * price;
			});

			return formatComma(totalPrice);
		};*/


		//장바구니 상품 수량 변경
/*		$(".cartCnt > .btn1").click(function(){
			var ele = $(this).parent().find("[name='optionCnt']");
			var v = ele.val();
			
			if(v > 1) ele.val(Number(v)-1);
		});
		$(".cartCnt > .btn2").click(function(){
			var ele = $(this).parent().find("[name='optionCnt']");
			var v = ele.val();
			
			if(v > 0) ele.val(Number(v)+1);
		});*/

		//장바구니 checkbox선택
/*		$("#cartList [name='cartChkAll']").click(function(){
			var c = $(this).prop("checked");
			if(c == true){
				$("#cartList [name='cartChk']").each(function(i, e){
					var d = $(e).prop("disabled");
					if(d == false) $(e).prop("checked", true);
				});
			}else{
				$("#cartList [name='cartChk']").prop("checked", false);
			}
		});*/

		//위시리스트 checkbox선택
/*		$("#wishList [name='wishChkAll']").click(function(){
			var c = $(this).prop("checked");
			if(c == true){
				$("#wishList [name='wishChk']").each(function(i, e){
					var d = $(e).prop("disabled");
					if(d == false) $(e).prop("checked", true);
				});
			}else{
				$("#wishList [name='wishChk']").prop("checked", false);
			}
		});*/

		//장바구니 / 위시리스트 옵션 선택 팝업
/*		$("#option_choice li > a").click(function(){
			$("#option_choice li > a").removeClass("select_option");
			$(this).addClass("select_option");
			
			$("#option_title").html($(this).data("option"));
			$("#option_img").attr("src", "/UploadFactory/product/"+$(this).data("img"));
			$("[name='optionIdx']").val($(this).data("idx"));
		});*/

		//상품 뷰 옵션 선택
/*		$("#view_option_choice li > a").click(function(){
			var soldout = $(this).data("soldout");
			$("#view_option_choice li > a").removeClass("select_option");

			if(soldout == "N") $(this).addClass("select_option");
			
			$("[name='P_PRICE']").val($(this).data("price"));
			$("#P_PRICE").html(formatComma($(this).data("price")) +"<span>원</span>");

			$.post("/shop/shop_ajax.asp", {
				pIdx : $(this).data("idx"),
				shopType : "proView"
			}, function(data){
				$("#productImg .s_thum").html(data);
			}).always(function(){
				var src = $("#productImg .s_thum a").eq(0).find("img").attr("src");
				$("#productImg .b_thum > span > img").attr("src", src);
			});

			//사은품 가져오기
			$.post("/shop/shop_ajax.asp", {
				pIdx : $(this).data("idx"),
				shopType : "giftInfo"
			}, function(data){
				$("#giftInfo").html(data);
			});
		});*/

		//상품 뷰 옵션 선택 (퀵뷰)
/*		$("#quickview_option_choice li > a").click(function(){
			var soldout = $(this).data("soldout");
			$("#quickview_option_choice li > a").removeClass("select_option");

			if(soldout == "N") $(this).addClass("select_option");
			
			$.post("/shop/shop_ajax.asp", {
				pIdx : $(this).data("idx"),
				shopType : "proView"
			}, function(data){
				$("#productImg").html(data);
			}).always(function(){
				var src = $("#productImg a").eq(0).find("img").attr("src");
				$("#proBigImg > img").attr("src", src);
			});
		});*/

		//상품 뷰 옵션 삭제
/*		$("#optionProduct").on("click", ".add_minus > .del", function(){
			var idx = $("#optionProduct .add_minus > .del").index(this);
			var pIdx = $(this).data("idx");
			var curPrice = Number($("#viewOptionTotalPrice").html().replace(",", ""));
			var optionCnt = $("#optionProduct [name='optionCnt']").eq(idx).val();
			var price = Number($("#optionProduct [name='optionCnt']").eq(idx).data("price"));
			var optionPrice = price * optionCnt;
			
			$("#viewOptionTotalPrice").html(formatComma(curPrice - optionPrice));
			$("#optionProduct dl").eq(idx).remove();
			$("[name='pIdx']").val($("[name='pIdx']").val().replace(","+pIdx, "").replace(pIdx+",", "").replace(pIdx, ""));
		});*/
		
		// 주문 페이지 =======================================================================================================================================

		//배송 메세지
/*		$("[name='RCV_MEMO_SELECT']").change(function(){
			var f = $("form[name='orderFrm']").find("[name='RCV_MEMO']");
			var v = $(this).val();
			var labelName = f.parents('span').prev('label');
			if (f.val() !== '') {
				if(v == '') labelName.removeClass('txt_out');
				else labelName.addClass('txt_out');
				f.val(v);
			}else{
				if(labelName.hasClass('txt_out')) {
					labelName.removeClass('txt_out');
				}else {
					labelName.addClass('txt_out');
					f.val(v);
				}
			}
		});*/

		//주문자와 동일 / 신규 배송지
/*		$("[name='receive']").change(function(){
			var v = $(this).val();
			if(v == "1"){
				$("[name='RCV_NAME']").val($("[name='ORD_NAME']").val());
				$("[name='RCV_TEL1']").val($("[name='ORD_TEL1']").val());
				$("[name='RCV_TEL2']").val($("[name='ORD_TEL2']").val());
				$("[name='RCV_TEL3']").val($("[name='ORD_TEL3']").val());
				$("[name='RCV_MOBILE1']").val($("[name='ORD_MOBILE1']").val());
				$("[name='RCV_MOBILE2']").val($("[name='ORD_MOBILE2']").val());
				$("[name='RCV_MOBILE3']").val($("[name='ORD_MOBILE3']").val());
				$("[name='RCV_POST']").val($("[name='ORD_POST']").val());
				$("[name='RCV_ADDR']").val($("[name='ORD_ADDR']").val());
				$("[name='RCV_ADDR2']").val($("[name='ORD_ADDR2']").val());

				$.post("/order/order_region_ajax.asp", {
					zipNo : $("[name='ORD_POST']").val().substring(0,3) +"-"+ $("[name='ORD_POST']").val().substring(3,6)
				}, function(data){
					var v = $("[name='I_TOTAL_DELIVERY_PRICE']").val();
					var dataType = data.split("|")[0];
					var dataPrice = Number(data.split("|")[1]);

					if(dataType == "O"){
						alert("도서산간지역은 배송비가 추가됩니다.");
						$("[name='I_RCV_REGION']").prop("checked", true);
						$("[name='I_RCV_REGION_FG']").val("Y");
						$("[name='I_RCV_REGION_PRICE']").val(dataPrice);
					}else{
						$("[name='I_RCV_REGION_FG']").val("N");
						$("[name='I_RCV_REGION_PRICE']").val("0");
					}
					$("[name='I_TOTAL_DELIVERY_PRICE']").val(Number(v) + dataPrice);
					$("#deliveryPrice").html(formatComma(Number(v) + dataPrice) +"원");

					$("[name='LGD_AMOUNT']").val(totalDisPrice());
					$("#lastPrice").html(formatComma(totalDisPrice()) +"원");
				});
			}else{
				$(".rcv_info").val("");
			}
		});*/

		//포인트 모두 사용
/*		$("[name='pointAllUse']").click(function(){
			var c = $(this).prop("checked");
			var myPoint = $(".myPoint").html().replace(",", "");
			if(c == true){
				$("[name='usePoint']").val(formatComma(myPoint));
				$("[name='usePoint']").focus();
			}else{
				$("[name='usePoint']").val("0");
				$("[name='usePoint']").focus();
			}
		});
		$("[name='usePoint']").focusout(function(){
			var point = Number($(this).val().replace(",", ""), 10);
			var lastPrice = $("[name='lastPrice']").val();
			var myPoint = $(".myPoint").html().replace(",", "");
			var strLen = $(this).val().replace(",", "").length;

			if(point > myPoint){
				alert("사용 가능한 포인트 한도가 초과 되었습니다.");
				$(this).val("0");
				$("[name='pointAllUse']").prop("checked", false);
				return;
			}

			if(point > lastPrice){
				alert("사용하신 포인트가 결재금액을 초과 하였습니다.");
				$(this).val("0");
				$("[name='pointAllUse']").prop("checked", false);
				return;
			}

			if(Number($(this).val().replace(",", "").substr(strLen-1, 1)) > 0){
				alert("10P 단위로 사용 가능합니다.");
				$(this).val("0");
				return;
			}

			if(totalDisPrice() == "over"){
				alert("할인금액이 결제금액을 초과 하였습니다.");
				$(this).val("0");
				return;
			}
		
			//쿠폰 사용 불가
			if(point > 0) $(".dis_coupon").prop("disabled", true);
			else $(".dis_coupon").prop("disabled", false);

			$("#useMyPoint").html(formatComma(point) +"원");
			$("#lastPrice").html(formatComma(totalDisPrice()) +"원");
			$("[name='I_USE_POINT']").val(point);
			$("[name='LGD_AMOUNT']").val(totalDisPrice());

			//결제금액이 0원 일때
			if(Number($("[name='LGD_AMOUNT']").val()) <= 0){
				$("#orderMethod").hide();
				return;
			}else{
				$("#orderMethod").show();
				return;
			}
		});
*/
		//쿠폰 사용(할인쿠폰)
/*		$("[name='I_COUPON_IDX']").change(function(){
			var price = $(this).find("option:selected").data("price");
			
			if(price == undefined) price = 0;

			if($(this).val() != ""){
				$(".dis_point").prop("disabled", true);
				$("[name='I_COUPON_PRO_IDX']").prop("disabled", true);
			}else{
				$(".dis_point").prop("disabled", false);
				$("[name='I_COUPON_PRO_IDX']").prop("disabled", false);
			}

			$("[name='LGD_AMOUNT']").val(totalDisPrice());
			$("#lastPrice").html(formatComma(totalDisPrice()) +"원");
			$("#useCoupon").html(formatComma(price) +"원");
			$("[name='I_COUPON_DIS_PRICE']").val(price);
		});*/

		//쿠폰 사용(상품할인쿠폰)
/*		$("[name='I_COUPON_PRO_IDX']").change(function(){
			var price = 0;
			var chk = false;
			
			$("[name='I_COUPON_PRO_IDX']").each(function(i, e){
				var c = $(e).prop("checked");

				if(c == true){
					chk = true;
					price += Number($(this).data("price"));
				}
			});

			if(chk == true){
				$(".dis_point").prop("disabled", true);
				$("[name='I_COUPON_IDX']").prop("disabled", true);
			}else{
				$(".dis_point").prop("disabled", false);
				$("[name='I_COUPON_IDX']").prop("disabled", false);
			}
			
			$("[name='LGD_AMOUNT']").val(totalDisPrice());
			$("#lastPrice").html(formatComma(totalDisPrice()) +"원");
			$("#useCoupon").html(formatComma(price) +"원");
			$("[name='I_COUPON_DIS_PRICE']").val(price);
		});*/
		
		//쿠폰 사용(무료배송쿠폰)
/*		$("[name='I_COUPON_DELIVERY_FG']").change(function(){
			var c = $(this).prop("checked");
			var v = $("[name='I_TOTAL_DELIVERY_PRICE']").val();
			
			if(totalDisPrice() == "over"){
				alert("할인금액이 결제금액을 초과 하였습니다.");
				$(this).prop("checked", false);
				return;
			}

			if(c == true){
				$("[name='I_TOTAL_DELIVERY_PRICE']").val(Number(v) - 2500);
				$("#deliveryPrice").html(formatComma(Number(v) - 2500) +"원");
			}else{
				$("[name='I_TOTAL_DELIVERY_PRICE']").val(Number(v) + 2500);
				$("#deliveryPrice").html(formatComma(Number(v) + 2500) +"원");
			}

			$("[name='LGD_AMOUNT']").val(totalDisPrice());
			$("#lastPrice").html(formatComma(totalDisPrice()) +"원");

			//결제금액이 0원 일때
			if(Number($("[name='LGD_AMOUNT']").val()) <= 0){
				$("#orderMethod").hide();
				return;
			}else{
				$("#orderMethod").show();
				return;
			}
		});*/

		//선물포장
/*		$("[name='I_PACKING_YN']").change(function(){
			$("[name='LGD_AMOUNT']").val(totalDisPrice());
			$("#lastPrice").html(formatComma(totalDisPrice()) +"원");
		});*/

		//군부대 발송
/*		$("[name='I_RCV_ARMY_FG']").change(function(){
			var v = $("[name='I_TOTAL_DELIVERY_PRICE']").val();
			var c = $(this).prop("checked");

			if(c == true){
				alert("군부대발송은 배송비가 추가됩니다.");
				$("[name='I_TOTAL_DELIVERY_PRICE']").val(Number(v) + 1500);
				$("#deliveryPrice").html(formatComma(Number(v) + 1500) +"원");
			}else{
				$("[name='I_TOTAL_DELIVERY_PRICE']").val(Number(v) - 1500);
				$("#deliveryPrice").html(formatComma(Number(v) - 1500) +"원");
			}

			$("[name='LGD_AMOUNT']").val(totalDisPrice());
			$("#lastPrice").html(formatComma(totalDisPrice()) +"원");
		});*/

	});

/*	function totalDisPrice(){
		var price = 0;
		var lastPrice = Number($("[name='lastPrice']").val());
		
		//포인트 사용
		if(Number($("[name='usePoint']").val().replace(",", "")) > 0) price -= Number($("[name='usePoint']").val().replace(",", ""));

		//금액할인 쿠폰
		if($("[name='I_COUPON_IDX'] option:selected").data("price") != undefined) price -= $("[name='I_COUPON_IDX'] option:selected").data("price");

		//상품할인 쿠폰
		$("[name='I_COUPON_PRO_IDX']").each(function(i, e){
			var c = $(e).prop("checked");

			if(c == true) price -= Number($(this).data("price"));
		});
		
		//무료배송 쿠폰
		if($("[name='I_COUPON_DELIVERY_FG']").prop("checked") == true) price -= 2500;

		//선물포장
		if($("[name='I_PACKING_YN']").prop("checked") == true) price += 1000;

		//군부대
		if($("[name='I_RCV_ARMY_FG']").prop("checked") == true) price += 1500;

		//도서산간
		if($("[name='I_RCV_REGION_FG']").val() == "Y") price += Number($("[name='I_RCV_REGION_PRICE']").val());
		
		//최종금액
		price = lastPrice + price;

		//할인 금액이 결재금액을 초과햇을시
		if(price < 0) return "over";
		else return price;
	}*/
	
	// SCRIPT FUNCTION =====================================================================================================================================

	//상품 뷰 옵션 추가
/*	function optionAdd(){
		var optionName = $("#view_option_choice .select_option").find("strong").html();
		var optionCnt = $("[name='pCnt']").val();
		var optionIdx = $("#view_option_choice .select_option").data("idx");
		var optionIdxArr = $("[name='pIdx']").val();
		var price = Number($("[name='P_PRICE']").val());
		var curPrice = Number($("#viewOptionTotalPrice").html().replace(",", ""));
		var optionHtml = '<dl>\
												<dt>'+ optionName +'<\/dt>\
												<dd>\
													<div class="add_minus">\
														<a class="btn_minus" href="javascript:void(0);"><img src="/images/btn/subtraction.gif" alt="수량 감소" \/><\/a>\
														<input type="text" name="optionCnt" value="'+ optionCnt +'" title="수량" data-price="'+ price +'" \/>\
														<a class="btn_add" href="javascript:void(0);"><img src="/images/btn/add_01.gif" alt="수량 증가" \/></a>\
														<a class="del" href="javascript:void(0);" data-idx="'+ optionIdx +'"><img src="/images/btn/close02.gif" alt="옵션삭제" \/><\/a>\
													<\/div>\
												<\/dd>\
											<\/dl>';

		if(optionName != undefined){
			if(optionIdxArr.indexOf(optionIdx) == -1){
				$("#optionProduct").append(optionHtml);
				$("#viewOptionTotalPrice").html(formatComma(price * optionCnt + curPrice));
				
				if(optionIdxArr == "") $("[name='pIdx']").val(optionIdx);
				else $("[name='pIdx']").val(optionIdxArr +","+ optionIdx);

				$("[name='pCnt']").val(1); //갯수 초기화
			}else{
				alert("이미 선택 하셨습니다.");
			}
		}else{
			alert("옵션을 선택해주세요.");
		}

	}
	
	//상품 뷰 바로구매
	function buyGo(idx, target){
		var pCnt = $("[name='pCnt']").val();

		if(pCnt == undefined) pCnt = 1;

		$.post("/shop/shop_ajax.asp", {
			pIdx : idx,
			pCnt : pCnt,
			shopType : "viewBuy", 
			cartGubun : "6"
		}, function(data){
			switch (data){
				case "O" : 
					if(target == "p") parent.location.href = "/order/order02_account.asp";
					else location.href = "/order/order02_account.asp";
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}

	//옵션 선택 바로구매
	function optionBuyGo(){
		var idx = $("[name='optionIdx']").val();

		$.post("/shop/shop_ajax.asp", {
			pIdx : idx,
			pCnt : 1,
			shopType : "viewBuy", 
			cartGubun : "6"
		}, function(data){
			switch (data){
				case "O" : parent.location.href = "/order/order02_account.asp";
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}

	//상품 뷰 선택 바로구매
	function buyChoiceGo(){
		var pIdx = $("[name='pIdx']").val();
		var cntArr = "";

		if(pIdx == ""){ alert("옵션을 선택해주세요."); return; }
		
		$("#optionProduct [name='optionCnt']").each(function(i, e){
			var c = $(e).val();
			cntArr += $(e).val() +",";
		});

		$.post("/shop/shop_ajax.asp", {
			pIdx : pIdx +",",
			pCnt : cntArr,
			shopType : "viewChoiceBuy", 
			cartGubun : "6"
		}, function(data){
			switch (data){
				case "O" : location.href = "/order/order02_account.asp";
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}
	
	//장바구니 선택 담기
	function cartChoiceGo(){
		var pIdx = $("[name='pIdx']").val();
		var cntArr = "";

		if(pIdx == ""){ alert("옵션을 선택해주세요."); return; }
		
		$("#optionProduct [name='optionCnt']").each(function(i, e){
			var c = $(e).val();
			cntArr += $(e).val() +",";
		});

		$.post("/shop/shop_ajax.asp", {
			pIdx : pIdx +",",
			pCnt : cntArr,
			shopType : "cartChoice", 
			cartGubun : "1"
		}, function(data){
			switch (data){
				case "O" : $.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/view_cart.asp" });
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
		
		//장바구니 카운트
		cartTotalCount();
	}

	//장바구니 담기
	function cartGo(idx, target){
		var pCnt = $("[name='pCnt']").val();

		if(pCnt == undefined) pCnt = 1;

		$.post("/shop/shop_ajax.asp", {
			pIdx : idx,
			pCnt : pCnt,
			shopType : "cart", 
			cartGubun : "1"
		}, function(data){
			switch (data){
				case "O" : 
					if(target == "p") parent.$.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/view_cart.asp" });
					else $.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/view_cart.asp" });
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});

		//장바구니 카운트
		cartTotalCount();
	}

	//장바구니 상품 수량 변경
	function proCntEdit(idx, num){
		var pCnt = $("[name='optionCnt']").eq(num).val();

		$.post("/shop/shop_ajax.asp", {
			pIdx : idx,
			pCnt : pCnt,
			shopType : "cart", 
			cartGubun : "3"
		}, function(data){
			switch (data){
				case "O" : location.reload();
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}

	//장바구니 바로구매 
	function cartBuy(idx){
		$.post("/shop/shop_ajax.asp", {
			pIdx : idx,
			pCnt : 1,
			shopType : "viewBuy", 
			cartGubun : "5"
		}, function(data){
			switch (data){
				case "O" : location.href = "/order/order02_account.asp";
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}

	//장바구니 위시리스트
	function cartWishlist(idx){
		$.post("/shop/shop_ajax.asp", {
			pIdx : idx,
			shopType : "wishlist", 
			cartGubun : "1"
		}, function(data){
			switch (data){
				case "O" : $.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/view_wish.asp" });
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}

	//장바구니 개별 삭제
	function cartDel(idx){
		if(confirm("정말 삭제 하시겠습니까?")){
			$.post("/shop/shop_ajax.asp", {
				pIdx : idx,
				pCnt : 1,
				shopType : "cart", 
				cartGubun : "2"
			}, function(data){
				switch (data){
					case "O" : location.reload();
					break;
					case "X" : alert("잘못된 접근입니다.");
					break;
				}
			});
		}
	}

	//장바구니 선택 삭제
	function cartChoiceDel(){
		var idxArr = "";
		
		$("#cartList [name='cartChk']").each(function(i, e){
			var c = $(e).prop("checked");
			if(c == true){
				idxArr += $(e).val() +",";
			}
		});
		
		if(idxArr == ""){
			alert("한개 이상 선택해주세요.");
			return;
		}

		if(confirm("정말 삭제 하시겠습니까?")){
			$.post("/shop/shop_ajax.asp", {
				pIdx : idxArr,
				pCnt : 1,
				shopType : "cartChoice", 
				cartGubun : "2"
			}, function(data){
				switch (data){
					case "O" : location.reload();
					break;
					case "X" : alert("잘못된 접근입니다.");
					break;
				}
			});
		}
	}

	//장바구니 선택 구매
	function cartChoiceBuy(){
		var idxArr = "", cntArr = "";

		$("#cartList [name='cartChk']").each(function(i, e){
			var c = $(e).prop("checked");
			if(c == true){
				idxArr += $(e).val() +",";
				cntArr += "1,";
			}
		});

		if(idxArr == ""){
			alert("한개 이상 선택해주세요.");
			return;
		}

		$.post("/shop/shop_ajax.asp", {
			pIdx : idxArr,
			pCnt : cntArr,
			shopType : "viewChoiceBuy", 
			cartGubun : "5"
		}, function(data){
			switch (data){
				case "O" : location.href = "/order/order02_account.asp";
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}

	//장바구니 전체상품 구매
	function cartAllBuy(){
		var idxArr = "", cntArr = "";

		$("#cartList [name='cartChk']").each(function(i, e){
			idxArr += $(e).val() +",";
			cntArr += "1,";
		});

		$.post("/shop/shop_ajax.asp", {
			pIdx : idxArr,
			pCnt : cntArr,
			shopType : "viewChoiceBuy", 
			cartGubun : "5"
		}, function(data){
			switch (data){
				case "O" : location.href = "/order/order02_account.asp";
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}

	//장바구니 선택 위시리스트 담기
	function cartChoiceWish(){
		var idxArr = "";

		$("#cartList [name='cartChk']").each(function(i, e){
			var c = $(e).prop("checked");
			if(c == true){
				idxArr += $(e).val() +",";
			}
		});

		if(idxArr == ""){
			alert("한개 이상 선택해주세요.");
			return;
		}

		$.post("/shop/shop_ajax.asp", {
			pIdx : idxArr,
			shopType : "wishlistChoice", 
			cartGubun : "1"
		}, function(data){
			switch (data){
				case "O" : $.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/view_wish.asp" });
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}
	
	//장바구니 옵션 변경 팝업
	function optionEditPop(idx){
		$.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/change_option.asp?P_IDX="+idx });
	}

	//장바구니 옵션 변경
	function optionEdit(idx){
		var opIdx = $("[name='optionIdx']").val();

		$.post("/shop/shop_ajax.asp", {
			pIdx : opIdx,
			pCnt : 1,
			oriIdx : idx,
			shopType : "cart", 
			cartGubun : "4"
		}, function(data){
			switch (data){
				case "O" : parent.location.reload();
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}

	//위시리스트 담기
	function wishlistGo(idx, target){
		$.post("/shop/shop_ajax.asp", {
			pIdx : idx,
			shopType : "wishlist", 
			cartGubun : "1"
		}, function(data){
			switch (data){
				case "O" : 
					if(target == "p") parent.$.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/view_wish.asp" });
					else $.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/view_wish.asp" });
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});
	}
	
	//위시리스트 바로구매
	function wishBuy(idx, option){
		if(option == "N"){
			$.post("/shop/shop_ajax.asp", {
				pIdx : idx,
				pCnt : 1,
				shopType : "viewBuy", 
				cartGubun : "6"
			}, function(data){
				switch (data){
					case "O" : location.href = "/order/order02_account.asp";
					break;
					case "X" : alert("잘못된 접근입니다.");
					break;
				}
			});
		}else{
			$.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/list_option.asp?P_IDX="+idx });
		}
	}

	//위시리스트 장바구니 담기 팝업
	function wishCart(idx, option){
		if(option == "N"){
			$.post("/shop/shop_ajax.asp", {
				pIdx : idx,
				pCnt : 1,
				shopType : "cart", 
				cartGubun : "1"
			}, function(data){
				switch (data){
					case "O" : parent.$.smartPop.close(); parent.$.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/view_cart.asp" });
					break;
					case "X" : alert("잘못된 접근입니다.");
					break;
				}
			});
		}else{
			$.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/option_choice.asp?P_IDX="+idx });
		}

		//장바구니 카운트
		cartTotalCount();
	}
	
	//위시리스트 장바구니 담기
	function optionChoice(){
		var opIdx = $("[name='optionIdx']").val();

		$.post("/shop/shop_ajax.asp", {
			pIdx : opIdx,
			pCnt : 1,
			shopType : "cart", 
			cartGubun : "1"
		}, function(data){
			switch (data){
				case "O" : parent.$.smartPop.close(); parent.$.smartPop.open({ background: "black", width: 511, height: 210, url: "/popup/view_cart.asp" });
				break;
				case "X" : alert("잘못된 접근입니다.");
				break;
			}
		});

		//장바구니 카운트
		cartTotalCount();
	}

	//위시리스트 개별 삭제
	function wishDel(idx){
		if(confirm("정말 삭제 하시겠습니까?")){
			$.post("/shop/shop_ajax.asp", {
				pIdx : idx,
				shopType : "wishlist", 
				cartGubun : "2"
			}, function(data){
				switch (data){
					case "O" : location.reload();
					break;
					case "X" : alert("잘못된 접근입니다.");
					break;
				}
			});
		}
	}

	//위시리스트 선택 삭제
	function wishChoiceDel(){
		var idxArr = "";
		
		$("#wishList [name='wishChk']").each(function(i, e){
			var c = $(e).prop("checked");
			if(c == true){
				idxArr += $(e).val() +",";
			}
		});
		
		if(idxArr == ""){
			alert("한개 이상 선택해주세요.");
			return;
		}

		if(confirm("정말 삭제 하시겠습니까?")){
			$.post("/shop/shop_ajax.asp", {
				pIdx : idxArr,
				shopType : "wishlistChoice", 
				cartGubun : "2"
			}, function(data){
				switch (data){
					case "O" : location.reload();
					break;
					case "X" : alert("잘못된 접근입니다.");
					break;
				}
			});
		}
	}


	//장바구니 버튼 (퀵뷰)
	function quickCart(idx){
		alert('옵션을 선택해 주세요.'); 
		parent.location.href="/shop/view.asp?P_IDX="+ idx;
	}
	
	//장바구니 카운트
	function cartTotalCount(){
		$.post("/shop/shop_ajax.asp", {
			shopType : "cartCount"
		}, function(data){
			$(".cartCount").html(data);
		});
	}*/