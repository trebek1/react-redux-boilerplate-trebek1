// models/index.js
var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost:27017/workout");
//var url = process.env.MONGOLAB_URI;

mongoose.connect("mongodb://localhost:27017/blog");

module.exports.User = require("./User");



