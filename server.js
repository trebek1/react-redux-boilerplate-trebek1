var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');
var app = express();
var compiler = webpack(config);
var session = require('express-session');
var bodyParser = require('body-parser');
var db = require('./models');

//create session 
app.use(session({
	secret: "super secret password",
	resave: false,
	saveUninitialized: true
}));

// create idea of logged in user 
app.use("/", function (req, res, next) {

  req.login = function (user) {
    req.session.userId = user._id;
    req.session.username = user.email;
    req.session.save();  
  };

  req.currentUser = function (cb) {
     db.User.
      findOne({
          _id: req.session.userId
      },
      function (err, user) {
        req.user = user;
        cb(null, user);
      });
  };

  req.logout = function () {
  	req.session.destroy();
  }
  next(); 
});

app.use(require('webpack-dev-middleware')(compiler, {publicPath: config.output.publicPath}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/session', function(req, res){
	req.currentUser(function(err, user){
    if(user){
      res.send(user);  
    }else{
      res.send(err);
    }
	}); 
});

app.post('/signup', function(req, res){
	var info = req.body; 
	db.User.find({username: info.username}, function(err,user){
		if(user.length === 0){
			db.User.createSecure(info.username, info.password, info.id, info.passphrase, info.address, function(err, user){
        if(user){
          res.send(user);
        }else{
          res.send(err);
        }
			});	
		}else{
      res.send("Error: username already taken");
    }
	});
});

app.post('/login', function(req, res){
	var user = req.body;
  console.log("login user ", user); 
	db.User.authenticate(user.username, user.password, function(err, user){
    if(user){
      console.log("valid user")
      req.login(user);
      res.send(user);  
    }else{
      res.send(err);
    }
	});
});

app.get('/products', function(req, res){
	
	db.Product.find({}, function(err, products){
		if(products){
			res.send(products)
		}else{
			res.send([]);
		}
	});
		
});

app.get('/logout', function(req, res){
	req.logout(); 
	res.send('logout finished');
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
});
