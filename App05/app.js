
Ext.onReady(() => { 
    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        items:[
            Ext.create('Ext.tab.Panel',{
                items:[{
                    title:'A Panel',
                    html:`<p>Some content may go here for <strong>Panel One</strong>...!</p>`
                },{
                    title:'Another Panel',
                    html:`<p>Some content may go here for <strong>Panel Two</strong>...!</p>`
                }]
            })
        ]
    });
});
