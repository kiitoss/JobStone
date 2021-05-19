<?php
	include 'PDO.php';

	$obj = json_decode($_GET['x'], true);	
	$id = $obj['idCategory'];

	$statement = $pdo->query("SELECT POST.* FROM POST, CATEGORY WHERE CATEGORY.id = POST.idCategory AND CATEGORY.id='$id' ORDER BY str_to_date(datePublication,'%d/%m/%Y') DESC");
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get posts by category successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));
?>