<?php
	include('conexion.php');
	conectar();
	
	
	if(isset($_POST['type'])){
		switch($_POST['type']){
			case 'delete': 
				$query = 'DELETE FROM ofertas WHERE idofertas='.$_POST['idofertas'];
				mysql_query($query) or die($query.mysql_error());
				echo 'Oferta Eliminada Correctamente.';
			break;
			
			case 'submit':
				$idofertas = $_POST['idofertas'];
				$titulo = $_POST['titulo'];
				$descripcion = $_POST['descripcion'];
				$precio = $_POST['precio'];	
				$urlimg = $_POST['urlimg'];
				$activo = strlen($_POST['activo'])>0 && $_POST['activo']>0 ? 1 : 0;

				if(isset($_FILES) && isset($_FILES['urlimg_foto']) && strlen($_FILES['urlimg_foto']['tmp_name'])>3){
					if($_FILES['urlimg_foto']['error'] != 0){
						echo '{success: false, msg: "No se pudo subir la imagen correctamente, puede intentar nuevamente."}';
						return true;
					}
					
					if(!@is_uploaded_file($_FILES['urlimg_foto']['tmp_name'])){
						echo '{success: false, msg: "No se pudo subir la imagen correctamente, puede intentar nuevamente."}';
						return true;
					}
					
					if(!@getimagesize($_FILES['urlimg_foto']['tmp_name'])){
						echo '{success: false, msg: "Solo se pueden subir archivos de tipo imagen."}';
						return true;
					}
					
        			$ext = strtolower(end(explode('.',$_FILES['urlimg_foto']['name'])));
					if($ext=='jpg' || $ext=='jpeg') $src = imagecreatefromjpeg($_FILES['urlimg_foto']['tmp_name']);
					elseif($ext=='png') $src = imagecreatefrompng($_FILES['urlimg_foto']['tmp_name']);
					else $src = imagecreatefromgif($_FILES['urlimg_foto']['tmp_name']);
					
					list($w,$h) = getimagesize($_FILES['urlimg_foto']['tmp_name']);
					$nw = 100;
					$nh = ($h/$w)*$nw;
					$tmp = imagecreatetruecolor($nw,$nh);
					
					imagecopyresampled($tmp,$src,0,0,0,0,$nw,$nh,$w,$h);
					
					$name = 'images/ofertas/'.time().'-oferta-'.urlencode($_FILES['urlimg_foto']['name']);
					$urlimg = 'administrador/resources/'.$name;
					$name = '../'.$name;
					
					imagejpeg($tmp,$name,100);
					
					imagedestroy($src);
					imagedestroy($tmp);
				}

				if($idofertas==-1){
					$query = 'INSERT INTO ofertas (titulo,descripcion,urlimg,precio,activo) VALUES 
							("'.$titulo.'","'.$descripcion.'","'.$urlimg.'","'.$precio.'",'.$activo.')';
					mysql_query($query) or die($query.mysql_error());
					
				}else{
					$query='UPDATE ofertas SET titulo="'.$titulo.'", descripcion="'.$descripcion.'", urlimg="'.$urlimg.'", 
							precio="'.$precio.'", activo='.$activo.' 
							WHERE idofertas='.$idofertas;
					mysql_query($query) or die($query.mysql_error());
				}
				
				echo '{success: true, msg: "Cambios Guardados con Exito!"}';
			break;
		}
	}else{
		$query='SELECT * FROM ofertas ORDER BY activo,titulo';
		$result = mysql_query($query) or die($query.mysql_error());
		
		$ofertas= array();
		while($r = mysql_fetch_array($result)){
			$ofertas[]=$r;
		}
				
		echo '{success: true, total: '.count($ofertas).', ofertas: '.json_encode($ofertas).'}';
	}
?>