<?php
include 'config_database.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
$username=$_SESSION["user"];
$userid=$_SESSION["userid"];

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$title= $request->title;
@$description=$request->description;


$result = $conn->query("INSERT INTO projects (title, description) VALUES ('$title', '$description')" );
$lastid=mysqli_insert_id($conn);
$result = $conn->query("INSERT INTO project_to_user (project_id, user_id, owner) VALUES ('$lastid', '$userid', '1')" );
echo "done";
$conn->close();





?>