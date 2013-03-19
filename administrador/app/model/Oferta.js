/**
 * Model for a book
 */
Ext.define('Oferta.model.Oferta', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'idofertas', type: 'int'},
        'titulo',
        'urlimg',
        'descripcion',
        {name: 'activo', type: 'int'},
		'precio'
    ]
});
