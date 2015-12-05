<?php
include 'config_database.php';

$myArray=array();
$newresult=array();
session_start();
$username=$_SESSION["user"];
$userid=$_SESSION["userid"];


$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$projectId=$request->projectId;


$result = $conn->query("SELECT  * FROM  user, project_to_user p where id <> '$userid' and p.project_id='$projectId' and user.id=p.user_id" );
 while($row = $result->fetch_array(MYSQLI_ASSOC)) {
     $newresult[]=$row;
     array_push($myArray,$row["id"]);
 }
 if(!empty($myArray)){
 $result2 = $conn->query("SELECT  * FROM  user where id <> '$userid' and id  not in (".implode(',',$myArray).") ");
}else{
	$result2 = $conn->query("SELECT  * FROM  user where id <> '$userid' ");
}
 while($row = $result2->fetch_array(MYSQLI_ASSOC)) {
  		array_push($newresult, $row);
 }
	echo json_encode($newresult);


$conn->close();

?>