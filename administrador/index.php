<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Inicio de Sesión del Administrador - IFCables.</title>
<link href="http://ifcables.ve2fsoft.com/resources/css/general.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" type="image/ico" href="http://ifcables.ve2fsoft.com/resources/img/finisterre-logo.png">
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
<![endif]-->
</head>

<body style="position:relative; top:0px; min-height:100%;">
	<header id="header">
    	<div class="skiptranslate" id="logo-container">
            <h1 id="logo"><a href="http://ifcables.ve2fsoft.com"><img alt="IFCables" src="../resources/img/logo-ifcables.gif"></a></h1>
        </div>
        <nav id="util-nav">
            <ul>
           		<li class="with-sub " id="ext-gen7"><a href="javascript:void(0);" id="login-btn">Su soluci&oacute;n y disponibilidad en cables especiales y comerciales, ademas de barras y tuberias de cobre.</a></li>
            </ul>
        </nav>
    </header>
    
    <div id="content-wrapper" style="padding-top:100px; padding-bottom:100px;">
        <div style="width:300px; height:250px; margin:auto;">
            <form class="rounded callout blue in-content stacked" method="post" id="contact-form" action="resources/php/login.php" onsubmit="document.location = 'administrador.html'; return false;">
                <fieldset>
                    <p class="required">
                        <label for="usuario">Usuario <span>&nbsp;</span></label>
                        <input type="text" tabindex="1" required="required" name="usuario" id="usuario" style="width:95%;">
                    </p>
                    <p class="required">
                        <label for="clave">Clave <span>&nbsp;</span></label>
                        <input type="password" tabindex="2" required="required" name="clave" id="clave" style="width:95%;">
                    </p>
                    <p class="button-group">
                        <button tabindex="3" name="envio" id="submit" type="submit">Ingresar</button>
                    </p>
                </fieldset>
            </form>
        </div>
    </div>
    
    <footer id="footer">
    	<div id="footer-content">
            <p style="float:left;width:50%;"><a class="more-icon" title="La mejor solución y disponibilidad en cables especiales y comerciales, ademas de barras y tuberias de cobre." href="http://ifcables.ve2fsoft.com">www.ifcables.com</a></p>
            <div id="copyright">
            	<p>Copyright &copy; 2011 Inversiones Finisterre, C.A. RIF.: J-30046314-1</p>
            </div>
        </div>
    </footer>
</body>
</html>