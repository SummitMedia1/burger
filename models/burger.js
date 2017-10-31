var orm = require('../config/orm.js');

// Create a burger object
var burger = {

  // Selects all of the burger entries
  selectAll: function(callBack){
    orm.selectAll('burgers', function(res){
    callBack(res);
  });
},

  insertOne: function(name, callBack){
    orm.insertOne('burgers', name, callBack);

},
  updateOne: function(id, callBack){
    orm.updateOne('burgers', id, callBack);

  }
};
module.exports = burger;
