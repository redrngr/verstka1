<?php
$route = $_GET['route'];

switch ( $route ) {
	case '':
		require 'page.html';
		break;
	case 'admin':
		require 'core/admin.php';
		break;
}
?>