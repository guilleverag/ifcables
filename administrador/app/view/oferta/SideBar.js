/**
 * The sidebar view for the application. Used to display a list of books.
 * @extends Ext.view.View
 */
Ext.define('Oferta.view.oferta.SideBar', {
    alias: 'widget.menusidebar',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
		this.dataview = Ext.create('Ext.view.View', {
			id: 'sidebar',
			border: false,
            cls: 'sidebar-list',
            width: 250,
			
            selModel: {
                deselectOnContainerClick: false
            },
			
			store: '',
            itemSelector: '.product',
            tpl: new Ext.XTemplate(
                '<tpl for=".">',
                    '<div class="product">',
						'{#}.- {titulo}',
					'</div>',
                '</tpl>'
            )
		});
		
		this.toolbar = Ext.create('Ext.toolbar.Toolbar', {
			width: 250,
			items: [
				'Ofertas',
				'->',
				{
					text: '',
					name: 'delOferta',
					tooltip: 'Eliminar la Oferta Seleccionada.',
					icon: 'resources/images/delOferta.gif'
				},{
					text: '',
					name: 'newOferta',
					tooltip: 'Crear una nueva Oferta.',
					icon: 'resources/images/newOferta.gif'
				}
			]
		});
		
		Ext.apply(this, {
            id        : 'panelsidebar',
            flex      : 2,
            border    : false,
            autoScroll: true,
			width	  : 250,
			dock	  : 'left',
			
			dockedItems: [
				this.toolbar
			],
			items : [this.dataview],
            
            layout: {
                type : 'fit'
            }
        });
                
        this.callParent(arguments);	
    },
	
	bind: function(store){
		this.dataview.bindStore(store);
	}
});