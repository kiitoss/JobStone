<?php
	include 'PDO.php';
	
	$obj = json_decode($_GET['x'], true);	
	$value = $obj['value'];

	$statement = $pdo->query("SELECT DISTINCT city, postalCode FROM POST WHERE city LIKE '%$value%' OR postalCode LIKE '%$value%'");
	$statement->execute();
	$data = $statement->fetchAll(PDO::FETCH_ASSOC);
	$return = array(
		'status' => 200,
		'message' => "Get all cities and postal codes successfully.",
		'data' => $data
	);
	
	echo (json_encode($return));

?>