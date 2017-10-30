// Establish dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Index page renders all burgers to the DOM
router.get('/', function(req, res){
  burger.selectAll(function(data){
    var hamburgerObj = { burgers: data };
      console.log('Show hamburger object: ' + hamburgerObj);
        res.render('index', hamburgerObj);

  });
});

// Create a New Burger
router.post('burgers', function(req, res){
  burger.insertOne(['burger_name'],
  [req.body.burger_name], function() {
    res.redirect('/');
  });
});

// Devour a Burger
router.put('burgers/:id', function(req, res){
  var condition = 'id = ' + req.params.id;
  burger.updateOne ({devoured: true}, condition, function(data) {
      res.redirect('/');
      });
});

// Export Routes
module.exports = router;
