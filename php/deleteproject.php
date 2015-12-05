<?php

include 'config_database.php';

session_start();
$username=$_SESSION["user"];
$userid=$_SESSION["userid"];

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$projectId=$request->projectId;


$result = $conn->query("DELETE FROM projects where id='$projectId'" );
$result = $conn->query("DELETE FROM project_to_user where project_id='$projectId'" );
$result = $conn->query("DELETE FROM task where project_id='$projectId'" );

$conn->close();





?>