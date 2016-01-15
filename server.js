//require express

var express = require('express');
var app = express();
var dish = require('./routes/dish');


//require body-parser
var bodyParser= require('body-parser');

//static means css html files that are not dynamic
app.use(express.static(__dirname + "/public"));

//use bodyParser as a json format
app.use(bodyParser.json());
app.use('/dish', dish);


app.listen(3030);
console.log("server is running on port 3030");
