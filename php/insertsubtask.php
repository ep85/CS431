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
@$taskId=$request->taskId;

$conn = new mysqli($server, $user, $datapassword, $database);
if(!$conn) {
	echo "error";
	exit;
}

$result = $conn->query("INSERT INTO subtask ( title ) VALUES ( '$title')" );
$lastid=mysqli_insert_id($conn);
$result = $conn->query("INSERT INTO task_to_subtask (task_id, subtask_id) VALUES ('$taskId', '$lastid')" );


$conn->close();

