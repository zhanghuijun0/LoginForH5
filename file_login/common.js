var wxB = {};
var browser={  
    versions:function(){   
     	var u = navigator.userAgent, app = navigator.appVersion;   
     	return {//移动终端浏览器版本信息   
	       trident: u.indexOf('Trident') > -1, //IE内核  
	       presto: u.indexOf('Presto') > -1, //opera内核  
	       webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
	       gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
	       mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
	       ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
	       android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
	       iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器  
	       iPad: u.indexOf('iPad') > -1, //是否iPad    
	       webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
	      };  
	      }(),  
	      language:(navigator.browserLanguage || navigator.language).toLowerCase()  
	}  
  	if(browser.versions.mobile || browser.versions.ios || browser.versions.android ||   
    browser.versions.iPhone ){	   
    	var myHTML = document.querySelector("html"),
		myWidth = window.innerWidth;
		var font = 	3 * myWidth / 78;
		if (font > 24) {
			font = 24
		};
		myHTML.style.fontSize = font + 'px';
		window.onresize = function() {
			var myHTML = document.querySelector("html"),
			myWidth = window.innerWidth;
			var font = 	3 * myWidth / 78;
			if (font > 24) {
				font = 24
			};
			myHTML.style.fontSize = font + 'px';
	}
}

wxB.swipeTouch = function(target,parent,leftCon){
	var startPosition, endPosition, deltaX, deltaY, moveLength;  
	// document.addEventListener('touchmove', function (event) {
	//     event.preventDefault();
	// }, false);
    $(target).bind('touchstart', function(e){  
        var touch = e.touches[0];  
        startPosition = {  
            x: touch.pageX,  
            y: touch.pageY  
        }  
    }) .bind('touchmove', function(e){  
        var touch = e.touches[0];  
        endPosition = {  
            x: touch.pageX,  
            y: touch.pageY  
        };  
        deltaX = endPosition.x - startPosition.x;  
        deltaY = endPosition.y - startPosition.y;  
     	if (Math.abs(deltaX) > Math.abs(deltaY)) {
            event.preventDefault();
        }
        moveLength = Math.sqrt(Math.pow(Math.abs(deltaX), 2) + Math.pow(Math.abs(deltaY), 2));  
    }).bind('touchend', function(e){  
        if(deltaX < 0) { // 向左划动
			$(target).find(leftCon).removeClass();
			$(this).find(leftCon).addClass('hisSwipeLeft');
		}
        // 向右划动  
         if(deltaX > 0){
			$(target).find(leftCon).removeClass();
			$(this).find(leftCon).addClass('hisSwipeRight');
   		 }

    });  
	// 历史联系人删除
	//$(parent).find('.del').on("touchend", function () {
	 	//$(this).parent().remove();
	 	//return false;
    //});

}

$(function(){
	// 订单完成----点击费用详情
	$('.payment-box .cost').tap(function(){
		$(this).hide().siblings('ul').show();
	});

	// 订单完成----点击评价星级
/*	$('.evaluate-box .starts dd').tap(function(){
		num = $(this).index();
		$('.evaluate-box .starts dd').removeClass('on');
		if(num>0) {
			for(var i = 0;i<num;i++) {
				$('.evaluate-box .starts dd').eq(i).addClass('on');
			}
		}
	});
*/
	// 勾选是否同意契约条款
	$('.bottom-tips .check-i').tap(function(){
		$(this).toggleClass('on');
	});

});
function setCookie(c_name,value,expiredays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate()+expiredays);
document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

//取回cookie
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=");
  if (c_start!=-1)
	{ 
	c_start=c_start + c_name.length+1 ;
	c_end=document.cookie.indexOf(";",c_start);
	if (c_end==-1) c_end=document.cookie.length;
	return unescape(document.cookie.substring(c_start,c_end));
	} 
  }
return "";
}