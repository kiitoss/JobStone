<?php
	include 'PDO.php';
	
	$obj = json_decode($_GET['x'], true);	
	$id = $obj['idPost'];

	$statement = $pdo->query("SELECT USER.id, pseudo, isAdmin, mail, USER.postalCode, USER.city, money, color FROM USER, APPLY WHERE USER.id = APPLY.idApplier AND APPLY.idPost = '$id'");
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get all appliers successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));

?>