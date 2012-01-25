Ext.application({
    name: 'SoccerScores',

    launch: function() {
        Ext.create('Ext.TabPanel', {
            fullscreen: true,
            tabBarPosition: 'top',

            defaults: {
                styleHtmlContent: true
            },

            items: [
                {
                    docked : 'top',
                    xtype: 'toolbar',
                    title: 'Standard Titlebar'
                },
                {
                    title: 'Hello',
                    cls: 'hello',
                    html: 'Home Screen'
                },
                {
                    title: 'World',
                    cls: 'world',
                    html: 'Contact Screen'
                }
            ]
        });
    }
});
