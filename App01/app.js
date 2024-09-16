
var author = "Vamsy Kiran Aripaka";
var authorMail = "vamsy.kiran@iiht.com";

Ext.onReady(() => {
    //what ever we code here will be executed once the html page is ready...!

    Ext.create('Ext.Panel',{
        renderTo:'root',
        height:500,
        width:500,        
        title:'My First ExtJS Panel',
        html:`
            <h3>A Demo Panel Created Using ExtJS</h3>
            <p>This is really exciting to work with my first ExtJS application</p>
            <p>This contnet is produced by <strong>${author}</strong></p>
            <p>Please feel free to write to the author at <strong>${authorMail}</p>
        `
    });
});
