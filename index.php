<?php include('resources/php/conexion.php');?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" class="wf-klavikaweb1klavikaweb2-n3-active wf-active ext-strict" style="height: 100%;">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Inversiones Finisterre</title>
<link href="resources/css/general.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" type="image/ico" href="http://www.ifcables.com/resources/img/finisterre-logo.png">
<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>
<script type="text/javascript" language="javascript" src="resources/js/jquery.js"></script>
<script type="text/javascript" language="javascript" src="resources/js/jquery.carouFredSel-4.3.3-packed.js"></script>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
<![endif]-->
</head>

<body style="position:relative; top:0px; min-height:100%;">
	<header id="header">
    	<div class="skiptranslate" id="logo-container">
            <h1 id="logo"><a href="http://www.ifcables.com"><img alt="IFCables" src="resources/img/logo-ifcables.gif"></a></h1>
        </div>
        <nav id="nav">
            <ul class="zero">
                <li class="with-sub active " id="ext-gen2">
                    <a class="main" href="index.php">Inicio</a>
                </li> 
                <li class="with-sub " id="ext-gen3">
                    <a class="main" href="empresa/empresa.html">Empresa</a>
                </li>
                <li class="with-sub " id="ext-gen4">
                    <a class="main" href="productos/cablesComerciales.html">Productos</a>
                </li>
                <li class="end with-sub " id="ext-gen6">
                    <a class="main" href="contacto/contactanos.html">Contacto</a>
                </li>
            </ul>
    	</nav>
        <nav id="util-nav">
            <ul>
           		<li class="with-sub " id="ext-gen7"><a href="javascript:void(0);" id="login-btn">Su soluci&oacute;n y disponibilidad en cables especiales y comerciales, ademas de barras y tuberias de cobre.</a></li>
            </ul>
        </nav>
    </header>
    <div id="content-wrapper">
    	<section id="content" class="alt">
        	<div class="feature-block inicio">&nbsp;</div>
            <div id="news-container">
            	<strong class="title">
                	<a href="javascript:void(0);">¡Ventas a nivel nacional!</a>
                </strong>
            </div>
            <div class="home-products">
            	<h2 class="with-arrow-up">
                	Descubre aqu&iacute; nuestras mejores 
                    <em>ofertas y descuentos.</em>
                </h2>
				
                <?php 
					conectar();
					$query="SELECT * FROM ofertas WHERE activo=0";
					$result = mysql_query($query) or die($query.mysql_error());
					$cantOfertas = mysql_num_rows($result);
					$anchoTotal = $cantOfertas * 418;
					$anchoTotal += 40;
					if($cantOfertas>0){
				?>
                <div class="rounded callout columns">                	
                    <ul style="overflow: hidden; margin: 1em 18px;" id="home-carousel">
                        <div style="width: 835px; min-height: 150px;" id="ext-gen9" class="list_carousel">
							<div id="carrouselProcentajes" class="ux-carousel-slides-wrap">

                                <?php 
								while($r=mysql_fetch_array($result)){
								?>
                                <div style="width: 400px; padding-right: 30px;" id="ext-gen16" class="ux-carousel-slide">
                                    <article class="person" style="border:none;">
                                    	<div class="precio">
                                        	<?php 
                                            	echo $r['precio'];
											?>	 
                                       	</div>
                                        <h3><?php echo $r['titulo'];?></h3>
                                        <?php if($r['urlimg']!=NULL){?>
                                        <div style="background: url(<?php echo $r['urlimg'];?>) no-repeat;" class="avatar left"></div>
                                        <?php }?>
                                        <p><?php echo $r['descripcion'];?></p>
                                    </article>
                                </div>
								<?php }?>

                        </div>
                    </ul>    
                </div>
                <?php }?>
            </div>
            
            <div class="rounded callout plain usedby-callout">
            	<h4>
                	Inversiones Finisterre C.A. dispone de 
                    <em>
                    	las mejores marcas del mercado.
                    </em>
                </h4>
                <ul class="logo-list zero">
                	<li>
                    	<img width="100" alt="Elecon" src="resources/img/marcas/elecon.png" />
                    </li>
                    <li>
                    	<img width="80" alt="Belden" src="resources/img/marcas/belden.png" />
                    </li>
                    <li>
                    	<img width="95" alt="PD Wire &amp; Cable" src="resources/img/marcas/pdwire.png" />
                    </li>
                    <li>
                    	<img width="100" alt="PD Wire &amp; Cable" src="resources/img/marcas/copperfield.jpg" />
                    </li>
                </ul>
            </div>
            <div class="rounded social-callout">
            	<p>
                	<em>IFCables en tus redes sociales.</em>
                    Siguenos y comenta en nuestras redes sociales
                </p>
                <ul class="icon-list zero">
                	<li>
                        <a href="http://twitter.com/ifcables" class="twitter-follow-button" data-lang="es">Follow @ifcables</a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <footer id="footer">
    	<div id="footer-content">
            <p style="float:left;width:50%;"><a class="more-icon" title="La mejor solución y disponibilidad en cables especiales y comerciales, ademas de barras y tuberias de cobre." href="http://www.ifcables.com">www.ifcables.com</a></p>
            <div id="copyright">
            	<p>Copyright &copy; 2011 Inversiones Finisterre, C.A. RIF.: J-30046314-1</p>
            </div>
        </div>
    </footer>
</body>
<script type="text/javascript" language="javascript">
	$(function() {
		//	Basic carousel
		$('#carrouselProcentajes').carouFredSel({
			items: 2,
			scroll: {
				items: 1,
				duration: 600,
				pauseOnHover: true
			},
			timer: 4000
		});
	});
</script>
</html>