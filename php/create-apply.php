<?php
	include 'PDO.php';

	$obj = json_decode(stripslashes(file_get_contents("php://input")));

	$idPost= intval($obj->idPost);
	$idApplier= intval($obj->idApplier);

	// ini_set('display_errors', '1');
	// error_reporting(E_ALL);
	
	try {
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);		
		$pdo->exec("INSERT INTO APPLY (idPost, idApplier) VALUES('$idPost', '$idApplier')");
		$statement = $pdo->query("SELECT * FROM POST ORDER BY id DESC LIMIT 1");
		$data = $statement->fetch(PDO::FETCH_ASSOC);

		$return = array(
			'status' => 200,
			'message' => "New apply added successfully.",
			'data' => $data
		);
		http_response_code(200);
	} catch(PDOException $e) {		
		$return = array(
			'status' => 422,
			'message' => "Creation new apply failed."
		);	
		http_response_code(422);	
	}

	echo (json_encode($return));
?>
