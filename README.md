Objectives
-------------------

    Ext Js Overview, Architecture, Containers, Event Listeners

JavaScript
--------------------------------------------------

    is a scripting language mostly used for web development.

    we have two major runtimes for JS,
        (a) Browser 
        (b) NodeJS

    JS is a dynamically typed language.
    JS supports number, string, boolean, undefined , null and function as primitve data types and classes as user defined data types


NodeJS
-----------------------------------------------

    NodeJS is an alternate riuntime for javascript.
    It is used execute any javascript based app or program without any UI.

    For javascript app or tools having UI, a browser is used to execute.

    For developing any application, we have a few phases
        Compose                     IDE                         VSCode
        Compile                     No Compiler Needs
        Dependency Management       Build Tool                  npm                 
        Build                       Build Tool                  npm
        Package                     Build Tool                  npm
        Test                        Testing Framework/Lib       jasmine

        All these tasks are to happen on the developer machine not on the client machine
        and these tools are Non-UI javascript based tools.

        Ans these tools are executed on NodeJS.

        npm  - node package manager is the build tool offered on NodeJS.

    Creating a NodeJS Application

        md app1
        cd app1
        npm init -y

        'package.json' is the project description file

    Manageing Dependencies

        npm i package-name@version

        For Example
            npm i jquery@latest

        npm uninstall package-name

        npm i
            is used to reinstall all the packages in the dependencies array

        npm i -g package-name
            is used to install any package or tool globally on the local disk.

    Javascript (ES6) modules

        Third party module provideers were used:

            requirejs     was introduced by nodejs (and is the default module system for nodejs based apps)
            commonjs      was introduced by microsoft

        ES6 has introduced module system in Javascript and these modules are called esm (ECMA Script Modules).

            in esm
                1. Each .js file is a module
                2. All variables, cosntants, functions, objects, classes ..etc., are private to a module 
                        unless they are marked with 'export' keyword
                3. The exported variables, cosntants, functions, objects, classes ..etc., of a module can be
                    imported into another module using 'import' keyword.

ExtJS
-----------------------------------------------

    is a javascript based Web Application Development Framework.

    Lab Setup
        NodeJS              node --version      http://nodejs.org
        ExtJS / SenchaCMD
        VSCode 
        MySQL (optional)

    ExtJS offers MVC / MVVM archetecture. 

    Evolution we have ExtJs 1.0 till ExtJS 6.0

    Sencha Tools for ExtJS

        1. SenchaCMD            is used to create a sample project, scaffolding, build a project ...etc.,
        2. SenchaTheamer        is used to auto-manage CSS and theams for our application
        3. SenchaInspector      is used to debug our application.

    Generate a simple extJS application
        
        sencha generate app -ext -classic appName appPath
        sencha generate app -ext -modern appName appPath

    Naming Conventions

        Classes                     Name must start with capital and continues in camel-case
        Functions                   Name must start with a lower-case and continues in camel-case
        Properties / Variables      Name must start with a lower-case and continues in camel-case
        Constants                   Naem msut be all caps.

    ExtJS UI
        Contianers      contian Other Contianers and Components

            Ext.containers.Viewport     is a container that occupies the entire browser window
            Ext.panel.Panel             is a very basic container, all other contaienrs are inherited from this
            Ext.tabs.Panel              is a navigatable container that has tabs
            Ext.form.Panel              provides a standard panel for forms,

                Each of these containers has a property called items:[child1,child2]
                Each of these containers has a property called layout that control on
                how the children of the container are arranged.

            Note: Ext.Panel is an class alias of Ext.panel.Panel

        Components      actionable ui elements

    Ext JS Layouts

        Auto        This is the default layout and is going to arrange each chidl, one below the other.

        Absolute    This layout allows each child to appear at a given x,y coordinates.

        Accordion   This layout places all the children in a single stack, each child rolls down when clicked.

        Border      This layout divides the contaienr into five regions
                            north
                            south
                            east
                            west
                            center
                    A max of one child for each region can be added.
        
        Column      This layout can be used to fills children column wise in the contianer.

        Fit         Will allow a single child into the contianer which occupies the entire container
        
        Table       This layout arranges the children in a tablular format.
        
        vBox        This layout provides vertical distribution of the children.
        
        hBox        This layout provides horizontal distribution of the children.

    ExtJS Basic/General Project Structure

        ProjectRoot
        |-resources
        |   |-CSS files
        |   |-Images
        |-JavaScript
        |   |-App Folder
        |   |   |-Controller
        |   |   |  |-Contoller.js
        |   |   |-Model
        |   |   |   |-Model.js
        |   |   |-Store
        |   |   |   |-Store.js
        |   |   |-View
        |   |   |   |-View.js
        |   |   |-app.js
        |-HTML files

    ExtJS MVC Archetecture

        app − The main file from where the flow of program will start. It should be included in the index.html file using 'script' tag. App calls the controller of application for the rest of the functionality.

        Controller − contains all the control of the application, the events listeners, and most of the functionality of the code. It has the path defined for all the other files used in that application such as store, view, model, require, mixins.

        View − is an user-interface part of the application, which shows up to the user. Ext JS uses various UI rich views, which can be extended and customized.

        Store − contains the data locally cached which is to be rendered on the view with the help of a model objects. Store fetches the data using proxies which has the path defined for services to fetch the backend data.

        Model − is the object which binds the store data to view. It has the mapping of backend data objects to the view dataIndex. The data is fetched with the help of store.

    ExtJS MVVM Archetecture

        Here the Controller (C in MVC) is repalced with ViewModel (VM in MVVM)

        ViewModel − basically mediates the changes between view and model. It binds the data from the model to the view. At the same time, it does not have any direct interaction with the view. It has only knowledge of the model.

    Working with ExtJS Classes

        Ext.define(appName.layer.ClassName,classDefinition,isLoadedCallBackOptional);

        var obj1 = Ext.create(appName.layer.ClassName,instacneValues);

        var obj2 = new appName.layer.ClassName();

        'extend' is a property used to derive from a super class.

    ExtJS Components

        Grid                Ext.grid.Panel          id,store,title,stripRows,collapsible,
                                                    enableColumnResie,enableColumnMove,columns     
        
        Form                Ext.form.Panel          Form-Components

        MessageBox          Ext.Msg                 Ext.Msg.alert('a title','a message string')
                                                    Ext.Msg.confirm('a title','a question',(resp) => {} )
                                                    Ext.Msg.prompt('title','a prompt',(resp,text) => {} )
                                                    Ext.Msg.show('title','a prompt',buttonsConstant,multiline,callBack )
                                                    
        ToolTip             Ext.Tooltip

        HtmlEditor          Ext.form.HtmlEditor

        ProgeressBar        Ext.MessageBox.show({title,progressText,msg,width,progress:true,closable:false}) 
                            Ext.MessageBox.hide() 
                            Ext.MessageBox.updateProgress(progressValue,progressText) 
        
        Window              Ext.Window

        ..etc.,

ExtJS MVC with SenchaCmd
------------------------------------------------------------

sencha generate app --ext --modern AppName appPath

sencha help generate

sencha generate model ModelClassName field1,field2,field3

sencha generate controller ControllerClassName

sencha generate view SomeView

sencha app build