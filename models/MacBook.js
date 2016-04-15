// MackBook.js

// create MackBook model ===========================================================
// constructor

function MacBook() {

  this.cost = function () { return 997; };
  this.screenSize = function () { return 11.6; };

}

// prototype function for inheritance ==========================================
MacBook.prototype = {

constructor: MacBook,

  toString: function() {
    return("Cost: " + this.cost + "\n Screen Size: " + this.screenSize);
  }
};

// export the module ===========================================================
module.exports = MacBook;
