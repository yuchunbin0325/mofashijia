<?php

    $name = $_GET["user_name"];
    $email = $_GET["E-mail"];
    $pwd = $_GET["user_pwd"];
    $cpwd = $_GET["cpwd"];
    $acode = $_GET["acode"];
    $mysql = new mysqli("localhost","root","","mofashijia");
    if($mysql->connect_errno){
      die($mysql->connect_errno);
    }
    $mysql->query("set names utf8");

    $sqlstr="insert into register values(\"".$name."\",\"".$email."\",\"".$pwd."\",\"".$cpwd."\",\"".$acode."\")";

    $result=$mysql->query($sqlstr);
    $a = ['state'=>$result];
    echo json_encode($a);
    // var_dump($result);


?>
