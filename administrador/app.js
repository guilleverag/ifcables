/**
 * Books.app
 * A MVC application which displays a list of books and their reviews.
 * Uses nested data which is loaded from a single json file.
 */
Ext.application({
    name				: 'Oferta',
	appFolder			: 'app',
	autoCreateViewport	: true,
	
	models				: [
		'Oferta'
	],
	
    controllers			: [
        'Ofertas'
    ],
	
	requires: [
		'Ext.form.Panel',
		'Ext.form.FieldContainer',
		'Ext.layout.container.Column',
		'Ext.form.field.Number',
		'Ext.form.field.ComboBox',
		'Ext.form.RadioGroup',
		'Ext.form.field.Radio',
		'Ext.form.FieldSet',
		'Ext.form.field.File',
		'Ext.form.field.Hidden'
	],
	
	launch: function(){
		var loading = Ext.get('loading');
		loading.fadeOut({ duration: 0.2, remove: true });
	}
});