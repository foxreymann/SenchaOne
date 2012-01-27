Ext.Loader.setConfig({ enabled: true });

Ext.require([    
    'Ext.XTemplate',
    'Ext.Panel',
	'Ext.Button',
    'Ext.List'
]);

Ext.application({
    name: 'AM',
 
    appFolder: 'app',

    controllers: [
        'Users'
    ],
 
    launch: function() {
        Ext.create('Ext.Panel', {
            fullscreen: 'true',
            items: [
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Standard Titlebar',
                    ui: 'light'
                },
            ],
            html : 'List of users will go here'
        });
    }
});
