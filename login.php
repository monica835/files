<?php 
    header("Access-Control-Allow-Origin: *");
    $data = $_POST["data"];
    
  echo json_encode($data);
?>