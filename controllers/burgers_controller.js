// Establish dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// Index page renders all burgers to the DOM
router.get('/', function(req, res){
  burger.selectAll(function(burger_data){
    // var hamburgerObj = { burgers: data };
      console.log('Show hamburger object: ' + burger_data);
        res.render('index',{ burger_data });
        // res.render('index', hamburgerObj);
  });
});

// Create a New Burger
router.post('/api/burgers', function(req, res){
  burger.insertOne(['burger_name'],
  [req.body.burger_name], function(data) {
    // res.json({ id: result.id });
    res.redirect('/');
  });
});

// Devour a Burger
router.put('/burgers/updateOne', function(req, res){
  burger.updateOne(req.body.id, function(result){
    console.log(result);
		res.redirect('/');
      });
});

// Export Routes
module.exports = router;
