// 注册
var name1 =document.querySelector("#user_name");
 var email = document.querySelector("#E-mail");
 var pwd=document.querySelector("#user_pwd");
 var cpwd = document.querySelector("#confirm_pwd");
 var acode = document.querySelector("#auth_code");
 var btn=document.querySelector(".submit");

 function requestA(obj,callback) {
    var request = new XMLHttpRequest;
    request.open('GET',obj.url,true);
    request.send()
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
          var str = request.responseText;
          var obj = JSON.parse(str);
          if (callback) {
            callback(obj);
            }
         }
     }
  }
  // console.log(pwd);
  btn.onclick=function() {
      var newname= name1.value;
      var newemail = email.value;
      var newpwd= pwd.value;
      var newcpwd = cpwd.value;
      var newacode = acode.value;
      console.log(newpwd);
      requestA({url:'../php/code/register.php?user_name='+newname+'&E-mail='+newemail+'&user_pwd='+newpwd+'&cpwd='+newcpwd+'&acode='+newacode},function(obj){
            console.log(obj);
           //  if(obj.state==true) {
           //    console.log("iii");
           //    window.location.assign("www.baidu.com");
           //  }else {
           //   //  alert(obj);
           //  }

      })

  }
