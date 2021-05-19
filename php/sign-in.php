<?php
	include 'PDO.php';
	
	$obj = json_decode(stripslashes(file_get_contents("php://input")));

	$identifier = $obj->identifier;
	$password = $obj->password;

	if(isset($identifier) && isset($password)) {
		$identifier = trim($identifier);

		$statement = $pdo->query("SELECT * FROM USER WHERE pseudo='$identifier' OR mail = '$identifier'");

		$data = $statement->fetch(PDO::FETCH_ASSOC);

		if (password_verify($password, $data['password'])) {	
			$statement = $pdo->query("SELECT id, pseudo, mail, color, money, postalCode, city, isAdmin FROM USER WHERE pseudo='$identifier' OR mail = '$identifier'");
			$data = $statement->fetch(PDO::FETCH_ASSOC);		
			$return = array(
			'status' => 200,
			'message' => "Login Successful.",
			'data' => $data
    	);
    	http_response_code(200);
		} else {
			$return = array(
			'status' => 401,
			'message' => "Wrong identifier or password."
    	);
    	http_response_code(401);
		}
	} else {
		$return = array(
			'status' => 400,
			'message' => 'Missing identifier or password.'
		);
		http_response_code(400);
	}

	echo (json_encode($return));
?>