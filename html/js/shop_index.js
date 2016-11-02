// 主页轮播图网络请求 ：
// $.ajax({
// 			type:"get",
// 			url:"../../php/code/site_php/citys.php?name="+city_name,
// 			async:true,
// 			success:function(obj){

$.ajax({
  type:"GET",
  url:"../../php/code/shop_index.php",
  success:function(obj1){
    var obj = JSON.parse(obj1);
    // 轮播图-----------------------------------------------------------------------------
     var center_content = $("#center_content");
     var div1 = $("<div/>");
     div1.addClass("swiper-container");
     div1.css({"position":"relative"});
     div1.appendTo(center_content);
     var div2 = $("<div/>");
     div2.addClass("swiper-wrapper");
     div2.appendTo(div1);
    //  console.log(obj.length);
         for(var i = 0;i < obj.length;i++){
           var div3 = $("<div/>");
           div3.addClass("swiper-slide");
           div3.appendTo(div2);

           var img = $("<img/>");

           img.css({cursor:"pointer"})
           div3.append(img);
           img[0].src = "../../php/img/" + obj[i].loop_pic;
           img[0].data = obj[i];
           img.on("click",function(){
             window.location.href = "goods.html?id=" + this.data.id;
           })
          //  console.log(img[i].data);
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


  }
 })
 // 超值礼盒********************************超值礼盒********************************超值礼盒********************************
 $.ajax({
   type:"GET",
   url:"../../php/code/shop_index_czlh.php",
   success:function(obj){
     var my = JSON.parse(obj);
     console.log(my);
     var czlh_tb = $(".czlh_tb");
     for (var i = 0; i < my.length + 1; i++) {
       var tr = $("<tr/>")
       czlh_tb.append(tr);
       for(var j = 0; j < my.length; j ++){
         var td = $("<td/>");
         tr.append(td);

       }
     }
     // 获取table第一行tr里的三个td：
    var trs1 = $(".czlh_tb").children()[0].children;
    // console.log(trs1);
    for (var i = 0; i < trs1.length; i++) {
      var a = $("<a/>");
      $(trs1[i]).append(a);
      var img = $("<img/>");
      img[0].src = "../../php/img/" + my[i].shop_index_img;
      a.append(img);
    }
    // 获取table第二行tr里的三个td：
        var trs2 = $(".czlh_tb").children()[1].children;
        var text1 = my[0].shop_index_title.split(",");
        // console.log(text1[0]);
          for (var i = 0; i < trs2.length; i++) {
            var span = $("<span/>");
            span.css({fontSize:"20px",color:"#1c561b"})
            $(trs2[i]).append(span);
            $(span[0]).text(text1[0]);
          }
          // 获取table第 3 行tr里的三个td：
              var trs3 = $(".czlh_tb").children()[2].children;
              $(trs3).css({
                padding:"3px 0"
              })
              // console.log(text1[0]);
                for (var i = 0; i < trs3.length; i++) {
                  var a1 = $("<a/>");
                  $(trs3[i]).append(a1);
                  var span1 = $("<span/>");
                  span1.css({fontSize:"15px",color:"#1c561b"})
                  a1.append(span1);
                  $(span1[0]).text(text1[1]);
                }
                // 获取table第 4 行tr里的三个td：
                var trs4 = $(".czlh_tb").children()[3].children;
                $(trs4).css({
                  padding:"6px 0"
                })
                for(var i = 0;i < trs4.length;i ++){
                  var span2 = $("<sapn/>");
                  span2.css({fontSize:"28px",color:"#1c561b"})
                  $(span2[0]).text(my[i].shop_index_price);
                  $(trs4[i]).append(span2);
                  var span3 = $("<span/>");
                  $(span3[0]).text(my[i].shop_index_price1);
                  $(trs4[i]).append(span3);
                  span3.css({fontSize:"22px",color:"#1c561b"})
                }
        }
  })
  // 镇店之宝  第一行***************************镇店之宝***************************镇店之宝***************************
  $.ajax({
    type:"GET",
    url:"../../php/code/indexImg.php",
    success:function(obj){
      var my = JSON.parse(obj);
        var zdzb_tb1 = $(".zdzb_tb1");
        for (var i = 0; i < 4; i++) {
          var tr = $("<tr/>")
          zdzb_tb1.append(tr);
          for(var j = 0; j < 3; j ++){
            var td = $("<td/>");
            tr.append(td);
          }
        }
        // 获取table第一行tr里的三个td：
       var trs1 = zdzb_tb1.children()[0].children;
       // console.log(trs1);
       for (var i = 0; i < trs1.length; i++) {
         var a = $("<a/>");
         $(trs1[i]).append(a);
         var img = $("<img/>");
         img[0].src = "../../php/img/" + my[i].zdzb_pic;
         a.append(img);
       }
       // 获取table第二行tr里的三个td：
           var trs2 = zdzb_tb1.children()[1].children;
           var text1 = my[0].zdzb.split(",");
           // console.log(text1[0]);
             for (var i = 0; i < trs2.length; i++) {
               var span = $("<span/>");
               span.css({fontSize:"20px",color:"#1c561b"})
               $(trs2[i]).append(span);
               $(span[0]).text(text1[0]);
             }
       // 获取table第 3 行tr里的三个td：
           var trs3 = zdzb_tb1.children()[2].children;
           $(trs3).css({
             padding:"3px 0"
           })
           // console.log(text1[0]);
             for (var i = 0; i < trs3.length; i++) {
               var a1 = $("<a/>");
               $(trs3[i]).append(a1);
               var span1 = $("<span/>");
               span1.css({fontSize:"15px",color:"#1c561b"})
               a1.append(span1);
               $(span1[0]).text(text1[1]);
             }
             // 获取table第 4 行tr里的三个td：
             var trs4 = zdzb_tb1.children()[3].children;
             $(trs4).css({
               padding:"6px 0"
             })
             for(var i = 0;i < trs4.length;i ++){
               var span2 = $("<sapn/>");
               span2.css({fontSize:"28px",color:"#1c561b"})
               $(span2[0]).text(my[i].zdzb_price);
               $(trs4[i]).append(span2);
               var span3 = $("<span/>");
               $(span3[0]).text(my[i].zdzb_price1);
               $(trs4[i]).append(span3);
               span3.css({fontSize:"22px",color:"#1c561b"})
             }
// 镇店之宝  第二行***************************镇店之宝***************************镇店之宝***************************
    $.ajax({
      type:"GET",
      url:"../../php/code/shop_index_zdzb2.php",
      success:function(obj){
        var my = JSON.parse(obj);
        var zdzb_tb2 = $(".zdzb_tb2");
        for (var i = 0; i < 4; i++) {
          var tr = $("<tr/>")
          zdzb_tb2.append(tr);
          for(var j = 0; j < 3; j ++){
            var td = $("<td/>");
            tr.append(td);
          }
        }
        // 获取table第一行tr里的三个td：
       var trs1 = zdzb_tb2.children()[0].children;
       // console.log(trs1);
       for (var i = 0; i < trs1.length; i++) {
         var a = $("<a/>");
         $(trs1[i]).append(a);
         var img = $("<img/>");
         img[0].src = "../../php/img/" + my[i].shop_index_img;
         a.append(img);
       }
       // 获取table第二行tr里的三个td：
           var trs2 = zdzb_tb2.children()[1].children;
           var text1 = my[0].shop_index_title.split(",");
           // console.log(text1[0]);
             for (var i = 0; i < trs2.length; i++) {
               var span = $("<span/>");
               span.css({fontSize:"20px",color:"#1c561b"})
               $(trs2[i]).append(span);
               $(span[0]).text(text1[0]);
             }
             // 获取table第 3 行tr里的三个td：
                 var trs3 = zdzb_tb2.children()[2].children;
                 $(trs3).css({
                   padding:"3px 0"
                 })
                 // console.log(text1[0]);
                   for (var i = 0; i < trs3.length; i++) {
                     var a1 = $("<a/>");
                     $(trs3[i]).append(a1);
                     var span1 = $("<span/>");
                     span1.css({fontSize:"15px",color:"#1c561b"})
                     a1.append(span1);
                     $(span1[0]).text(text1[1]);
                   }
                   var trs4 = zdzb_tb2.children()[3].children;
                   $(trs4).css({
                     padding:"6px 0"
                   })
                   for(var i = 0;i < trs4.length;i ++){
                     var span2 = $("<sapn/>");
                     span2.css({fontSize:"28px",color:"#1c561b"})
                     $(span2[0]).text(my[i].shop_index_price);
                     $(trs4[i]).append(span2);
                     var span3 = $("<span/>");
                     $(span3[0]).text(my[i].shop_index_price1);
                     $(trs4[i]).append(span3);
                     span3.css({fontSize:"22px",color:"#1c561b"})
                   }
      }
    });
        // console.log(my);
    }
})

    //   req("../../php/code/indexImg.php",function(obj){
    //     // 轮播图下的面膜图；
    //     // 镇店之宝
    //      createIndexPic(obj);
    //      // 热卖套装
    //      createIndexPicTwo(obj);
	  //   });
    // function createIndexPic(obj){
    //   var div = $(".zdzb");
    //   var ul = $("<ul/>");
    //   ul.appendTo(div);
    //   for (var j = 0; j < 3; j++) {
    //     var objgoodseffect = obj[j].zdzb.split(",");
    //
    //     var li = $("<li/>");
    //     li.css({
    //       width:"33%",
    //       float:"left"
    //     })
    //     // 镇店之宝的图片添加；
    //     var liimg = $("<img/>");
    //     liimg.appendTo(li);
    //     liimg[0].src = "../../php/img/" + obj[j].zdzb_pic;
    //    li.appendTo(ul);
    //    // 图片下的文字；
    //     var p1 = $("<p/>");
    //     p1.text(objgoodseffect[0]);
    //     p1.appendTo(li);
    //     var a1 = $("<a/>");
    //     a1[0].data = obj[j];
    //     a1.appendTo(p1);
    //     a1.css({display:"block",cursor:"pointer"});
    //     a1.text(objgoodseffect[1]);
    //       $(a1).on("click",function(){
    //         // document.cookie = "id=" + this.data.id;
    //         // 跳转到商品详情页面：
    //          window.location.href = "goods.html?id=" + this.data.id;
    //
    //         // console.log(arr);
    //       })
    //   }
    // }
