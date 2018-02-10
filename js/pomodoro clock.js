//定义全局变量
var       m = $("#session"),
          n = $("#break"),
    minutes = $(".minutes"),
    seconds = $(".seconds");
var i, u, y,int, ont;
//初始化
$(document).ready(function(){
	i=25;
	u=5;
	y=1;
	m.html(i);
	n.html(u);
	minutes.html(i);
	seconds.html("00");
})
function display(){
    m.html(i);
	n.html(u);
	minutes.html(i);
}
$("button").eq(0).click(function(){
    i = i + 1;
    display();
});
$("button").eq(1).click(function(){
	i = i - 1;
	if(i <= 1){
		i = 1;
	}
	display();
})
$("button").eq(2).click(function(){
	u = u + 1;
	display();
})
$("button").eq(3).click(function(){
	u = u - 1;
	if(u <= 1){
		u = 1;
	}
	display();
})
//倒计时函数
function startclock() {	   
	if( y == 0){
		i =  i - 1;
		if(i == 0){
            minutes.html("00");
            y = 60
            y = y -1 ;
			seconds.html(y);
		}
		else{
			minutes.html(i);
            y = 60
            y = y -1 ;
			seconds.html(y);
		}
	}
	else if(y <= 10 && y > 1){
		y = y -1 ;
		seconds.html("0"+y);
	}
	else if(y == 1) {
		y = y -1 ;
		seconds.html("00")
	}
	else {
		y = y - 1;
		seconds.html(y);
	}   
}
//背景的变化
//
function none() {
	$(".control_time").css("display","none");
	$(".option").css("display","none");
	$(".clock_reset").css("display","block");
}
function show() {
	$(".control_time").css("display","inline");
	$(".option").css("display","inline");
	$(".clock_reset").css("display","none");
}

$("button").eq(4).click(function(){
    int=setInterval("startclock()",1000);
	setTimeout(function () {
		clearInterval(int);},i*60*1000);
	$("body").css("background","#f75940");
	none();
})

//重置倒计时时间
$("button").eq(6).click(function(){
	clearInterval(int);
	clearInterval(ont);
	i=25;
	u=5;
	y=1;
	m.html(i);
	n.html(u);
	minutes.html(i);
	seconds.html("00");
	show();
	$("body").css("background","none");
})

function startbreak() {
	   
	if( y == 0){
		u =  u - 1;
		if(u == 0){
            minutes.html("00");
            y = 60
            y = y -1 ;
			seconds.html(y);
		}
		else{
			minutes.html(u);
            y = 60
            y = y -1 ;
			seconds.html(y);
		}
	}
	else if(y <= 10 && y > 1){
		y = y -1 ;
		seconds.html("0"+y);
	}
	else if(y == 1) {
		y = y -1 ;
		seconds.html("00")
	}
	else {
		y = y - 1;
		seconds.html(y);
	}   
}

$("button").eq(5).click(function(){
	minutes.html(u);
	ont=setInterval("startbreak()",1000);
	setTimeout(function () {
		clearInterval(ont);},u*60*1000);
	$("body").css("background","#c5f0a4");
	none();
})

