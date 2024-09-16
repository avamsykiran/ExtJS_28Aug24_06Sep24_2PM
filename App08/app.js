
Ext.onReady(() => { 
    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        layout:'fit',
        items:[{
            layout:'border',
            defaults:{
                collapsible:true,
                split:true,
                bodyStyle: 'padding:20px;' 
            },
            items:[{
                region:'east',
                title:'Panel1',
                html:`<p>Some content may go here for <strong>Panel 1</strong>...!</p>`
            },{
                region:'west',
                title:'Panel2',
                html:`<p>Some content may go here for <strong>Panel 2</strong>...!</p>`
            },{
                region:'center',
                title:'Panel3',
                html:`<p>Some content may go here for <strong>Panel 3</strong>...!</p>`
            },{
                region:'north',
                title:'Panel4',
                html:`<p>Some content may go here for <strong>Panel 4</strong>...!</p>`
            },{
                region:'south',
                title:'Panel5',
                html:`<p>Some content may go here for <strong>Panel 5</strong>...!</p>`
            }]
        }]
    });
});
