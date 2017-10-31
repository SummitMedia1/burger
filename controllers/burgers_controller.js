// Establish dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Index page renders all burgers to the DOM
router.get('/', function(req, res){
  burger.selectAll(function(burger_data){
      console.log('Show hamburger object: ' + burger_data);
        res.render('index',{ burger_data });
  });
});

// Create a New Burger
router.post('/burgers/insertOne', function(req, res){
  burger.insertOne([req.body.burger_name], function(result) {
    res.redirect('/');
    console.log(req.body.burger_name);
  });
});

// Devour a Burger
router.put('/burgers/updateOne', function(req, res){
  burger.updateOne(req.body.id, function(result){
		res.redirect('/');
      });
});

// Export Routes
module.exports = router;
