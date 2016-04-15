// Singleton.js

// create Singleton model ===========================================================

//private variables
var privateProperty = 'I am private';
var numberOfCalls = 0
//private function
function sum(num1, num2) {
  return num1 + num2;
}

// Public
var self = module.exports = {

  publicProperty: 'I am public',

  addFive: function addFive(num) {
    numberOfCalls += 1;
    return sum(num, 5);
  },

  numberOfCalls: function() {
    return numberOfCalls;
  }
};
