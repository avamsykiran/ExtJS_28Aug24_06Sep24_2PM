
//model
Ext.define('ContactModel',{
    extend: 'Ext.data.Model',
    fields:[
        'id','name','mobile','mailId'
    ]
});

Ext.onReady(() => { 

    //Store
    var contactsStore = Ext.create('Ext.data.Store',{
        model:'ContactModel',
        data:[
            {id:101,name:"Vamsy Kiran",mobile:"9052224753",mailId:"vamsy@gmail.com"},
            {id:102,name:"KGN Murthy",mobile:"9052224751",mailId:"murthy@gmail.com"},
            {id:103,name:"Suresh P",mobile:"9052224752",mailId:"suresh@gmail.com"},
            {id:104,name:"Krishna D",mobile:"9052224754",mailId:"krishna@gmail.com"},
            {id:105,name:"P Ramesh",mobile:"9052224755",mailId:"ramesh@gmail.com"}
        ]
    });

    //Views
    var gridPanel = Ext.create('Ext.grid.Panel',{
        id:'contactsGrid',
        store:contactsStore,
        title:'Contacts List',
        stripRows:true,
        collapsible:true,
        enableColumnResize:true,
        enableColumnMove:false,
        columns:[
            {
                id:'idCol',
                header:'Contact#',
                dataIndex:'id',
                flex:1
            },
            {
                id:'nameCol',
                header:'Contact Full Name',
                dataIndex:'name',
                flex:3
            },
            {
                id:'mobileCol',
                header:'Mobile Number',
                dataIndex:'mobile',
                flex:2,
                sortable:false
            },
            {
                id:'mailIdCol',
                header:'Mail Id',
                dataIndex:'mailId',
                flex:2
            }
        ]
    });

    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        layout:'fit',
        items:[gridPanel]
    });
});
