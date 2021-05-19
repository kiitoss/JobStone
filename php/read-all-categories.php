<?php
	include 'PDO.php';

	$statement = $pdo->query('SELECT * FROM CATEGORY');
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get all categories successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));
?>