<?php

    $mysql = new mysqli("localhost","root","","mfsj");
    if($mysql->connect_errno){
      die($mysql->connect_errno);
    }
    $mysql->query("set names utf8");
    $sqlstr = "select * from goods";

    $result = $mysql->query($sqlstr);
    // var_dump($result);
    $myArray = array();
    // fetch_assoc():查询出每一条在result中的数据；
    while ($record = $result->fetch_assoc()) {
	    		array_push($myArray,$record);
    }
    $arr =  json_encode($myArray);
    echo $arr;

 ?>
