/**
 * The store used for books
 */
Ext.define('Oferta.store.Ofertas', {
    extend: 'Ext.data.Store',
    model: 'Oferta.model.Oferta',
    
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url : 'resources/php/ofertas.php',
		reader: {
			type: 'json',
			root: 'ofertas',
			idProperty: 'idofertas',
			totalProperty: 'total'
		}
    },
	
	sorters: [
		{
			property : 'idofertas',
			direction: 'ASC'
		}
	]
});