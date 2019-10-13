<?php
require './User.php';
define('serverName', 'localhost');
define('userName', 'root');
define('passWord', 'password');
define('dbName', 'sqlAdmin');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $connection = new mysqli(serverName, userName, passWord, dbName);
    if($connection->connect_error){
        die("ERROR: " . $connection->connect_error);
    }
    else{
        $statement = $connection->prepare("INSERT INTO users (first_name, last_name, dob, address, phone, email) VALUES (?, ?, ?, ?, ?, ?)");
        for($i = 0; $i < count($_POST); $i++){
            $user = new User($_POST[$i]['first_name'], $_POST[$i]['last_name'], $_POST[$i]['dob'], $_POST[$i]['address'], $_POST[$i]['phone'], $_POST[$i]['email']);
            $statement->bind_param("ssssss", $user->first_name, $user->last_name, $user->dob, $user->address, $user->phone, $user->email);
            $statement->execute();
        }
        echo "users saved to db!";
    }
    $statement->close();
    $connection->close();
}
?>