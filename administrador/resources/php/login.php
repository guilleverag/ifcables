<?php
	set_include_path(get_include_path() . PATH_SEPARATOR .'C:\\Servidor\\www\\ifcables\\administrador\\resources\\php'. PATH_SEPARATOR);
	include('conexion.php');
	conectar();
	
	$user 	= $_POST['usuario'];
	$pass 	= $_POST['clave'];
	
	$query	= 'SELECT usuario FROM ifcables.usuario WHERE usuario="'.$user.'" AND pass="'.$pass.'"';
	$result = mysql_query($query) or die($query.mysql_error());
	
	if(mysql_num_rows($result)>0){?>
		<script>
			document.location = 'administrador.html';
		</script>
	<?php }else{?>
		<script>
			document.location = 'index.php?error=true';
		</script>
	<?php }
?>