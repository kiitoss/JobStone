<?php
	include 'PDO.php';

	$statement = $pdo->query('SELECT id, pseudo, mail, color, money, postalCode, city, isAdmin FROM USER ORDER BY isAdmin DESC, pseudo ASC');
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get all users successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));
?>