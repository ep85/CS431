<?php

$server="localhost";
$user="root";
$datapassword="password";
$database="taskmanagement";
$myArray=array();

ini_set('display_errors', 1);
error_reporting(E_ALL ^ E_NOTICE);

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$username= $request->username;
@$password=$request->password;


$conn = new mysqli($server, $user, $datapassword, $database);

if($result = $conn->query("SELECT email, password FROM user where email='$username'")){
	$row = $result->fetch_array(MYSQLI_ASSOC);
	echo $row['username'];
	if($row["password"]==$password && !empty($password)){
			echo "true";
	}else{
			echo "invalid";
	}
}
else{
	echo "invalid";
}

$conn->close();

?>