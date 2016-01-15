var express = require('express');
var contact = express();
var mongoose = require('mongoose');

var routes = express.Router();

var databaseUrl = 'mongodb://contact:12345@ds029605.mongolab.com:29605/contactlistdb';

var mongoose = require('mongoose');

//connect to the database using mongojs (like mongoose but different one)
var db = mongojs(databaseUrl);

routes.route('/')

  //find all contact data and pass back to controller
  .get(function (req, res) {
    console.log("I received a GET request");

    //get all data from database and collection contact
    db.collection('contact').find(function (err, docs) {
      //console.log("docs");
      res.json(docs);
    });

  })

  //post data to db if req success post a response back
  //need to require the body parser
  .post(function (req, res) {
    console.log(req.body);
    //insert data into mongodb and response with json format
    db.collection('contact').insert(req.body, function (err, doc) {
      res.json(doc);
    });

  });

routes.route('/:id')
  //delete a specific id from url params
  //pass in params as request and return a response
  .delete(function (req, res) {
    var id = req.params.id;
    console.log('server received delete id: ' + id);
    //delete id from mongodb
    db.collection('contact').remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
      res.json(doc);
    });
  })

  //find a specific id url params and pass the response back to controller
  .get(function (req, res) {
    var id = req.params.id;
    console.log('server received a specific id: ' + id);
    //find one specific id from mongodb
    db.collection('contact').findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
      res.json(doc);
    });
  })

  //update a specific id from url params
  //pass in params as request and return a response
  .put(function (req, res) {
    var id = req.params.id;
    //console.log(req.body.name);

    //find the specific id url and modify the data by set properties of contact in db
    //to the req.body properties and send back response in json
    db.collection('contact').findAndModify({
      query: {_id: mongojs.ObjectId(id)},
      update: {
        $set: {
          name: req.body.name,
          email: req.body.email,
          number: req.body.number
        }
      },
      new: true
    }, function (err, doc) {
      res.json(doc);
    });
  });

module.exports = routes;
