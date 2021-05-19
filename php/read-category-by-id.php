<?php
	include 'PDO.php';

	$obj = json_decode($_GET['x'], true);	
	$id = $obj['idCategory'];

	$statement = $pdo->query("SELECT * FROM CATEGORY WHERE id='$id'");
	$data = $statement->fetch(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get category successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));
?>