// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = process.env.PORT || 3000;

var app = express();

//To server static content from the public directory
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text({type: 'text/html' }));
app.use('/public', express.static(__dirname + "/public"));

// // override with POST having ?_method=DELETE or PUT
app.use(methodOverride('_method'));

// Set handlebars in app requirements
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Import routes and give app access to them
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function(){
  console.log('Your App is listening on PORT ' + PORT);
});
