<?php
header("Content-Type: text/html; charset=UTF-8");
include_once ("connect.php");

session_start();
$test=$_POST['url'];
foreach($_SESSION['tests'] as $value){
  if($test==$value){
    $index=(int)$_SESSION['index'];
    $index++;
    //echo $index;
    $_SESSION['index']=$index;
  }
}
//echo "<hr>".$_SESSION['index'];
//echo "<hr>";
array_push($_SESSION['tests'],$test);
$result=$link->query("select * from `questions` where point1='$test' or point2='$test' or point3='$test' or point4='$test'");
$link = null;
for($i=0;$i<=$_SESSION['index'];$i++){
  $row = mysqli_fetch_object($result);/*读取从数据库获取的数据*/
}
$_SESSION['index']=0;

if ($row) {/*如果数据存在，即题目获取成功*/
  $info=1;
  $_SESSION['describe'] = $row->question_describe;
  $_SESSION['a']=$row->option_a;
  $_SESSION['b']=$row->option_b;
  $_SESSION['c']=$row->option_c;
  $_SESSION['d']=$row->option_d;
  $_SESSION['answer']=$row->answer;
  /*将姓名存在服务器，可以多个页面使用*/
}else{/*不存在这个题*/
  $info=2;
  $_SESSION['describe']="此处是题干";
  $_SESSION['a']="选项A";
  $_SESSION['b']="选项B";
  $_SESSION['c']="选项C";
  $_SESSION['d']="选项D";
  $_SESSION['answer']="#";
}
echo $info;
?>