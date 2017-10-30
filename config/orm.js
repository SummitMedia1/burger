// Import MySQL connection.
var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
}

  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, callBack) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callBack(result);
    });
  },
  insertOne: function(tableInput, cols, vals, callBack) {
    var queryString = "INSERT INTO " + tableInput;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      callBack(result);
    });
  },

  updateOne: function(tableInput, condition, callBack) {
    // var queryString = "UPDATE " + tableInput + SET ;
    //
    // queryString += " SET ";
    // queryString += objToSql(objColVals);
    // queryString += " WHERE ";
    // queryString += condition;

    // console.log(queryString);
    connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err, result) {
      if (err) {
        throw err;
      }

      callBack(result);
    });
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
