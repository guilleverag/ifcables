<?php
	set_include_path(get_include_path() . PATH_SEPARATOR .'C:\\Servidor\\www\\ifcables\\administrador\\resources\\php'. PATH_SEPARATOR);
	include('mysql_var.php');
	
	function conectar(){
		global $server,$user,$pass;
		$conexion = mysql_connect($server, $user, $pass) or die("Could not connect: " . mysql_error());
	
		//local
		mysql_select_db('vefsoftc_ifcables') or die(mysql_error());
	}
?>