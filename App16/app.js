/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'App16.Application',

    name: 'App16',

    requires: [
        // This will automatically load all classes in the App16 namespace
        // so that application classes do not need to require each other.
        'App16.*'
    ],

    // The name of the initial view to create.
    mainView: 'App16.view.main.Main'
});
