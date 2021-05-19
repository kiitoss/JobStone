<?php
	include 'PDO.php';

	$obj = json_decode(stripslashes(file_get_contents("php://input")));
	
	$id = intval($obj->id);
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
	
	// ini_set('display_errors', '1');
	// error_reporting(E_ALL);

	try {
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$pdo->exec("UPDATE POST SET idOwner = '$idOwner', idCategory = '$idCategory', datePublication = '$datePublication', title = '$title', startDate = '$startDate', endDate = '$endDate', postalCode = '$postalCode' ,city = '$city', description = '$description', price = '$price' WHERE id = '$id'");
		$statement = $pdo->query("SELECT * FROM POST WHERE id ='$id'");
		$data = $statement->fetch(PDO::FETCH_ASSOC);

		$return = array(
			'status' => 200,
			'message' => "Post patched successfully.",
			'data' => $data
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