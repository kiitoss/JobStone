<?php
	include 'PDO.php';
	
	$obj = json_decode($_GET['x'], true);	
	$value = $obj['value'];

	$statement = $pdo->query("SELECT id, pseudo, mail, color, money, postalCode, city, isAdmin FROM USER WHERE pseudo LIKE '%$value%'");
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get all users successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));

?>