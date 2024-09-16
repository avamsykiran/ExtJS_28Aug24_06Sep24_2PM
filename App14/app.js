
Ext.onReady(() => { 

    //Views
    var formPanel = Ext.create('Ext.form.Panel',{
        id:'contactsGrid',
        title:'A Demo Form',
        items:[
            {xtype:'displayfield',fieldLabel:'Identity Details'},
            {xtype:'textfield',fieldLabel:'Full Name'},
            {xtype:'textfield',fieldLabel:'Mail Id'},
            {xtype:'textfield',fieldLabel:'Mobile Number'},
            {xtype:'datefield',fieldLabel:'Date Of Birth'},
            {xtype:'displayfield',fieldLabel:'Skill Details'},
            {
                xtype:'fieldcontainer',fieldLabel:'Core Skill',defaultType:'radiofield',layout:'hbox',defaults:{flex:1},
                items:[
                    {id:'r1',boxLabel:'Java',inputValue:'Java'},
                    {id:'r2',boxLabel:'Dot Net',inputValue:'Dot Net'},
                    {id:'r3',boxLabel:'Python',inputValue:'Python'},
                    {id:'r4',boxLabel:'Mainframes',inputValue:'MF'},
                    {id:'r5',boxLabel:'None',inputValue:'Fresher'}
                ]
            },
            {
                xtype:'fieldcontainer',fieldLabel:'Adaptive Skills',defaultType:'checkboxfield',layout:'hbox',defaults:{flex:1},
                items:[
                    {id:'cb1',boxLabel:'DevOps',inputValue:'DOPS'},
                    {id:'cb2',boxLabel:'ORM',inputValue:'ORM'},
                    {id:'cb3',boxLabel:'OOAD',inputValue:'OOAD'},
                    {id:'cb4',boxLabel:'Micro Services',inputValue:'MSS'},
                    {id:'cb5',boxLabel:'UI/UX',inputValue:'UU'}
                ]
            },
            {xtype:'numberfield',fieldLabel:'Experienmce',minValue:1,maxValue:20},
            {xtype:'filefield',fieldLabel:'Resume'},
            {
                xtype:'fieldcontainer',layout:'hbox',defaults:{flex:1},
                items:[
                    {xtype:'button',text:'Submit Data'},
                    {xtype:'button',text:'Reset Data'}
                ]
            }            
        ]
    });

    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        layout:'fit',
        items:[formPanel]
    });
});
