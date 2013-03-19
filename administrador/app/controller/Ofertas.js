/**
 * Books controller
 * Used to manage books; showing the first book, showing a spefied book, loading books, and showing their
 * related views
 */
Ext.define('Oferta.controller.Ofertas', {
    extend: 'Ext.app.Controller',
    
    models: ['Oferta'],
    stores: ['Ofertas'],
    
    refs: [
        {ref: 'menuSideBar', selector: 'menusidebar'},
		{ref: 'ofertaView', selector: 'ofertaview'},
		{ref: 'ofertaForm', selector: 'ofertaform'}
    ],
    
    init: function() {
        var me = this;
        
        me.control({
            'menusidebar dataview': {
                selectionchange: me.onSideBarSelectionChange
            },
			'menusidebar button[name=newOferta]': {
                click: me.onNewOfert
            },
			'menusidebar button[name=delOferta]': {
                click: me.onDelOfert
            },
			'ofertaform textfield': {
				blur: me.onFormChange
			},
			'ofertaform combobox[name=urlimg_producto]': {
				select: me.onFormSelectImage
			},
			'ofertaform filefield[name=urlimg_foto]': {
				change: me.onFormPCImage
			},
			'ofertaform button[name=saveOfert]': {
				click: me.onFormSubmit
			}
        });
        
        me.getOfertasStore().on({
            scope: me,
            load : me.onOfertasStoreLoad
        });
    },
    
    onLaunch: function() {
        this.getMenuSideBar().bind(this.getOfertasStore());
    },
    
    onSideBarSelectionChange: function(view, records) {
        if (records.length) {
            this.showOferta(records[0]);
        }
    },
	
	onFormSelectImage: function (field){
		var record = this.getMenuSideBar().dataview.getSelectionModel().getSelection()[0];
		
		if(field.value!='ninguno'){
			record.set('urlimg',field.value);
		}else{
			record.set('urlimg','');
		}
		
		this.getOfertaView().bind(record);
		Ext.getCmp('urlimgID').setValue(field.value);
		Ext.getCmp('fieldset_foto').collapse();
	},
	
	onFormPCImage: function(uploadField, value, option){
		Ext.getCmp('fieldset_producto').collapse();
	},
	
	onFormChange: function(field){
		var record = this.getMenuSideBar().dataview.getSelectionModel().getSelection()[0];
		
		record.set(field.getName(),field.getValue( ));
		
		this.getOfertaView().bind(record);
	},
	
	onFormSubmit: function(button){
		var me = this;
		var form = button.up('form').getForm();
		
		form.submit({
			url: 'resources/php/ofertas.php',
			waitMsg: 'Guardando el Producto...',
			timeout: 86400,
			success: function(form, action) {
			   me.getOfertasStore().load();
			   Ext.Msg.alert('Success', action.result.msg);
			},
			
			failure: function(form, action) {
				if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
					Ext.Msg.alert('Error',action.result.errorMessage);
				}
				if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
					Ext.Msg.alert('Error',
						'Status:'+action.response.status+': '+
						action.response.statusText);
				}
				if (action.failureType === Ext.form.action.Action.LOAD_FAILURE) {
					Ext.Msg.alert('Error',
						'Status:'+action.response.status+': '+
						action.response.statusText);
				}
				if (action.failureType === Ext.form.action.Action.SERVER_INVALID){
					// server responded with success = false
					Ext.Msg.alert('Invalid', action.result.errormsg);
				}
			}				
		});
	},
	
	onNewOfert: function(button){
		this.getOfertasStore().add({
			idofertas: -1,
			titulo: 'Nueva Oferta',
			urlimg: '',
			descripcion: '',
			precio: '',
			activo: 0
		});
		
	},
	
	onDelOfert: function(button){
		var record = this.getMenuSideBar().dataview.getSelectionModel().getSelection()[0];
		var me = this;
		Ext.Ajax.request({  
			waitMsg: 'Enviando al carrito...',
			url: 'resources/php/ofertas.php', 
			method: 'POST', 
			params: { 
				type		: 'delete',
				idofertas	: record.get('idofertas')
			},
			
			success:function(response,options)
			{
				me.getOfertasStore().load();
				Ext.Msg.alert('Mensaje', response.responseText);
			},
			
			failure:function(response,options)
			{
				Ext.Msg.alert("Failure", response.responseText);
			}								
	   });
	},
    
    /**
     * Called when the books store is loaded.
     * Checks if there are any records, and if there are, it delegates to show the first record
     * as well as selecting that record in the sidebar
     */
    onOfertasStoreLoad: function(store, records) {
        Ext.defer(function() {
            if (records.length) {
                var record = records[0],
                    me = this;
                
                me.getMenuSideBar().dataview.getSelectionModel().select(record);
            }
        }, 500, this);
    },
    
    /**
     * Shows a specified record by binding it to
     */
    showOferta: function(record) {
        var me = this;
        
        me.getOfertaView().bind(record);
		me.getOfertaForm().bind(record);
    }
});