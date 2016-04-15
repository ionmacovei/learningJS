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
var singleton = require('./models/singleton.js');
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

var singleA = singleton.getInstance();
var singleB = singleton.getInstance();
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

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
