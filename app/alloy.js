// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

var App = {};

App.log = require('log');

Alloy.Globals.urlAPI = 'http://52.6.244.32/';

App.Database = require('database');
var db = Ti.Database.install('/databases/kanka', 'kanka');
if(db) {
    db.close();
}
