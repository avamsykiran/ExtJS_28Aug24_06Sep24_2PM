
const createToolTip = (msg) => {
    return new Ext.ToolTip({
        title:"Hint",
        html:msg,
        closable:true,
        closeAction:'hide'
    });
};

Ext.onReady(() => { 

    Ext.create('Ext.container.Viewport',{
        renderTo:Ext.getBody(),
        layout:'fit',
        items:[{
            layout:'vbox',
            title:'Messge Boxes Demo',
            items:[
                Ext.create('Ext.Button',{
                    text:'Alert Message Box',
                    listeners:{
                        click: () => Ext.Msg.alert('An Info','It seems, you clicked the first button on the panel'),
                        mouseover: () => createToolTip("This displays a simple alert box").show()
                    }                    
                }),
                Ext.create('Ext.Button',{
                    text:'Confirm Message Box',
                    listeners:{
                        click: () => Ext.Msg.confirm('An Question','Are you sure to apply for this job?',
                            (resp) => {
                                if(resp=='yes'){
                                    Ext.Msg.alert('Info','Thank you for your confirmation');
                                }else{
                                    Ext.Msg.alert('Info',"Hmmm!, it's alright.");
                                }
                            }
                        ),
                        mouseover: () => createToolTip("This displays a confirm box").show()
                    }                    
                }),
                Ext.create('Ext.Button',{
                    text:'Prompt Message Box',
                    listeners:{
                        click: () => Ext.Msg.prompt('Input','Whats your name?',
                            (resp,text) => {
                                if(resp=='ok'){
                                    Ext.Msg.alert('Info',`Hello ${text}! Welcome aboard!`);
                                }
                            }
                        ),
                        mouseover: () => createToolTip("This displays a prompt box").show()
                    }                    
                }),
                Ext.create('Ext.Button',{
                    text:'Multiline Input Message Box',
                    listeners:{
                        click: () => Ext.Msg.show({
                            title:'Input',
                            msg:'What do you think of our services?',
                            multiline:true,
                            buttons:Ext.MessageBox.OKCANCEL,
                            width: 500,
                            fn: (resp,text) => Ext.Msg.alert('info',resp=='ok'?'thank you for your feedback: '+text:'no feedback given')
                        }),
                        mouseover: () => createToolTip("This displays a multi line prompt box").show()
                    }                    
                }),
                Ext.create('Ext.form.HtmlEditor',{ width: 600, height: 200, frame:true}),
                Ext.create('Ext.Button',{
                    text:'Progress Bar Demo',
                    listeners:{
                        click: () => {
                            Ext.MessageBox.show({
                                title:'A Demo ProgressBar',
                                msg:'Working on a job',
                                progressText: 'Initializing.....',
                                progress:true,
                                closable:false,
                                width:500
                            });

                            //simulate a fake background job
                            var n = 0;
                            var handle = setInterval(()=>{
                                n++;
                                Ext.MessageBox.updateProgress(n/10,`${n*10} % completed`)
                                if(n==10){
                                    clearInterval(handle);
                                    Ext.MessageBox.hide();
                                }
                            },500);
                        },
                        mouseover: () => createToolTip("This displays a progress box").show()
                    }                    
                }),
                Ext.create('Ext.Button',{
                    text:'Open a Window',
                    listeners:{
                        click: () => {
                            var myWin = Ext.create('Ext.Window',{
                                title:"Add New Department",
                                width:400,
                                layout:'form',
                                closable:false,
                                items:[
                                    {xtype:'numberfield',fieldLabel:'Dept Id',minValue:101,maxValue:199},
                                    {xtype:'textfield',fieldLabel:'Dept Name'},
                                    {xtype:'textfield',fieldLabel:'Location'},
                                    {xtype:'textarea',fieldLabel:'Description'}
                                ],
                                buttons:[
                                    {text:'ADD'} , 
                                    {text:'CLOSE', handler: () => myWin.close()} 
                                ],
                                buttonAlign:'right'
                            });
                            myWin.show();
                        },
                        mouseover: () => createToolTip("This displays a new Window").show()
                    }                    
                })
            ]
        }]
    });
});
