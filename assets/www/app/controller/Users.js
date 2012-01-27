Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
 
    init: function() {
        console.log('aaa');
        this.control({
            'titlebar': {
                render: this.onPanelRendered
            }
        });
    },
 
    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});
