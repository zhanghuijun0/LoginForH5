/**********(OrderApply/applyDetail)参数列表***********/
var allot_id ;
var allot_number ;
var allot_time;
var start_time;
var end_time;
var go_time;
var arrival_time;
var status;
var car_id;
var driver_id;
var wait_start_time;
var wait_time;
var odometer;
var long_distance;
var long_distance_fee;
var use_time;
var money;
var mileage;
var parking_fee;
var tolls;
var low_fee;
var wait_fee;
var night_fee;
var other_fee;
var other_fee_desc;
var low_speed_time;
var apply_id;
var apply_number;
var type;
var use_way;
var use_type;
var from_place;
var to_place;
var apply_time;
var pid;
var p_company;
var from_lon;
var from_lat;
var from_address;
var to_address;
var to_lon;
var to_lat;
var p_name;
var p_count;
var p_phone;
var f_odometer;
var f_hour;
var f_money;
var f_subsist;
var flight_number;
var subsist;
var model_id;
var through_id;
var is_go_back;
var car_model_name;
var car_through_name;
var comment;
var driver_level;
var service_level;
var photo_url;
var car_license_plate;
var brand;
var driver_real_name;
var driver_phone;
var driver_photo_url;
var star_level;
var driver_allot_no;
var driver_lon;
var driver_lat;
/**********(OrderApply/applyDetail)END***********/



var applyId ;
var token ;
window.onload = getApplyId();
function getApplyId() {
	applyId = getUrlParam("allotId");
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

//接口【OrderApply/applyDetail】的订单详情
// http://119.29.137.98:80/Api/OrderApply/allotDetail
// allot_id=1243&token=b34571d236861114ecadac640f0ef9f7
function getOrderDetails(token,allot_id) {
	var url = "http://119.29.137.98:80/Api/OrderApply/allotDetail?";
	var prama = "allot_id="+allot_id+"&token="+token;
	console.log(url+prama);
	$.ajax({
		type: 'POST',
		url: url,
		timeout: 10000,
		data: prama,
		dataType: 'json',
		success: function(data){
			if (data.ret=="0") {
				get_param(data);
				console.log("success");
				var status = data.data.status;
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

//获得参数
function get_param (data) {
	varot_id = data.data.allot_id; //"1241", 
	varot_number = data.data.allot_number; //": "D20160401115148449", 
    allot_time=data.data.allot_time ;  // "2016-04-01 11:51:57", 
    start_time=data.data.start_time ;  // "2016-04-01 00:00:00", 
    end_time=data.data.end_time ;  // "2016-04-01 00:00:00", 
    go_time=data.data.go_time ;  // "2016-04-01 18:43:15", 
    arrival_time=data.data.arrival_time ;  // "2016-04-01 18:44:29", 
    status=data.data.status ;  // "6", 
    car_id=data.data.car_id ;  // "134", 
    driver_id=data.data.driver_id ;  // "205", 
    wait_start_time=data.data.wait_start_time ;  // 1459507389, 
    wait_time=data.data.wait_time ;  // 0.1, 
    odometer=data.data.odometer ;  // "0.00", 
    long_distance=data.data.long_distance ;  // 0, 
    long_distance_fee=data.data.long_distance_fee ;  // "0.00", 
    use_time=data.data.use_time ;  // "74.00", 
    money=data.data.money ;  // "5.80", 
    mileage=data.data.mileage ;  // "5.00", 
    parking_fee=data.data.parking_fee ;  // "0.00", 
    tolls=data.data.tolls ;  // "0.00", 
    low_fee=data.data.low_fee ;  // "0.80", 
    wait_fee=data.data.wait_fee ;  // "0.00", 
    night_fee=data.data.night_fee ;  // "0.00", 
    other_fee=data.data.other_fee ;  // "0.00", 
    other_fee_desc=data.data.other_fee_desc ;  // "", 
    low_speed_time=data.data.low_speed_time ;  // "75", 
    apply_id=data.data.apply_id ;  // "3004", 
    apply_number=data.data.apply_number ;  // "P20160401115181189", 
    type=data.data.type ;  // "1", 
    use_way=data.data.use_way ;  // "1", 
    use_type=data.data.use_type ;  // "1", 
    from_place=data.data.from_place ;  // "世界之窗", 
    to_place=data.data.to_place ;  // "科发路", 
    apply_time=data.data.apply_time ;  // "2016-04-01 11:51:46", 
    pid=data.data.pid ;  // "219", 
    p_company=data.data.p_company ;  // "深圳小滴哥公司", 
    from_lon=data.data.from_lon ;  // "113.98044", 
    from_lat=data.data.from_lat ;  // "22.54229", 
    from_address=data.data.from_address ;  // "深圳市", 
    to_address=data.data.to_address ;  // "深圳市", 
    to_lon=data.data.to_lon ;  // "113.95776", 
    to_lat=data.data.to_lat ;  // "22.54897", 
    p_name=data.data.p_name ;  // "小张", 
    p_count=data.data.p_count ;  // "1", 
    p_phone=data.data.p_phone ;  // "17080951305", 
    f_odometer=data.data.f_odometer ;  // "0.00", 
    f_hour=data.data.f_hour ;  // "0.00", 
    f_money=data.data.f_money ;  // "0.00", 
    f_subsist=data.data.f_subsist ;  // "0.00", 
    flight_number=data.data.flight_number ;  // "", 
    subsist=data.data.subsist ;  // "0.00", 
    model_id=data.data.model_id ;  // "65", 
    through_id=data.data.through_id ;  // "0", 
    is_go_back=data.data.is_go_back ;  // "0", 
    car_model_name=data.data.car_model_name ;  // "深圳测试车型", 
    car_through_name=data.data.car_through_name ;  // "", 
    comment=data.data.comment ;  // "经历了", 
    driver_level=data.data.driver_level ;  // "5", 
    service_level=data.data.service_level ;  // "5", 
    photo_url=data.data.photo_url ;  // "/Uploads/2016/0324/56f3419867735.png", 
    car_license_plate=data.data.car_license_plate ;  // "京A555", 
    brand=data.data.brand ;  // "奥克斯  瑞途", 
    driver_real_name=data.data.driver_real_name ;  // "小张_司机", 
    driver_phone=data.data.driver_phone ;  // "17080951305", 
    driver_photo_url=data.data.driver_photo_url ;  // "", 
    star_level=data.data.star_level ;  // "5.00", 
    driver_allot_no=data.data.driver_allot_no;  // "4", 
    driver_lon=data.data.driver_lon ;  // 113.953776, 
    driver_lat=data.data.driver_lat ;  // 22.552041
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
		finishing(data);
		break;
		case '3':
		document.write("3 订单取消");
		finishing(data);
		break;
		case '4':
		document.write("4待支付");
		finishing(data);
		break;
		case '5':
		document.write("5待评价");
		finishing(data);
		break;
		case '6':
		document.write("6 已结束");
		finishing(data);
		break;
		case '7':
		document.write("7 订单中断");
		break;
		default:
		document.write("其他");
		break;
	}
}
// 0处理中
function processing(data) {
	
}
// 1已派单 
function ordering(data) {
	
}
// 2进行中
function running(data) {
	
}
// 3 订单取消
function processing(data) {
	
}
 // 4待支付
function processing(data) {
	
}
 // 5待评价
function processing(data) {
	
}
// 7 订单中断
function processing(data) {
	
}
// 6 已结束
function finishing(data) {

	document.write("<hr>");
	/*乘客信息*/
    document.write(p_name+"<br>");
    document.write(p_phone+"<br>");
    document.write(start_time+"<br>");
	
	/*地址信息*/
	document.write("<hr>");
    document.write(from_place+"<br>");
    document.write(to_place+"<br>");

    /*司机信息*/
    document.write("<hr>");
    document.write(driver_photo_url+"<br>");
	document.write(driver_real_name+"<br>");
	document.write(driver_phone+"<br>");
	document.write(star_level+"<br>");
    document.write(driver_allot_no+"<br>");
    document.write(brand+"<br>");
    document.write(car_license_plate+"<br>");

    /*里程及附加费用信息*/
    document.write("<hr>");
    document.write(odometer+"<br>");
    document.write(parking_fee+"<br>");
    document.write(tolls+"<br>");
    document.write(other_fee+"<br>");
    document.write(other_fee_desc+"<br>");


	document.write("<hr>");
	document.write(driver_level+"<br>");
	document.write(comment+"<br>");    
}

/*
*apply_id	申请单ID	int
*model_Id	车型ID	int
*reservation	是否是预约单	int
*onlyQueryDriver	是否只查询附件司机信息，1表示查询。	int
*/
// http://119.29.137.98:80/Api/OrderApply/doAutoAllot
//apply_id=3006&model_Id=65&reservation=0&token=452e14ca77e4385ab6372ed1705e3a39
function try_again (apply_id,model_Id,reservation) {
	var url = "http://119.29.137.98:80/Api/OrderApply/doAutoAllot/?";
	var prama = "apply_id="+applyId+"&model_Id"+model_Id+"&reservation="+reservation+"&token="+token;
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
				document.write("status:"+status+"<br>");
				getDateil(status,data);
			}else if(data.ret=="1"){
				alert("附近没有司机");
			}else if(data.ret=="-1"){
				alert("申请单ID不能为为空");
			}else if(data.ret=="-2"){
				alert("订单状态不正确");
			}else{
				console.log(data.ret);
			}
		},
		error: function(xhr, type){
			alert('网络超时，请检查网络');
		}
	});
}

//付款
// http://119.29.137.98:80/Api/OrderApply/orderPay
// apply_id=3005&token=6732242f9db4cea8645dadb1cfec227f
function pay_order (argument) {
	var url = "http://119.29.137.98:80/Api/OrderApply/orderPay/?";
	var prama = "apply_id="+apply_id+"&token="+token;
	console.log(url+prama);
	$.ajax({
		type: 'POST',
		url: url,
		timeout: 10000,
		data: prama,
		dataType: 'json',
		success: function(data){
			if (data.ret=="0") {
				alert("付款成功！")
			}else if(data.ret=="-1"){
				alert("订单号不能为空");
			}else if(data.ret=="-10"){
				alert("支付失败");
			}else{
				console.log(data.ret);
			}
		},
		error: function(xhr, type){
			alert('网络超时，请检查网络');
		}
	});
}

/*
*apply_id	申请单ID	int
*service_level	服务评价等级1-5	int
*driver_level	司机评价等级1-5	int
*comment	评论文字	string
*/
//评论
// http://119.29.137.98:80/Api/OrderApply/pAppraisal
// apply_id=3005&service_level=5&driver_level=2&comment=%E8%AF%84%E4%BB%B7%E4%B8%8D%E6%BB%A1%E6%84%8F&token=6732242f9db4cea8645dadb1cfec227f
function set_comments (argument) {
	var url = "http://119.29.137.98:80/Api/OrderApply/doAutoAllot/?";
	var prama = "apply_id="+apply_id+"&service_level="+service_level+"&driver_level="+driver_level+"&comment="+comment+"&token="+token;
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
				document.write("status:"+status+"<br>");
				getDateil(status,data);
			}else if(data.ret=="-1"){
				alert("申请单ID不能为为空");
			}else if(data.ret=="-2"){
				alert("申请单不是待评价状态");
			}else if(data.ret=="-3"){
				alert("	评价等级不能为空");
			}else if(data.ret=="-4"){
				alert("评价等级必须1-5");
			}else{
				console.log(data.ret);
			}
		},
		error: function(xhr, type){
			alert('网络超时，请检查网络');
		}
	});
}