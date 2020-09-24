(function (window){
    'use strict';
    //code will go here
    //create a app if one already open assign it else make empty one

    var App = window.app || {};
// make a data store function
    function DataStore(){
        console.log('running the DataStore Function');
        this.data = {}; //created a property called data
        //you can store values in it

    }
    //every object will have access to this function
    //this now becomes add function for Datastore
    DataStore.prototype.add = function (key, val){
        this.data[key] = val;
        //customers email address is the key
        //customers order will store the val
    };
    //now creating a method to access the data
    DataStore.prototype.get = function (key){
        return this.data[key];
    };
    //method to get access to all data
    DataStore.prototype.getAll = function (){
        return this.data;
    };
    //adding a method to remove data
    DataStore.prototype.remove = function (key) {
        delete this.data[key]; // what syntax is this
    }

//assign the function to the app
    App.DataStore = DataStore;
    window.App = App;
})(window);