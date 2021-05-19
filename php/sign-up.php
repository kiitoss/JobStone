<?php
	include 'PDO.php';

	$obj = json_decode(stripslashes(file_get_contents("php://input")));
	
	$pseudo = trim($obj->pseudo);
	$password = password_hash(trim($obj->password), PASSWORD_DEFAULT);
  $mail = trim($obj->mail);
  $postalCode = intval($obj->postalCode);
  $city = trim($obj->city);
  $money = intval($obj->money);
  $color = trim($obj->color);
	$isAdmin = intval($obj->isAdmin);

	// ini_set('display_errors', '1');
	// error_reporting(E_ALL);
	
	try {
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);		
		$pdo->exec("INSERT INTO USER (pseudo, mail, color, money, postalCode, city, isAdmin, password) VALUES('$pseudo', '$mail', '$color', '$money', '$postalCode', '$city', '$isAdmin', '$password')");
		$statement = $pdo->query("SELECT id, pseudo, mail, color, money, postalCode, city, isAdmin FROM USER ORDER BY id DESC LIMIT 1");
		$data = $statement->fetch(PDO::FETCH_ASSOC);

		$return = array(
			'status' => 200,
			'message' => "New user added successfully.",
			'data' => $data
		);
		http_response_code(200);
	} catch(PDOException $e) {		
		$return = array(
			'status' => 422,
			'message' => "Creation new user failed."
		);	
		http_response_code(422);	
	}

	echo (json_encode($return));
?>
