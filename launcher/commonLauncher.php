<?php

// Valiate parameters
require_once("internal/validator.php");

// Define vars
$gameData = array();

// Get parameters
$id = isset($_GET['id']) ? $_GET['id'] : "";
$operator = isset($_GET['operator']) ? $_GET['operator'] : "";
$language = isset($_GET['language']) ? $_GET['language'] : "";
$currency = isset($_GET['currency']) ? $_GET['currency'] : "";
$token = isset($_GET['token']) ? $_GET['token'] : "";

// Get Game Data from parameters
$gameData = array(
	'id' => $id,
	'operator' => $operator,
	'language' => $language,
	'currency' => $currency,
	'token' => $token
);

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Launcher</title>
</head>

<body>
	<h3>Welcome to launcher</h3>
	<div><?php var_dump($gameData); ?></div>
</body>
</html>