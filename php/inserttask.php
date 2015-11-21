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
@$title= $request->title;
@$description=$request->description;
@$projectId=$request->projectId;

$conn = new mysqli($server, $user, $datapassword, $database);
if(!$conn) {
	echo "error";
	exit;
}

$result = $conn->query("INSERT INTO task (project_id, title, description) VALUES ( '$projectId' ,'$title', '$description')" );



$conn->close();

