process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var db = require('./config/db');
var express = require('./config/express');

var app = express();

db.connect(db.MODE_TEST, function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.')
    process.exit(1)
  } else {
    app.listen(51234, function() {
      console.log('Listening on port 51234...')
    })
  }
})

//app.listen(51234);
module.exports = app;

//console.log("server running at port 51234...");
