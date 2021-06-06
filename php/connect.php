<?php
/*$link=new PDO("mysql:host=localhost;port=3306;dbname=db","root","");
*/
$user = 'root';
$password = ''; //To be completed if you have set a password to root
$database = 'project'; //To be completed to connect to a database. The database must exist.
$port = NULL; //Default must be NULL to use default port
$link = new mysqli('127.0.0.1', $user, $password, $database, $port);
$link->query("set names utf8");

if ($link->connect_error) {
    die('Connect Error (' . $link->connect_errno . ') '
            . $link->connect_error);
}

//echo '<p>Connection OK '. $link->host_info.'</p>';
//echo '<p>Server '.$link->server_info.'</p>';
//echo '<p>Initial charset: '.$link->character_set_name().'</p>';
?>