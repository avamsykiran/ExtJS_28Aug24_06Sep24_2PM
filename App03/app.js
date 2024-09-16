
Ext.onReady(() => {

    var panel1 = Ext.create('Ext.Panel',{
        title:'A Panel',
        html:`
            <h3>A Panel</h3>
            <p>Some content may go here...!</p>
        `
    });

    var panel2 = Ext.create('Ext.Panel',{
        title:'Another Panel',
        html:`
            <h3>Another Panel</h3>
            <p>Some content may go here...!</p>
        `
    });

    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        items:[panel1,panel2]
    });
});
