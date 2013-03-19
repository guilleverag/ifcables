/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('Oferta.view.Viewport', {
    alias: 'widget.ofertaviewport',
	extend: 'Ext.Viewport',    
    layout: 'fit',
	
    requires: [
        'Oferta.view.Header',
        'Oferta.view.oferta.SideBar',
		'Oferta.view.oferta.View',
		'Oferta.view.oferta.Form'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'panel',
                    border: false,
                    id    : 'viewport',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    
                    dockedItems: [
                        Ext.create('Oferta.view.Header'),
                        Ext.create('Oferta.view.oferta.SideBar')
                    ],
                    
                    items: [
						Ext.create('Oferta.view.oferta.View'),
						Ext.create('Oferta.view.oferta.Form')
                    ]
                }
            ]
        });
                
        me.callParent(arguments);
    }
});