<?php
$server="localhost";
$user="user1";
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

$result = $conn->query("SELECT  * FROM  user  where id <> '$userid' " );
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[]=$row;
}
	echo json_encode($myArray);


$conn->close();

?>