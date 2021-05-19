<?php
	include 'PDO.php';
	
	$obj = json_decode($_GET['x'], true);	
	$city = $obj['city'];
    $postalCode = $obj['postalCode'];

	$statement = $pdo->query("SELECT * FROM POST WHERE city = '$city' AND postalCode = '$postalCode' ORDER BY str_to_date(datePublication,'%d/%m/%Y') DESC");
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get all posts by city successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));

?>