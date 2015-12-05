<?php
include 'config_database.php';

$myArray=array();
session_start();

ini_set('display_errors', 1);
error_reporting(E_ALL ^ E_NOTICE);

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$username= $request->username;
@$password=$request->password;



if($result = $conn->query("SELECT email, password, id FROM user where email='$username'")){
	$row = $result->fetch_array(MYSQLI_ASSOC);
	echo $row['username'];
	if($row["password"]==$password && !empty($password)){
			echo "true";
			$_SESSION["user"] = $username;
			$_SESSION["userid"] = $row["id"];
	}else{
			echo "invalid";
	}
}
else{
	echo "invalid";
}
$conn->close();

?>