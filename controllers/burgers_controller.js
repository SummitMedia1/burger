// Establish dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
  burger.selectAll(function(data){
    var hamburgerObj = {
      burgers: data
    };

    console.log('Show hamburger object: ' + hamburgerObj);
    res.render('index', hamburgerObj);

  });
});

router.post('/burgers', function(req, res){
  burger.insertOne([
    'burger_name'
  ],[
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id'), function(req, res){
  var conditions = 'id = ' + req.params.id;

  burger.updateOne ({
    devoured: true
  }, condition, function(data) {
      res.redirect('/');
      });
};

router.delete('/burgers', function(req, res){
  var condition = "id = " + req.params.id;

    burger.delete(condition, function(data){
      res.redirect('/');
    });
});

module.exports = router;
