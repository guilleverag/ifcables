/**
 * A view which displays a list of reviews for a specified book.
 * @extends Ext.view.View
 */
Ext.define('Oferta.view.oferta.Form', {
    alias: 'widget.ofertaform',
    extend: 'Ext.form.Panel',
	frame: true,

    initComponent: function() {
        Ext.apply(this, {
            title: '',
			height: 430,
			url: 'resources/php/ofertas.php',
			
			fieldDefaults:{
				labelAlign: 'left',
				msgTarget: 'side'
			},

            items: [
				{
					xtype: 'fieldcontainer',
					anchor: '100%',
					layout:'column',
					items:[
						{
							xtype: 'fieldcontainer',
							columnWidth:.5,
							layout: 'anchor',
							items: [
								{
									xtype:'textfield',
									fieldLabel: 'ID Ofertas',
									name: 'idofertas',
									anchor:'96%',
									readOnly: true
								},{
									xtype:'textfield',
									fieldLabel: 'Precio',
									name: 'precio',
									anchor:'96%',
									maxLength: 38
								}
								
							]
						},{
							xtype: 'fieldcontainer',
							columnWidth:.5,
							layout: 'anchor',
							items: [
								{
									xtype:'textfield',
									fieldLabel: 'Titulo',
									name: 'titulo',
									anchor:'96%',
									maxLength: 38
								},{
									xtype: 'radiogroup',
									fieldLabel: 'Activo',
									layout: 'hbox',
									defaults: {
										margins: '0 15 0 0',
										name: 'activo'
									},
									items: [{
										
										inputValue: '0',
										boxLabel: 'Si',
										id: 'radio1'
									}, {
										inputValue: '1',
										boxLabel: 'No',
										id: 'radio2'
									}]
								}
								
							]
						}
					]
				},{
					xtype: 'fieldset',
					title:'Imagen',
					layout: 'anchor',
					items: [
						{
							xtype: 'fieldset',
							id: 'fieldset_producto',
							title: 'Cargar desde un Producto.',
							checkboxToggle: true,
							items: [
								{
									xtype: 'combo',
									name: 'urlimg_producto',
									fieldLabel: 'Producto',
									anchor: '50%',
									store: Ext.create('Ext.data.Store', {
										fields: ['url', 'name'],
										autoLoad: true,
										proxy: {
											type: 'ajax',
											url : 'resources/json/products.json'
										}
									}),
									queryMode: 'local',
									displayField: 'name',
									valueField: 'url'
								}
							]
							
						},{
							xtype: 'fieldset',
							id: 'fieldset_foto',
							title: 'Subir imagen desde el PC',
							checkboxToggle: true,
							items: [
								{
									xtype: 'filefield',
									name: 'urlimg_foto',
									hideLabel: true,
									msgTarget: 'side',
									anchor: '50%',
									buttonText: 'Subir Foto...'
								}
							]
							
							
						},{
							xtype: 'hidden',
							id: 'urlimgID',
							name: 'urlimg',
							value: ''
						}
					]
				},{
					xtype: 'textareafield',
					name: 'descripcion',
					fieldLabel: 'Descripci&oacute;n',
					anchor    : '99%',
					labelAlign: 'top',
				},{
					xtype: 'hidden',
					name: 'type',
					value: 'submit'
				}
            ],
			
			buttons: [
				{
					text: 'Guardar Cambios',
					name: 'saveOfert',
					bindForm: true
				}
			]
        });

        this.callParent(arguments);
    },
	
	/**
     * Used to bind a store to this dataview.
     * Delegates to bindStore and also shows this view
     * @param {Ext.data.Model} record The record to bind
     * @param {Ext.data.Store} store The reviews store used by the application
     */
    bind: function(record) {
        this.getForm().reset();
		this.getForm().loadRecord(record);

		if(record.get('activo')==0){
			Ext.getCmp('radio1').setValue(true);
		}else{
			Ext.getCmp('radio2').setValue(true);
		}
    }
});
