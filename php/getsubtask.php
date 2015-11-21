<?php

$server="localhost";
$user="user1";
$datapassword="password";
$database="taskmanagement";

$myArray=array();
session_start();

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$taskId= $request->taskId;

$username=$_SESSION["user"];
$userid=$_SESSION["userid"];


$conn = new mysqli($server, $user, $datapassword, $database);
if(!$conn) {
	echo "error";
	exit;
}

$result = $conn->query("SELECT s.title FROM subtask s, task_to_subtask tts  where tts.task_id='$taskId' and tts.subtask_id=s.id " );
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[]=$row;
}
	echo json_encode($myArray);


$conn->close();

?>