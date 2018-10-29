const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pds');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded");
});

var Post = require("./models/ulpt");

//read from db
app.get('/ULPT', (req, res) => {
  Post.find({}, { '_id': 0 }, function (error, posts) {
    if (error) {
      console.error(error);
    }
    res.send({
      ulpt: posts
    })
  }).sort({ _id: -1 })
})

app.get('/ULPT/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'ulpt', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})


var Pbi = require("./models/payByIndustry");

//read from db
app.get('/PayByIndustry', (req, res) => {
  Pbi.find({}, { '_id': 0 }, function (error, posts) {
    if (error) {
      console.error(error);
    }
    res.send({
      pbi: posts
    })
  }).sort({ _id: -1 })
})

app.get('/PayByIndustry/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'pbi', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})



var CarPrice = require("./models/carPrice");

//read from db
app.get('/CarPrice', (req, res) => {
  CarPrice.find({}, { '_id': 0 }, function (error, posts) {
    if (error) {
      console.error(error);
    }
    res.send({
      carPrice: posts
    })
  }).sort({ _id: -1 })
})

app.get('/CarPrice/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'carPrice', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})

var HouseholdExpenditure = require("./models/householdExpenditure");

//read from db
app.get('/HouseholdExpenditure', (req, res) => {
  HouseholdExpenditure.find({}, { '_id': 0 }, function (error, posts) {
    if (error) {
      console.error(error);
    }
    res.send({
      householdExpenditure: posts
    })
  }).sort({ _id: -1 })
})

app.get('/HouseholdExpenditure/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'householdExpenditure', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})

var StartingPay = require("./models/startingPay");

//read from db
app.get('/StartingPay', (req, res) => {
  StartingPay.find({}, { '_id': 0 }, function (error, posts) {
    if (error) {
      console.error(error);
    }
    res.send({
      startingPay: posts
    })
  }).sort({ _id: -1 })
})

app.get('/StartingPay/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'startingPay', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})


app.listen(process.env.PORT || 8081)
