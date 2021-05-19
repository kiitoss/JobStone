<?php
	include 'PDO.php';

	$obj = json_decode($_GET['x'], true);	
	$id = $obj['idPost'];

	$statement = $pdo->query("SELECT * FROM POST WHERE id='$id' ORDER BY str_to_date(datePublication,'%d/%m/%Y') DESC");
	$data = $statement->fetch(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get category successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));
?>