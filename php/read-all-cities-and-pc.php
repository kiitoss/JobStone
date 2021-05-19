<?php
	include 'PDO.php';

	$statement = $pdo->query('SELECT DISTINCT city, postalCode FROM POST ORDER BY city ASC');
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get all cities and postal code successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));
?>