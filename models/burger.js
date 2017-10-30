var orm = require('../config/orm.js');

// Create a burger object
var burger = {

  // Selects all of the burger entries
  selectAll: function(createBurger){
    orm.selectAll('burgers', function(res){
    createBurger(res);
  });
},
  insertOne: function(cols, vals, createBurger){
    orm.insertOne('burgers', cols, vals, function(res){
      createBurger(res);
    });
  },

  updateOne: function(objColVals, condition, createBurger){
    orm.updateOne('burgers', objColVals, condition, function(res){
      createBurger(res);
    });
  },

};

module.exports = burger;
