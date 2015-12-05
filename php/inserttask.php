<?php

include 'config_database.php';

session_start();
$username=$_SESSION["user"];
$userid=$_SESSION["userid"];

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$title= $request->title;
@$description=$request->description;
@$projectId=$request->projectId;



$result = $conn->query("INSERT INTO task (project_id, title, description) VALUES ( '$projectId' ,'$title', '$description')" );

echo "done";

$conn->close();

