<?php

$server="localhost";
$user="user1";
$datapassword="password";
$database="taskmanagement";

$myArray=array();
session_start();
$username=$_SESSION["user"];
$userid=$_SESSION["userid"];

$postdata= file_get_contents("php://input");
$request=json_decode($postdata);
@$taskId = $request->taskId;
@$title = $request->title;
@$description = $request->description;
@$subtasks = $request->subtasks;


$conn = new mysqli($server, $user, $datapassword, $database);
if(!$conn) {
    echo "error";
    exit;
}

$result = $conn->query("UPDATE task SET title='$title', description='$description' where id='$taskId'" );

$result = $conn->query("SELECT subtask_id FROM task_to_subtask WHERE task_id='$taskId'");

while($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $id = $row["subtask_id"];
    $conn->query("DELETE FROM subtask WHERE id='$id'");
    $conn->query("DELETE FROM task_to_subtask WHERE subtask_id='$id'");
};

foreach ($subtasks as $st) {
    $conn->query("INSERT INTO subtask (title) VALUES ('$st->title')");
    $lastid = mysqli_insert_id($conn);
    $conn->query("INSERT INTO task_to_subtask VALUES ('$taskId', '$lastid')");
}

$conn->close();





?>