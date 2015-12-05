<?php

include 'config_database.php';

session_start();
$username=$_SESSION["user"];
$userid=$_SESSION["userid"];

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$taskId=$request->taskId;



$result = $conn->query("DELETE FROM task where id='$taskId'" );
$result = $conn->query("DELETE FROM task_to_subtask where task_id = '$taskId'");

$conn->close();





?>