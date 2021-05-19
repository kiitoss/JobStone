<?php
	include 'PDO.php';

	$statement = $pdo->query("SELECT * FROM POST  ORDER BY str_to_date(datePublication,'%d/%m/%Y') DESC");
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get all posts successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));
?>