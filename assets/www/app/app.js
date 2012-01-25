Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'MyApp' : 'app'
    }
});

Ext.setup({
    onReady: function() {
        Ext.create('MyApp.Panel', {
            fullscreen: true            
        });
    }
})
