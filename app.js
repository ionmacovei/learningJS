// app.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var morgan   = require('morgan');

// load models
var User     = require('./models/user.js');
var Basket   = require('./models/basket.js');

// patterns example
var Singleton = require('./models/singleton-pattern.js');
var Facade    = require('./models/facade-pattern.js');
var Factory   = require('./models/factory-pattern.js');

// configuration ===============================================================
// set up our express application
app.use(morgan('dev')); // log every request to the console

// test the code ===============================================================

var alex = new User('Alex','Bereghici','abereghici@pentalog.fr','SuperPassword',true);
var ahmed = new User('Ahmed','Ali','ahmed@supermail.com','SuperPassword',false);

//test  how it's  work prototype
console.log(alex.constructor);
console.log(alex.toString() + " -  " + alex.userType());
console.log(ahmed.toString() + " - " + ahmed.userType());

//trying to access a private var:
console.log(alex.privateVar);
console.log(alex.getPrivateVar());

//Test singleton pattern
// Usage:
var singleA = Singleton.getInstance();
var singleB = Singleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true

//Basket module
Basket.addItem({
  item: "iBeacon Pro",
  price: 20
});

Basket.addItem({
  item: "iBeacon Simple",
  price: 10
});

console.log( Basket.getItemCount() );
console.log( Basket.getTotal() );

//Facade pattern
var facade = Facade.facadeMethod({run: true, val: 10});

//Factory pattern
// Create an instance of our factory that makes cars
var carFactory = new Factory();
var car = carFactory.createVehicle( {
           vehicleType: "car",
           color: "yellow",
           doors: 6 } );

// Test to confirm our car was created using the vehicleClass/prototype Car
// Outputs: constructor for car
console.log(car.constructor);

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
