<?php
	include('conexion.php');
	conectar();
	
	$query='SELECT * FROM ofertas ORDER BY activo,titulo';
	$result = mysql_query($query) or die($query.mysql_error());
	
	$ofertas= array();
	while($r = mysql_fetch_array($result)){
		$ofertas[]=$r;
	}
	
	
	echo '{success: true, total: '.count($ofertas).', ofertas: '.json_encode($ofertas).'}';
?>