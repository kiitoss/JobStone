<?php
  include 'PDO.php';

  $obj = json_decode(stripslashes(file_get_contents("php://input")));
  
  $id = intval($obj->id);
  $pseudo = trim($obj->pseudo);
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
    if (isset($obj->password)) {
      $password = password_hash(trim($obj->password), PASSWORD_DEFAULT);
      $pdo->exec("UPDATE USER SET pseudo = '$pseudo', password = '$password', mail = '$mail', postalCode = '$postalCode', city = '$city', money = '$money', color = '$color' ,isAdmin = '$isAdmin' WHERE id = '$id'");
    } else {
      $pdo->exec("UPDATE USER SET pseudo = '$pseudo', mail = '$mail', postalCode = '$postalCode', city = '$city', money = '$money', color = '$color' ,isAdmin = '$isAdmin' WHERE id = '$id'");
    }
   
    $statement = $pdo->query("SELECT id, pseudo, mail, color, money, postalCode, city, isAdmin FROM USER WHERE id ='$id'");
    $data = $statement->fetch(PDO::FETCH_ASSOC);
    $return = array(
      'status' => 200,
      'message' => "User patched successfully.",
      'data' => $data
    );
    http_response_code(200);
  } catch(PDOException $e) {		
    $return = array(
      'status' => 404,
      'message' => "User not found."
    );
    http_response_code(404);
  }

  echo (json_encode($return));
?>