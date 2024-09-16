
Ext.onReady(() => { 
    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        layout:'fit',
        items:[{
            layout:'absolute',
            items:[{
                x:10,
                y:10,
                width:300,
                height:200,
                title:'Panel1',
                html:`<p>Some content may go here for <strong>Panel 1</strong>...!</p>`
            },{
                x:100,
                y:100,
                width:300,
                height:200,
                title:'Panel2',
                html:`<p>Some content may go here for <strong>Panel 2</strong>...!</p>`
            },{
                x:200,
                y:200,
                width:300,
                height:200,
                title:'Panel3',
                html:`<p>Some content may go here for <strong>Panel 3</strong>...!</p>`
            }]
        }]
    });
});
