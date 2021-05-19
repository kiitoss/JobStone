<?php
	include 'PDO.php';

	$obj = json_decode(stripslashes(file_get_contents("php://input")));

	$idOwner= intval($obj->idOwner);
	$idCategory= intval($obj->idCategory);
	$datePublication= $obj->datePublication;
	$title= $obj->title;
  $startDate= $obj->startDate;
  $endDate= $obj->endDate;
  $postalCode= intval($obj->postalCode);
	$city= $obj->city;
  $description= $obj->description;
  $price= intval($obj->price);	

	ini_set('display_errors', '1');
	error_reporting(E_ALL);
	
	try {
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);		
		$pdo->exec("INSERT INTO POST (title, startDate, endDate, idCategory, description, price, city, postalCode, idOwner, datePublication) VALUES('$title', '$startDate', '$endDate', '$idCategory', '$description', '$price', '$city', '$postalCode', '$idOwner', '$datePublication')");
		$statement = $pdo->query("SELECT * FROM POST ORDER BY id DESC LIMIT 1");
		$data = $statement->fetch(PDO::FETCH_ASSOC);

		$return = array(
			'status' => 200,
			'message' => "New post added successfully.",
			'data' => $data
		);
		http_response_code(200);
	} catch(PDOException $e) {
		$e->getMessage();		
		$return = array(
			'status' => 422,
			'message' => "Creation new post failed."
		);	
		http_response_code(422);	
	}

	echo (json_encode($return));
?>
