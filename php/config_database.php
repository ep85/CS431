<?php


$server="localhost";
$user="user1";
$datapassword="password";
$database="taskmanagement";

$conn = new mysqli($server, $user, $datapassword, $database);
if(!$conn) {
	echo "error";
	exit;
}


?>