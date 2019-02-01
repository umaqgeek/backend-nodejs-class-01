var conndb = require('../models/conndb');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json('application/json'));
app.use(cors({credentials: true, origin: true}));

app.get('/updateDrug/:id', (req, res) => {
  var id = req.params.id;
  var name = req.query.name;
  var desc = req.query.desc;

  var sql = "UPDATE drugs "
    +"SET name = '"+name+"', description = '"+desc+"' "
    +"WHERE id = '"+id+"'";

  conndb.query(sql, (error, result) => {
    var outData = {
      'data': result,
      'error': error
    };
    res.send(JSON.stringify(outData));
  });
});

app.get('/viewDrug', (req, res) => {
  var sql = "SELECT * FROM drugs";

  conndb.query(sql, (error, result) => {
    var outData = {
      'error': error,
      'result': result
    };
    res.send(JSON.stringify(outData));
  });
});

app.get('/addDrug', (req, res) => {
  var name = req.query.name;
  var desc = req.query.desc;

  var sql = "INSERT INTO drugs(name, description) VALUES('"
    + name + "', '" + desc + "')";

  conndb.query(sql, (error, result) => {
    var outData = {
      'data': result,
      'error': error
    };
    res.send(JSON.stringify(outData));
  });

});

module.exports = app;
