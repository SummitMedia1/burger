var mySQL = require('mysql');

var connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

// if (process.env.JAWSDB_URL) {
//     connection = mySQL.createConnection(process.env.JAWSDB_URL);
// } else{
//     connection = mySQL.createConnection({
//         port: 3306,
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'burgers_db',
//     });
// }

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
