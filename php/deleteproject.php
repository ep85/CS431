<?php

$server="localhost";
$user="user1";
$datapassword="password";
$database="taskmanagement";

session_start();
$username=$_SESSION["user"];
$userid=$_SESSION["userid"];

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$projectId=$request->projectId;

$conn = new mysqli($server, $user, $datapassword, $database);
if(!$conn) {
	echo "error";
	exit;
}

$result = $conn->query("DELETE FROM projects where id='$projectId'" );
$result = $conn->query("DELETE FROM project_to_user where project_id='$projectId'" );

$conn->close();





?>