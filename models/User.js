var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  id: String,
  passphrase: String,
  address: String,
  username: String,
  passwordDigest: String,
  coin: Number
});

userSchema.methods.checkPassword = function(password) {
        return bcrypt.compareSync(password, this.passwordDigest);
};

userSchema.statics.createSecure = function (username, password,id,passphrase,address, cb) {
  var that = this;
  bcrypt.genSalt(function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      that.create({
        username: username,
        id: id,
        passphrase: passphrase, 
        address: address,
        passwordDigest: hash,
        coin: 0,
        log: []
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



