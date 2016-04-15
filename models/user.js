// user.js

// create User model ===========================================================
// constructor

var privateVar = "I'm a private variable";

function User(name,surname,email,password,isAdmin) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
}

// prototype function for inheritance ==========================================
User.prototype = {

constructor: User,

  toString: function() {
    return("Full Name: " + this.name + " " + this.surname);
  },
  userType: function() {
    return this.isAdmin ? 'Admin' : 'Simple User';
  },
  getPrivateVar: function() {
    return privateVar;
  }
};

// export the module ===========================================================
module.exports = User;
