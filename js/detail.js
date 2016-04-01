var applyId ;
var token ;
window.onload = getApplyId();
function getApplyId() {
	applyId = getUrlParam("applyid");
	token =getUrlParam("token");
	console.log("applyId:"+applyId+",token:"+token);
	getOrderDetails(token,applyId);
}

//获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}

function getOrderDetails(token,applyId) {
	var url = "http://119.29.137.98:80/Api/OrderApply/applyDetail?";
	var prama = "apply_id="+applyId+"&token="+token;
	console.log(url+prama);
	$.ajax({
		type: 'POST',
		url: url,
		timeout: 10000,
		data: prama,
		dataType: 'json',
		success: function(data){
			if (data.ret=="0") {
				console.log("success");
				var status = data.data.status;
				document.write("status:"+status);
				getDateil(status,data);
			}else{
				console.log(data.ret);
			}
		},
		error: function(xhr, type){
			alert('网络超时，请检查网络');
		}
	});
}

/**
*0处理中、1已派单、 2进行中、3 订单取消、 4待支付 、5待评价、6 已结束、 7订单中断
*/
function getDateil(status,data) {
	switch(status){
		case '0':
		document.write("0处理中");
		break;
		case '1':
		document.write("1已派单");
		break;
		case '2':
		document.write("2进行中");
		break;
		case '3':
		document.write("3 订单取消");
		break;
		case '4':
		document.write("4待支付");
		break;
		case '5':
		document.write("5待评价");
		break;
		case '6':
		document.write("6 已结束");
		break;
		case '7':
		document.write("7 订单中断");
		break;
		default:
		document.write("其他");
		break;
	}
}
//
function processing(data) {
	
}
function ordering(data) {
	
}
function running(data) {
	
}
function processing(data) {
	
}
function processing(data) {
	
}
function processing(data) {
	
}
function processing(data) {
	
}
function processing(data) {
	
}