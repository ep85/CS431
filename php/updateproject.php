<?php

include 'config_database.php';

session_start();
$username=$_SESSION["user"];
$userid=$_SESSION["userid"];

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$title=$request->title;
@$description=$request->description;
@$projectId=$request->projectId;
@$people=$request->people;



$result = $conn->query("UPDATE projects SET title='$title', description='$description' where id='$projectId'" );

$result = $conn->query("DELETE FROM project_to_user where project_id='$projectId' and owner=0" );
foreach($people as $person){

	$result = $conn->query("INSERT INTO project_to_user (project_id, user_id, owner) VALUES ( '$projectId' ,'$person', '0')" );
	
}
$conn->close();





?>