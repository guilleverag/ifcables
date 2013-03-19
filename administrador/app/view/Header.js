/**
 * The application header displayed at the top of the viewport
 * @extends Ext.Component
 */
Ext.define('Oferta.view.Header', {
    alias: 'widget.ofertheader',
    extend: 'Ext.Component',
    
    initComponent: function() {
        Ext.applyIf(this, {
            dock: 'top',
            html: 
			'<header id="header">'+
				'<div class="skiptranslate" id="logo-container">'+
					'<h1 id="logo"><a href="http://www.ifcables.com"><img alt="IFCables" src="../resources/img/logo-ifcables.gif"></a></h1>'+
				'</div>'+
				'<nav id="util-nav">'+
					'<ul>'+
						'<li class="with-sub " id="ext-gen7"><a href="javascript:void(0);" id="login-btn">Su soluci&oacute;n y disponibilidad en cables especiales y comerciales, ademas de barras y tuberias de cobre.</a></li>'+
					'</ul>'+
				'</nav>'+
			'</header>',
            cls: 'header',
            border: false
        });
                
        this.callParent(arguments);
    }
});