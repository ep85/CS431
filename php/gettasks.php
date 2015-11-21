<?php

$server="localhost";
$user="root";
$datapassword="password";
$database="taskmanagement";

$myArray=array();
session_start();

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$projectId= $request->projectId;

$username=$_SESSION["user"];
$userid=$_SESSION["userid"];


$conn = new mysqli($server, $user, $datapassword, $database);
if(!$conn) {
	echo "error";
	exit;
}

$result = $conn->query("SELECT t.title, t.description FROM task t, task_to_subtask tts  where t.project_id='$projectId' and tts.task_id=t.id " );
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[]=$row;
}
	echo json_encode($myArray);


$conn->close();

?>