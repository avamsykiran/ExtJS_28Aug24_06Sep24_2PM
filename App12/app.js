
Ext.onReady(() => { 
    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        layout:'fit',
        items:[{
            layout:'hbox',
            requires:['Ext.layout.container.HBox'],
            items:[{
                title:'Panel1',
                html:`<p>Some content may go here for <strong>Panel 1</strong>...!</p>`,
                flex:1
            },{
                title:'Panel2',
                html:`<p>Some content may go here for <strong>Panel 2</strong>...!</p>`,
                flex:1
            },{
                title:'Panel3',
                html:`<p>Some content may go here for <strong>Panel 3</strong>...!</p>`,
                flex:2
            },{
                title:'Panel4',
                html:`<p>Some content may go here for <strong>Panel 4</strong>...!</p>`,
                flex:1
            },{
                title:'Panel5',
                html:`<p>Some content may go here for <strong>Panel 5</strong>...!</p>`,
                flex:1
            }]
        }]
    });
});
