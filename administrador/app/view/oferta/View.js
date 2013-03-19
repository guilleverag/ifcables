/**
 * The view which displays information about a speficied book
 * @extends Ext.panel.Panel
 */
Ext.define('Oferta.view.oferta.View', {
    alias: 'widget.ofertaview',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
        Ext.apply(this, {
            id        : 'itemCt',
            cls       : 'item-ct',
            flex      : 2,
            border    : false,
            autoScroll: true,
			minheight : 170, 
            
            layout: {
                type : 'hbox',
                align: 'middle',
                pack : 'center'
            },
            
            items: [
                {
                    id    : 'contentCt',
                    width : 500,
                    border: false
                }
            ]
        });
                
        this.callParent(arguments);
    },
    
    /**
     * Binds a record to this view
     */
    bind: function(record) {
        var contentCt = Ext.getCmp('contentCt');
        
        var contentTpl = new Ext.XTemplate(
			'<div style="width: 400px; padding-right: 30px;" class="ux-carousel-slide">',
				'<article class="person" style="border:none;">',
					'<div class="precio">',
						'{precio}',
					'</div>',
					'<h3>{titulo}</h3>',
					'<tpl if="this.notNull(urlimg)">',
						'<div style="background: url(http://ifcables.ve2fsoft.com/{urlimg}) no-repeat;" class="avatar left"></div>',
					'</tpl>',
					'<p>{descripcion}</p>',
				'</article>',
			'</div>',
			{
				notNull: function(urlimg){
					if(urlimg.length>0 && urlimg!=null) return true;
					else return false;
				}
			}
        );
        
        contentTpl.overwrite(contentCt.el, record.data);
        
        //update the layout of the contentTpl
        contentCt.setHeight('auto');
        this.doLayout();
    }
});