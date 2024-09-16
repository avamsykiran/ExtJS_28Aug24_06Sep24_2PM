
Ext.onReady(() => { 
    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        layout:'fit',
        items:[{
            layout:{
                type:'table',
                columns:2,
                tableAttrs:{
                    style:{
                        width:'100%',
                        height:'100%'
                    }
                }
            },
            items:[{
                title:'Panel1',
                html:`<p>Some content may go here for <strong>Panel 1</strong>...!</p>`
            },{
                title:'Panel2',
                html:`<p>Some content may go here for <strong>Panel 2</strong>...!</p>`
            },{
                title:'Panel3',
                html:`<p>Some content may go here for <strong>Panel 3</strong>...!</p>`
            },{
                title:'Panel4',
                html:`<p>Some content may go here for <strong>Panel 4</strong>...!</p>`
            },{
                title:'Panel5',
                html:`<p>Some content may go here for <strong>Panel 5</strong>...!</p>`,
                colspan:2
            }]
        }]
    });
});
