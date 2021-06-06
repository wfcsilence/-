<?php
header("Content-Type: text/html; charset=UTF-8");
/*开启会话*/
session_start();
$answer1=$_POST['choose'];
if($answer1==$_SESSION['answer']){
  $index=1;
}else{
  $index=2;
}
echo $index;
?>