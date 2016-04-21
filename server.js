var express = require('express');
var path = require ('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);
app.set('port', (process.env.PORT || 5000));
app.set('/', function (req, res){
	res.send("<h1> Hello World </h1>");
})
app.listen(app.get('port'), function(){
 console.log("listening on port ", app.get('port'));
});