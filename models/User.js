var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username: String,
  passwordDigest: String
});

userSchema.methods.checkPassword = function(password) {
        return bcrypt.compareSync(password, this.passwordDigest);
};

userSchema.statics.createSecure = function (username, password, cb) {
  var that = this;
  bcrypt.genSalt(function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      that.create({
        username: username,
        passwordDigest: hash
       }, cb)
    });
  })
};

userSchema.statics.encryptPassword = function (password) {
   var hash = bcrypt.hashSync(password, salt);
   return hash;
 };


userSchema.statics.authenticate = function(username, password, cb) {
  this.find({
     username: username,
    }, 
    function(err, user){
      
      if (user.length === 0){
        return cb("no username in database");
      } else if (user[0].checkPassword(password)){
        cb(null, user[0]);
      }else{
        return cb("incorrect password"); 
      }
    });
 };

var User = mongoose.model("User", userSchema);

module.exports = User;



