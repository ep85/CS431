<?php

$server="localhost";
$user="root";
$datapassword="password";
$database="taskmanagement";
$myArray=array();


$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$username= $request->username;
@$password=$request->password;


$conn = new mysqli($server, $user, $datapassword, $database);

if(!$conn) {
	echo "error";
	exit;
}

$result = $conn->query("SELECT email, password FROM user " );


while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $myArray[]=$row;
}
	echo json_encode($myArray);


$conn->close();

?>