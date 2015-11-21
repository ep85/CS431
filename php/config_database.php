<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$server="localhost";
$user="root";
$password="password";
$database="taskmanagement";

$result = $conn->query("SELECT p.title, p.description FROM projects p,project_to_user ptu  where ptu.user_id=$userid " );
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[]=$row;
}
	echo json_encode($myArray);


$conn->close();





?>