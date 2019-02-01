var express = require('express');
var app = express();
var calcTP = require('../controllers/business');

app.get('/calcTP', (req, res) => {
  var a = req.query.a;
  var b = req.query.b;
  var c = calcTP(a, b);
  res.send(JSON.stringify(c));
});

app.get('/', function(req, res) {
   res.send('saya dari root');
});

app.get('/test', function(req, res) {
  var a = req.query.a;
  var b = req.query.b;
  console.log(a);
  console.log(b);
  var c = parseInt(a) + parseInt(b);
  res.send(c + "");
});

module.exports = app;
