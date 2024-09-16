
Ext.onReady(() => {

    var panel1 = Ext.create('Ext.Panel',{
        title:'A Panel',
        html:`<p>Some content may go here for <strong>Panel One</strong>...!</p>`
    });

    var panel2 = Ext.create('Ext.Panel',{
        title:'Another Panel',
        html:`<p>Some content may go here for <strong>Panel Two</strong>...!</p>`
    });

    var tabs = Ext.create('Ext.tab.Panel',{
        items:[panel1,panel2]
    });

    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        items:[tabs]
    });
});
