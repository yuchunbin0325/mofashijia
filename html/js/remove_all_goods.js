 //所有产品下拉框
 var me =document.querySelector(".menu-item-display");
 var sub = document.querySelector(".sub-menu-cat");

 me.onmouseover = function(){
 	sub.style.display = "block";
 	
 	me.onmouseout = function(){
 		sub.style.display ="none";
 	}
 }
 
//膜法品牌下拉框
var mfpp = document.querySelector("#mfpp");
var submenu = document.querySelector(".sub-menu");

mfpp.onmouseover = function(){
	submenu.style.display = "block";
	mfpp.onmouseout = function(){
		submenu.style.display = "none";
	}
}
//关于我们下拉框
var aboutOurs = document.querySelector("#aboutOurs");
var sub_menuO = document.querySelector(".sub_menuO");

aboutOurs.onmouseover = function(){
	
	sub_menuO.style.display = "block";
	aboutOurs.onmouseout = function(){
	sub_menuO.style.display = "none";
	}
}










