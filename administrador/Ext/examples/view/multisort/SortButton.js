/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.multisort.SortButton
 * @extends Ext.button.Button
 * @author Ed Spencer
 * 
 * 
 */
Ext.define('Ext.multisort.SortButton', {
    extend: 'Ext.button.Button',
    alias : 'widget.sortbutton',
    
    config: {
        direction: "ASC",
        dataIndex: undefined
    },
    
    constructor: function(config) {
        this.addEvents(
            /**
             * @event changeDirection
             * Fired whenever the user clicks this button to change its direction
             * @param {String} direction The new direction (ASC or DESC)
             */
            'changeDirection'
        );
        
        this.initConfig(config);
        
        this.callParent(arguments);
    },
    
    handler: function() {
        this.toggleDirection();
    },
    
    /**
     * Sets the new direction of this button
     * @param {String} direction The new direction
     */
    applyDirection: function(direction) {
        this._direction = direction;
        this.setIconCls('direction-' + direction.toLowerCase());
        
        this.fireEvent('changeDirection', direction);
        
        return direction;
    },
    
    /**
     * Toggles between ASC and DESC directions
     */
    toggleDirection: function() {
        this.setDirection(Ext.String.toggle(this.getDirection(), "ASC", "DESC"));
    }
});
