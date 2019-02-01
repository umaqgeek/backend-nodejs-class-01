var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  database: "project01_db"
});

conn.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected ..');
});

module.exports = conn;
