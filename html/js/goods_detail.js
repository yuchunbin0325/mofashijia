// var value = document.cookie;
// var arr1 = value.split("=");
// 正则判断url中符合的字符串：
  var reg = /\?\w+=\w+/ig;
	var url = window.location.href;
	var arr = reg.exec(url);
	var value = arr[0];
  var values = value.replace("?id=","")

	// var subwenhao = value.substr(1);
	// var arrvalue = subwenhao.split("=");
// console.log(arr1[1]);
// console.log(value);
$.ajax({
  type:"GET",
  url:"../../php/code/goods_detail.php?id=" + values,
  success:function(obj){
    var my = JSON.parse(obj);
    // console.log(my[0].title);
    //db:goods:1 行；
    var title = $(".goods_bt_title");
    title.text(my[0].title);

    var price = $(".price");
    price.text(my[0].price);

    var real_price = $(".real_price");
    real_price.text(my[0].real_price);
    // 计算节省价格 = 市场价 - 价格 ；
    var myPrice = Number(my[0].price.replace(".00元",""));
    var saveMoney = Number(my[0].real_price) - myPrice;
    var savemoney = $(".savemoney");
    savemoney.text(saveMoney);
      // console.log(safemoney);
      // console.log(aaa.length);
      // 左边大图：
      var leftBigPic = my[0].goods_pic.split(",");
      // console.log(leftBigPic.length);
      var img_leftBigPic = $(".leftBigPic");
      img_leftBigPic[0].src = "../../php/img/" + leftBigPic[0];
      // 大图下的小图：
      var innerUl = $(".innerUl");
      for (var i = 0; i < leftBigPic.length; i++) {
        var leftBigPic_li = $("<li/>");

         innerUl.append(leftBigPic_li);
         var leftBigPic_img = $("<img/>");
         leftBigPic_img.appendTo(leftBigPic_li);
          // 绑定后 标签下标和图片一致；
         leftBigPic_li[0].data = leftBigPic[i];
         leftBigPic_img[0].src = "../../php/img/" + leftBigPic[i];
         // 点击切换图片
         leftBigPic_li.on("click",function(){
           img_leftBigPic[0].src = "../../php/img/" + this.data;
         })

      }

      // console.log(innerUl);

        // 商家描述(.sjms:有就添加,没有就none 不显示)：
        if(my[0].skin == ""){
          var sjms = $(".sjms");
          sjms.css({
            display:"none"
          })
        }
        // 适合肤质  与 功效
        var effect_anyone = $(".effect_anyone");
        effect_anyone.append(my[0].skin + "<br>" + my[0].effect);
        // 评分
        var evaluate = $(".evaluate");
        evaluate.text(my[0].evaluate);
        // console.log(evaluate[0].innerHTML);
        if(evaluate[0].innerHTML == 4){
          $(".goods_starimg").css({backgroundPosition:""})
        }

        // var skin = my[0].skin;
        // console.log(skin);
      //pic();

      // 商品详情介绍大图  添加图片
      var contentUl = $('.content ul');
      var contentUl_imgs = my[0].introduce_img.split(",");

      for(var k = 0;k < contentUl_imgs.length;k++){
        var contentLi = $("<li/>");
        contentLi.appendTo(contentUl);
        var contentLi_img = $("<img/>");
        contentLi_img.appendTo(contentLi);
        contentLi_img[0].src = "../../php/img/" + contentUl_imgs[k];
      }
      // console.log(contentUl);
      // console.log(my[0].introduce_img);
  }
})
// 放大镜效果；
  function pic() {
      var wrap = document.querySelector('.big_img');
			var first = document.querySelector('.leftBigPic_mask');
			var pic2 = document.querySelector('.magic_right_img');
			var wrap2 = document.querySelector('.magic_right');
      var img_leftBigPic = document.querySelector(".leftBigPic");
        // pic2.src = ""
        // console.log(img_leftBigPic[0].src);
        // var a = img_leftBigPic
      //  console.log(img_leftBigPic.src);
       pic2.src = img_leftBigPic.src;

      wrap.onmouseover = function(e){
      var ev = e || window.event;
      first.style.display = 'block';
      wrap2.style.display = 'block';
    document.onmousemove = function(e){
      var ev = e || window.event;
      first.style.left = ev.clientX- first.offsetWidth / 2 + 'px';
      // - first.offsetWidth / 2 + 'px'
      first.style.top = ev.clientY- first.offsetHeight / 2 + 'px';
      // - first.offsetHeight / 2 + 'px'
        if (first.offsetLeft >= wrap.offsetWidth - first.offsetWidth) {
          first.style.left = wrap.offsetWidth - first.offsetWidth + 'px';
        }else if(first.offsetLeft <= 0){
          first.style.left = 0;
        }
        if(first.offsetTop >= wrap.offsetHeight - first.offsetHeight){
          first.style.top = wrap.offsetHeight - first.offsetHeight + 'px';
        }else if (first.offsetTop <= 0){
          first.style.top = 0;
        }
        var picY = wrap.offsetHeight - first.offsetHeight;
        var picYy = pic2.offsetHeight - wrap2.offsetHeight;
        var scale = picY / picYy;

          pic2.style.left =  - first.offsetLeft / scale + 'px';
          pic2.style.top =  - first.offsetTop / scale + 'px';

        return false;
      }
      wrap.onmouseout =  function(){
        first.style.display = 'none';
        wrap2.style.display = 'none';
        document.onmousemove = null;
      }
    }
  }
