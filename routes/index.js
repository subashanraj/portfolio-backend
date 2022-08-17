var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
const {mongodb,MongoClient,dbname,dbUrl}=require('../dbConfig')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
