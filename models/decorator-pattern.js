// The constructor to decorate
// Decorator 1

var MacBookDecorator = {

  memory: function( macbook ) {

    var v = macbook.cost();
    macbook.cost = function() {
      return v + 75;
    }
  },

    engraving: function( macbook ){

      var v = macbook.cost();
      macbook.cost = function(){
        return v + 200;
      };
    },

    insurance: function( macbook ){

      var v = macbook.cost();
      macbook.cost = function(){
         return v + 250;
      };
    }
}

module.exports = MacBookDecorator;
