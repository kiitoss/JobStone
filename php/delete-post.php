<?php
	include 'PDO.php';
	
	$obj = json_decode(stripslashes(file_get_contents("php://input")));
	$id = $obj->idPost;
	
	// ini_set('display_errors', '1');
	// error_reporting(E_ALL);

	try {
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$pdo->exec("DELETE FROM POST WHERE id = '$id'");
		$return = array(
			'status' => 200,
			'message' => "Post removed successfully."
		);
		http_response_code(200);
	} catch(PDOException $e) {		
		$return = array(
			'status' => 404,
			'message' => "Post not found."
		);
		http_response_code(404);
	}
	
	echo (json_encode($return));
?>