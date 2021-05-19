<?php
	include 'PDO.php';
	
	$obj = json_decode(stripslashes(file_get_contents("php://input")));
	$idPost = $obj->idPost;
  	$idApplier = $obj->idApplier;
	
	ini_set('display_errors', '1');
	error_reporting(E_ALL);

	try {
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$pdo->exec("DELETE FROM APPLY WHERE idPost = '$idPost' AND idApplier = '$idApplier'");
		$return = array(
			'status' => 200,
			'message' => "Apply removed successfully."
		);
		http_response_code(200);
	} catch(PDOException $e) {		
		$return = array(
			'status' => 404,
			'message' => "Apply not found."
		);
		http_response_code(404);
	}
	
	echo (json_encode($return));
?>