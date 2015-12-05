<?php

include 'config_database.php';

$myArray=array();
session_start();

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$projectId= $request->projectId;

$username=$_SESSION["user"];
$userid=$_SESSION["userid"];



$result = $conn->query("SELECT t.id, t.title, t.description FROM task t  where t.project_id='$projectId' " );
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[]=$row;
}
	echo json_encode($myArray);


$conn->close();

?>