// 产品总分类标题

$.ajax({
  type:"GET",
  url:"../../php/code/all_goods.php",
  success:function(obj){
    var my = JSON.parse(obj);
    var ul =  $('#class_box').children().children("ul:eq(0)");
// console.log(ul);
    for(var i = 0;i < my.length;i++){
      var li = $("<li/>");
      li.addClass("class_title");
      li.css({cursor:"pointer"})
      li.appendTo(ul);
      var a = $("<a/>");
      // a[0].data = my[i];
      a.appendTo(li);
      $(a[0]).text(my[i].type);

      // 点击显示的li：
      var ultt = $("#hh");
      // console.log(ultt);
  // console.log(my[0].name.split(","));
        var aa = false;
        li.css({background: "#f9f9f9"});
      li.on("click",function(){
          // $(this).index().css({background:"#ccc"})

        $(".lis").remove();
        var mynames = my[$(this).index() - 1].name.split(",");
        for(var j = 0;j < mynames.length;j++){
          var li1 = $("<li/>");
          li1.addClass("lis");
          li1.css({cursor:"pointer"})
          li1.appendTo(ultt);
          li1.append(mynames[j]);
        }
      })
    }



  }
});
$.ajax({
  type:"GET",
  url:"../../php/code/goods.php",
  success:function(obj){
        var my = JSON.parse(obj);
        // console.log(my.length);
        var product_by = $(".product_by");
          for (var i = 0; i < my.length; i++) {
            var div = $("<div/>");
            div[0].data = my[i];
            div.on("click",function(){
              window.location.href = "goods.html?id=" + this.data.id;
            })
            div.addClass("product_div");
            // 获取所有div 并移入时移动效果
            var divs = $(".product_div");
            for (var j = 0; j < divs.length; j++) {
              $(divs[j]).hover(function() {
                $(this).animate({top:"2px",left:"2px"},100)
              }, function() {
                $(this).animate({top:"0px",left:"0px"},100)
              });
            }

            // div.text(my[i].title);
            div.appendTo(product_by);
            var ul = $("<ul/>");
            div.append(ul);
            var li = $("<li/>");
            ul.append(li);
            var a1 = $("<a/>");
            // a1.text(my[i].price);
            var img = $("<img/>");
            img[0].src = "../../php/img/" + my[i].goods_pic.split(",")[0];
            a1.append(img);
            li.append(a1);
            var a2 = $("<a/>");
            a2.addClass("aTwo");
            a2.text(my[i].title);
            a2.hover(function() {
              $(this).css({color:"red"});
            }, function() {
              $(this).css({color:"#0d3a1d"});
            });
            li.append(a2);
            var span1 = $("<span/>");
            span1.text("本店售价: ");
            li.append(span1);
            var span2 = $("<span/>");
            span2.css({paddingLeft:"4px"})
            span2.text(my[i].price);
            li.append(span2);
            var br = $("<br/>");
            li.append(br);
          }

      }
    });
