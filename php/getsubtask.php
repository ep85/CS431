<?php

include 'config_database.php';

$myArray=array();
session_start();

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$taskId= $request->taskId;

$username=$_SESSION["user"];
$userid=$_SESSION["userid"];



$result = $conn->query("SELECT s.id, s.title FROM subtask s, task_to_subtask tts  where tts.task_id='$taskId' and tts.subtask_id=s.id " );
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[]=$row;
}
	echo json_encode($myArray);


$conn->close();

?>