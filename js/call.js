var token = getCookie("xdg_token");
var startCity = getCookie("startCity");
var startAddr = getCookie("startAddr");
var startlng = getCookie("startLng");
var startlat = getCookie("startLat");

var endCity = getCookie("endCity");
var endAddr = getCookie("endAddr");
var endlng = getCookie("endLng");
var endlat = getCookie("endLat");

/**
* 定位，存储经纬度，位置到cookies
*/
function getLocation(){
	
	if (startAddr != "null"&&startAddr !=null) {
		$(".wrapper-from-hook span").html(startCity+" "+startAddr);//设置text
		// console.log("start:"+startCity+","+startAddr+","+startlat+","+startlng);
	}
	if (endAddr != "null"&&endAddr !=null) {
		// console.log("end:"+endCity+","+endAddr+","+endlat+","+endlng);
		$(".wrapper-to-hook span").html(endCity+" "+endAddr);//设置text	
	}
	if (startAddr != "null"&&startAddr !=null){
		console.log("return");
		return;
	}
	if(navigator.geolocation) {
		// 百度地图API功能
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				// alert(r.point.lng+","+r.point.lat);
				var point = new BMap.Point(r.point.lng,r.point.lat);
				geoAddr(point);
				setCookie("startCity",startCity);
				setCookie("startAddr",startAddr);
				setCookie("startLat",r.point.lat);
				setCookie("startLng",r.point.lng);
			}else{
				alert('failed'+this.getStatus());
			}
		},{enableHighAccuracy: true});
	}
}

//坐标转地址
function geoAddr(pt) {
	var myGeo = new BMap.Geocoder();
	myGeo.getLocation(pt,
	function(rs) {
		var addComp = rs.addressComponents;
		var addr = addComp.district + addComp.street + addComp.streetNumber;
		var locCityName = addComp.city;
		setCookie("xdg_locCityName", locCityName);//cookie保存城市名称
		$(".wrapper-from-hook span").html(addr);//设置text
	});
}

//用车
function userCar() {
		if (!token) {
			alert("你还未登陆呢");
			location.href='login.html';
			return;
		}
		var type = 1;
		var reservation = 0;
		var start_time = new Date().toLocaleString();
		var end_time = new Date().toLocaleString();
		var p_name = getCookie("xdg_name");
		var p_phone = getCookie("xdg_phone");
		var model_id = getCookie("xdg_model_id");
		var from_address = getCookie("startCity");
		var from_place = getCookie("startAddr");
		var from_lat = getCookie("startLat");
		var from_lon = getCookie("startLng");
		var to_address = getCookie("endCity");
		var to_place = getCookie("endAddr");
		var to_lat = getCookie("endLat");
		var to_lon = getCookie("endLng");

		var url = "http://119.29.137.98/Api/OrderApply/useCar";
		var prama = "type="+type+"&remark='H5'&p_count=1&f_hour=0"+
			  "&reservation="+reservation+
			  "&token="+token+
			  "&start_time="+start_time+
			  "&end_time="+end_time+
			  "&p_name="+p_name+
			  "&p_phone="+p_phone+
			  "&from_address="+from_address+
			  "&from_place="+from_place+
			  "&from_lat="+from_lat+
			  "&from_lon="+from_lon+
			  "&to_address="+to_address+
			  "&to_place="+to_place+
			  "&to_lat="+to_lat+
			  "&to_lon="+to_lon+
			  "&model_id="+model_id;
		$.ajax({
			  type: 'POST',
			  url: url,
			  timeout:100000,
			  data:prama,
			  dataType: 'json',
			  success: function(data){
			  	// console.log("订单参数："+prama);
				if(data.ret=="0"){
					var apllyId = data.apply_id;
					var apply_number=data.apply_number;
					var get_driver = data.get_driver;
					var param = "apply_id="+apllyId+"&token="+token;
					applyDetail(param);//申请单详情
					// console.log("已派单。。。");
				}else{
					var desc="";
					switch(data.ret){
						case -30:
						desc = "已有在调度或运行的即时订单";
						break;
						case -29:
						desc = "含有未支付的订单";
						break;
						case -28:
						desc = "余额不足";
						break;
						case -11:
						desc = "目的地不能为空";
						break;
						case -10:
						desc = "出发地不能为空";
						break;
						case -1:
						desc = "账户余额不足";
						break;
						case -2:
						desc = "乘客姓名不能为空";
						break;
						default:
						desc = "其他";
						break;
					}
					alert(desc);
					// console.log(desc+"status:"+data.ret);
				}
			},
			error: function(xhr, type){
			  	alert('网络超时，请检查网络');
			}
			});
}


function applyDetail(param) {
	var url = "http://119.29.137.98/Api/OrderApply/applyDetail";
	$.ajax({
			type: 'POST',
			url: url,
			timeout:100000,
			data:param,
				dataType: 'json',
				success: function(data){
					if(data.ret=="0"){
						alert("叫车成功");
					}else{
						alert("叫车失败");
						// console.log("申请单失败（applyDetail）status:"+data.ret);
					}
				},
		});
}


/**
* 附近司机的数量
*/
function getNearByDriver() {
	url = "http://119.29.137.98/Api/Passenger/queryNearByDrivers";
	var param = "model_id="+getCookie("xdg_model_id")+"&lat="+startlat+"&lon="+startlng+"&token="+getCookie("xdg_token");
	console.log("附近司机的数量："+param);
	$.ajax({
		type: 'POST',
		url: url,
		timeout:100000,
		data:param,
			dataType: 'json',
			success: function(data){
				if(data.ret=="0"){
					$("#footer").text("附近有"+data.driver_num+"位司机");
				}else{
					alert("附近司机的数量，status:"+data.ret);
				}
			},
	});
}


