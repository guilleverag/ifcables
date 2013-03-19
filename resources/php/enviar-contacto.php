<?php 
require_once('class.phpmailer.php');
//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

$mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch

$mail->IsSMTP();

try {
	$mail->From 		= $_POST['email'];
	$mail->FromName 	= 'Contacto '.$_POST['nombre'].' '.$_POST['apellido'];

	$mail->AddAddress('contacto@ifcables.ve2fsoft.com', 'Contacto IFCables');
	//$mail->AddAddress('guilleverag@gmail.com', 'Guillermo Vera');
	$mail->Subject = 'Contacto IFCables - '.$_POST['nombre'].' '.$_POST['apellido'];
	$mail->Body = 'Nombre: '.$_POST['nombre'].' '.$_POST['apellido'].'<br>
				Email: '.$_POST['email'].'<br>
				Telefono: '.$_POST['telefono'].'<br>
				Compañia: '.$_POST['compania'].'<br>
				Observación: '.$_POST['observacion'];
				
	$mail->IsHTML(true);
	
	if($mail->Send()){
		echo "Información enviado correctamente.\nPronto nos pondremos en contacto con usted, Gracias.";
	}else{
		echo "Error ".$mail->ErrorInfo;
	}
} catch (phpmailerException $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
  echo $e->getMessage(); //Boring error messages from anything else!
}
?>