// app.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var morgan   = require('morgan');

// load models
var User     = require('./models/user.js');

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

var singleton = require('./models/singleton.js');
console.log(singleton.addFive(5));
console.log(singleton.addFive(5));
console.log(singleton.numberOfCalls());

var anotherSingleton = require('./models/singleton.js');
console.log(anotherSingleton.addFive(50));
console.log(anotherSingleton.numberOfCalls());



// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
