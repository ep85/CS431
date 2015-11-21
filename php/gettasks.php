<?php

$server="localhost";
$user="user1";
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

$result = $conn->query("SELECT t.id, t.title, t.description FROM task t  where t.project_id='$projectId' " );
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[]=$row;
}
	echo json_encode($myArray);


$conn->close();

?>