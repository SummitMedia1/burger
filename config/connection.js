var mySQL = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "seeds"
});

//Connect to mysql

connection.connect(function(err) {
  if err {
    console.error('This connection errored: ' + err.stack);
    return;
  }
    console.log('Your are connected on port ' + connection.threadId);
});

//Exports to ORM
module.exports = connection;
