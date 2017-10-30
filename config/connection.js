var mySQL = require('mysql');

var connection = mySQL.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
});

//Connect to mysql

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: This connection errored: ' + err.stack + '\n\n');
    return;
  }
    console.log('SUCCESS: You are connected as ID: ' + connection.threadId + '\n\n');
});

//Exports to ORM
module.exports = connection;
