(function (window){
    'use strict';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    //create an instance of truck
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
})(window); 