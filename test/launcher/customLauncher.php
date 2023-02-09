<?php
// Here we expected parse the launcher url and redirect to commonLauncher.php
// Code ...

$id = $_GET['userid'] ? $_GET['userid'] : "";
$operator = $_GET['establishment'] ? $_GET['establishment'] : "";
$language = $_GET['locale'] ? $_GET['locale'] : "";
$currency = $_GET['coin'] ? $_GET['coin'] : "";
$token = $_GET['securecode'] ? $_GET['securecode'] : "";

 header("Location: ./commonLauncher.php?id=$id&operator=$operator&language=$language&currency=$currency&token=$token");

echo $id, $operator, $language, $currency, $token;