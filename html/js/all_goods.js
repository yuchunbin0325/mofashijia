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


      }
    });
