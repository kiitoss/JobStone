<?php
	include 'PDO.php';

	$obj = json_decode($_GET['x'], true);	
	$id = $obj['idUser'];

	$statement = $pdo->query("SELECT id, pseudo, mail, color, money, postalCode, city, isAdmin FROM USER WHERE id='$id'");
	$data = $statement->fetch(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get user successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));
?>