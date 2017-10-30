// Set app node dependencies and establish PORT setting
var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

var app = express();

//To server static content from the public directory
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text({type: 'text/html' }));
app.use('/public', express.static(__dirname + "/public"));

// Set handlebars in app requirements
var exphbrs = require('express-handlebars');

app.engine('handlebars', exphbrs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes and give app access to them
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.listen(PORT, function(){
  console.log('Your App is listening on PORT ' + PORT);
});
