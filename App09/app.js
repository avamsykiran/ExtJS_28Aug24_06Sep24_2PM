
Ext.onReady(() => { 
    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        layout:'fit',
        items:[{
            layout:'column',
            requires:['Ext.layout.container.Column'],
            items:[{
                columnWidth:0.20,
                title:'Panel1',
                html:`<p>Some content may go here for <strong>Panel 1</strong>...!</p>`
            },{
                columnWidth:0.10,
                title:'Panel2',
                html:`<p>Some content may go here for <strong>Panel 2</strong>...!</p>`
            },{
                columnWidth:0.20,
                title:'Panel3',
                html:`<p>Some content may go here for <strong>Panel 3</strong>...!</p>`
            },{
                columnWidth:0.30,
                title:'Panel4',
                html:`<p>Some content may go here for <strong>Panel 4</strong>...!</p>`
            },{
                columnWidth:0.20,
                title:'Panel5',
                html:`<p>Some content may go here for <strong>Panel 5</strong>...!</p>`
            }]
        }]
    });
});
