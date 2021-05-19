<?php
	include 'PDO.php';
	
	$obj = json_decode($_GET['x'], true);	
	$city = $obj['city'];
    $postalCode = $obj['postalCode'];
    $idCategory = $obj['idCategory'];

	$statement = $pdo->query("SELECT * FROM POST WHERE city = '$city' AND postalCode = '$postalCode' AND idCategory = '$idCategory' ORDER BY str_to_date(datePublication,'%d/%m/%Y') DESC");
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get all posts by city and category successfully.",
		'data' => $data
	);
	
	http_response_code(200);

	echo (json_encode($return));
?>