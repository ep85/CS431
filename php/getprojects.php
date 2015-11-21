<?php

$server="localhost";
$user="root";
$datapassword="password";
$database="taskmanagement";
$myArray=array();
session_start();
$username=$_SESSION["user"];
$userid=$_SESSION["userid"];


$conn = new mysqli($server, $user, $datapassword, $database);
if(!$conn) {
	echo "error";
	exit;
}

$result = $conn->query("SELECT p.title, p.description FROM projects p, project_to_user ptu  where ptu.user_id='$userid' and ptu.project_id=p.id " );
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[]=$row;
}
	echo json_encode($myArray);


$conn->close();

?>