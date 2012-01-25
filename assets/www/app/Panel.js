Ext.define('MyApp.Panel', {
    extend : 'Ext.Panel',
   
    config : {
       items : [ 
            {
                xtype: 'toolbar',
                docked : 'top',
                title: 'Football Live Scores'
            },
            {
                xtype: 'component',
                html: 'MyApp.Panel'
            }
       ]
    } 
})
