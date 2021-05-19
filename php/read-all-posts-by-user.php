<?php
	include 'PDO.php';

	$obj = json_decode($_GET['x'], true);	
	$id = $obj['idUser'];

	$statement = $pdo->query("SELECT POST.* FROM POST, USER WHERE USER.id = POST.idOwner AND USER.id='$id' ORDER BY str_to_date(datePublication,'%d/%m/%Y') DESC");
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);

	$return = array(
		'status' => 200,
		'message' => "Get posts by user successfully.",
		'data' => $data
	);
	
	http_response_code(200);
	
	echo (json_encode($return));
?>