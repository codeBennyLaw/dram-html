var names = [
	"曹淼", "李悦", "李欣宜", "刘颖芳", "黎羽路", "蒋恋", "杨玉琪", "林柳平", "卢泳仪", "赖冰慧", "刘悦琪", "周照", "范慧英", "卢琳", "张子晴", "陈欣榆",
	"张惠婷", "李科", "丁杨", "王惠斌", "张海涛", "郑锦沛", "曾海锋", "邓越", "吴雨昊", "黎竹", "黄文凯", "伍俊宇", "刘文浩", "龚梓鑫", "吴润宇", "黄明杰",
	"刘永佳", "闻演斌", "刘东霖", "刘朕威", "宋天程", "黄品斯", "肖佳威", "卓锦源", "汪思宇", "刘炫均", "周傅源", "肖润杰", "曾镇洋", "徐睿", "周博",
	"王博志", "徐雍琳", "余宇凡", "钟一鸣", "吴梓霖", "徐志敬", "王聿晗", "曾航", "林奕杰", "温德灿"
];

var name;
var index = -1;
var time;
var flag = 1;

function btnOnclick() {
	if (flag % 2 == 1) {
		begin();
		document.getElementById("BTN").value = "暂停/A";
	}
	if (flag % 2 == 0) {
		end();
		document.getElementById("BTN").value = "开始/A";
	}
	flag++;
}

function begin() {
	document.getElementById("BTN").disabled = false;
	chouqian();
}

function chouqian() {
	if (names.length > 0) {
		index = Math.floor(Math.random() * 1000 % names.length);
		name = names[index];
		document.getElementById("result").innerHTML = name;

		time = window.setTimeout(chouqian, 2);
	} else {
		document.getElementById("result").innerHTML = "~请刷新网页~";
	}
}

function end() {
	window.clearTimeout(time);
	document.getElementById("BTN").disabled = false;
	names.splice(index, 1);
}
