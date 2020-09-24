(function (window){
    'use strict';
    var App = window.App || {};
    function Truck(truckId, db){
        this.truckId = truckId;
        this.db = db;
    }
    //create a function to create customer order
    //takes in the order call datastore add function
    //why is there two arguments being passed in here when called

    Truck.prototype.createOrder = function(order){
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    };
//function to delete the order when completed
Truck.prototype.deliverOrder = function (customerId){
    console.log('Delivering order for ' + customerId);
    this.db.remove(customerId);
    //customer id should be the email associated with user
    
};

    App.Truck = Truck;
    window.App = App;
})(window);
//food delivery truck object