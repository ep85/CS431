<?php

$server="localhost";
$user="user1";
$datapassword="password";
$database="taskmanagement";

$myArray=array();
session_start();

ini_set('display_errors', 1);
error_reporting(E_ALL ^ E_NOTICE);

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$username= $request->username;
@$password=$request->password;


$conn = new mysqli($server, $user, $datapassword, $database);
$check= $conn->query("SELECT email from user where email='$username'");
if($check !==NULL){
	echo "USER ALREADY EXISTS";
}
else{
	$result = $conn->query("INSERT INTO user (email, password) VALUES ( '$username' ,'$password')" );
	echo "SUCCESS USER CREATED";
}


$conn->close();

?>