<?php
	include 'PDO.php';
	
	$obj = json_decode($_GET['x'], true);	
	$value = $obj['value'];

	$statement = $pdo->query("SELECT name FROM CATEGORY WHERE name LIKE '%$value%'");
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get all categories successfully.",
		'data' => $data
	);

	http_response_code(200);
	
	echo (json_encode($return));

?>