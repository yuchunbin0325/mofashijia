// 主页轮播图网络请求 ：
// $.ajax({
// 			type:"get",
// 			url:"../../php/code/site_php/citys.php?name="+city_name,
// 			async:true,
// 			success:function(obj){

 function req(url,callBack){
   var r = new XMLHttpRequest();
   r.open("GET",url,true);
   r.send();
     r.onreadystatechange = function(){
       if(r.readyState == 4 && r.status == 200){
         // json字符串解析成js对象
         var str = r.responseText;
         var obj = JSON.parse(str);
         if (callBack) {
           callBack(obj);
         }
       }
     }
  }
	  req("../../php/code/indexLoop.php",function(obj){
      // 轮播图
	     var center_content = $("#center_content");
	     var div1 = $("<div/>");
			 div1.addClass("swiper-container");
			 div1.css({"position":"relative"});
			 div1.appendTo(center_content);
			 var div2 = $("<div/>");
			 div2.addClass("swiper-wrapper");
			 div2.appendTo(div1);
			//  console.log(obj.length);
		       for(var i =0;i < obj.length;i++){
						 var div3 = $("<div/>");
						 div3.addClass("swiper-slide");
						 div3.appendTo(div2);

		         var img = $("<img/>");
		         div3.append(img);
		         img[0].src = "../../php/img/" + obj[i].loop_pic;
		      };
					var div4 = $("<div/>");
					div4.addClass("swiper-pagination");
					div4.appendTo(div1);
					// 轮播图；
					var mySwiper = new Swiper('.swiper-container', {
						autoplay: 3500,//可选选项，自动滑动
						loop:true,
						pagination : '.swiper-pagination',
						paginationClickable :true,
					})

	  });

      req("../../php/code/indexImg.php",function(obj){
        // 轮播图下的面膜图；
        // 镇店之宝
         createIndexPic(obj);
         // 热卖套装
         createIndexPicTwo(obj);
	    });
    function createIndexPic(obj){
      var div = $(".zdzb");
      var ul = $("<ul/>");
      ul.appendTo(div);
      for (var j = 0; j < 3; j++) {
        var objgoodseffect = obj[j].zdzb.split(",");

        var li = $("<li/>");
        li.css({
          width:"33%",
          float:"left"
        })
        // 镇店之宝的图片添加；
        var liimg = $("<img/>");
        liimg.appendTo(li);
        liimg[0].src = "../../php/img/" + obj[j].zdzb_pic;
       li.appendTo(ul);
       // 图片下的文字；
        var p1 = $("<p/>");
        p1.text(objgoodseffect[0]);
        p1.appendTo(li);
        var a1 = $("<a/>");
        a1[0].data = obj[j];
        a1.appendTo(p1);
        a1.css({display:"block",cursor:"pointer"});
        a1.text(objgoodseffect[1]);
          $(a1).on("click",function(){
            // document.cookie = "id=" + this.data.id;
            // 跳转到商品详情页面：
             window.location.href = "goods.html?id=" + this.data.id;

            // console.log(arr);
          })
      }
    }
    // 添加热卖商品的信息
    function createIndexPicTwo(obj){
      var div = $(".hotsale");
      var ul = $("<ul/>");

      ul.appendTo(div);
      for (var j = 0; j < 3; j++) {
        var objgoodseffect = obj[j+3].hotsale_title.split(",");

        var li = $("<li/>");
        li.css({
          width:"33%",
          float:"left"
        })
        // 镇店之宝的图片添加；
        var liimg = $("<img/>");
        liimg.appendTo(li);
        liimg[0].src = "../../php/img/" + obj[j+3].hotsale_pic;
       li.appendTo(ul);
       // 图片下的文字；
        var p1 = $("<p/>");
        p1.text(objgoodseffect[0]);
        p1.appendTo(li);
        var a1 = $("<a/>");
        a1[0].data = obj[j];
        a1.appendTo(p1);
        a1.css({display:"block",cursor:"pointer"});
        a1.text(objgoodseffect[1]);
        $(a1).on("click",function(){
          // document.cookie = "id=" + this.data.id;
          // console.log(this.data.id);
          // 跳转到商品详情页面：
          console.log(this.data.id);
            window.location.href = "goods.html?id=" + this.data.id;

          // console.log(arr);
        })
      }
    }
