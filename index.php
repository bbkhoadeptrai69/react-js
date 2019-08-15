<?php

$route = $_SERVER['REQUEST_URI']; 
$route = trim($route, '/');
$route = preg_replace('~\?.+~', '', $route);
if($route == 'login'){
	//var_dump($_POST);
	if(
		$_POST['username'] == 'admin' && 
		$_POST['password'] == '123'  ){
	
		$result = ["token" => 
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZXMiOnsiVXNlciI6IjExMTEiLCJQcm9kdWN0IjoiMTExMSJ9fQ.N0U3CzbjvAvQIoYqDYFHs6KU-umieTRy9Vqg03PWBLY"];
		setcookie("token", $result['token'], time()+3600);  /* expire in 1 hour */
		echo json_encode($result);
	}
	else{
		throwError('Login fail');
	}
	exit();
}
elseif($route == 'product'){
	$header = getallheaders();
	$token = $header['Authorization'] ?? null;
	
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
		if (checkPermission($token, 'Product', 'select')){
			if(isset($_GET['page']))
				$result = '{
				"data" : {"1" : {"categoryId" : 1,"id" : 1,"img" : "https://cdn.tgdd.vn/Products/Images/42/202861/vivo-s1-blue-400x400.jpg","name" : "realme","price" : "30000000"},"12" : {"categoryId" : 2,"id" : 12,"img" : "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg","name" : "samsung","price" : "10000000"},"13" : {"categoryId" : "1","id" : 13,"img" : "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg","name" : "iphone X MAX","price" : "40000000"}}
				
				}';
			else
			$result = '{
				"data" : {"1" : {"categoryId" : 1,"id" : 1,"img" : "https://cdn.tgdd.vn/Products/Images/42/202861/vivo-s1-blue-400x400.jpg","name" : "realme","price" : "30000000"},"12" : {"categoryId" : 2,"id" : 12,"img" : "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg","name" : "samsung","price" : "10000000"},"13" : {"categoryId" : "1","id" : 13,"img" : "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg","name" : "iphone X MAX","price" : "40000000"}},
				"num_page": 2
				}';
			echo  $result;
		}else{
			throwError('Authen fail');
		}
		
	}
	elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
		
	}
	elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
		
	}
	elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
		
	}
}elseif($route == 'category'){
	$header = getallheaders();
	$token = $header['Authorization'] ?? null;
	
	if ($_SERVER['REQUEST_METHOD'] === 'GET') {
		if (checkPermission($token, 'Category', 'select')){
			
			$result = '{"data" : [ null, {"id" : 1, "name" : "Phone XXX" }, {"id" : 2, "name" : "Laptop" }, { "id" : 3,"name" : "Tablet"}, {"id" : 4,"name" : "Smartphone"}],
			"num_page": 1';
			echo  $result;
		}else{
			throwError('Authen fail');
		}
		
	}
	elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
		
	}
	elseif ($_SERVER['REQUEST_METHOD'] === 'PUT') {
		
	}
	elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
		
	}
}

function checkPermission($token, $model, $action){
	if($token)
		return true;
	else
		return false;
}
function throwError($message){
	$result = [
			"error" => true,
			"message" => $message
		 ];
		 
	echo json_encode($result);
	exit();
	
}