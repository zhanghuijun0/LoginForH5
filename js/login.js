//check input
function checkPhone(phone){
	var telReg = !!phone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/);
	return telReg;
}

/**
* 登陆
*/
function login() {
	var phone=$("#phone").val();
	var code =$("#code").val();//验证码
		if (checkPhone(phone)==false){
			alert('请输入正确的手机号码');
			return;
		}
		if(code.length<=0){
			alert("请输入密码");
			return;
		}
		var url = "http://119.29.137.98/Api/Passenger/login";
		$.ajax({
			  type: 'POST',
			  url: url,
			  timeout:100000,
			  data:$('#bindForm').serialize(),
			  dataType: 'json',
			  success: function(data){
			  var list = data.data;
			  if(data.ret=="0"){
	 			 //登录成功
	 			 setCookie("xdg_token",data.token);
	 			 setCookie("xdg_name",list.name);
	 			 setCookie("xdg_company_name",list.company_name);
	 			 setCookie("xdg_model_id",data.model_id);
	 			 setCookie("xdg_phone",phone);
	 			 location.href='call.html';
	 			}else{
	 				alert("账号或密码错误");
	 			}
			  },
			  error: function(xhr, type){
			  	alert('网络超时，请检查网络');
			  }
			});
}

function logout(){
	delCookie("xdg_token");
	delCookie("xdg_name");
	delCookie("xdg_company_name");
	delCookie("xdg_model_id");
	delCookie("xdg_phone");
	delCookie("startCity");
	delCookie("startAddr");
	delCookie("startLat");
	delCookie("startLng");

	delCookie("xdg_locCityName");//cookie保存城市名称
	delCookie("endCity");
	delCookie("endAddr");
	delCookie("endLat");
	delCookie("endLng");

	$("header em").text("乘客登陆");
	$(".input-box").show();
	$(".personal-info").hide();
}

function ifLogin() {
	var token = getCookie("xdg_token");
	if (token) {
		$("header em").text("乘客信息");
		$(".input-box").hide();
		$(".personal-info").show();
	}
}