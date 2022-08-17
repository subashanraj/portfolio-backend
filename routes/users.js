var express = require("express");
var router = express.Router();
var mongoose=require('mongoose')
const { dbName, dbUrl, mongodb, MongoClient } = require("../dbConfig");
const {UserDetails}=require('../dbSchema')

mongoose.connect(dbUrl)


router.get("/all", async (req, res) => {

  try {
    let users=await UserDetails.find()
     res.send({
      statusCode: 200,
      users,
    });
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      message: "Internal Server Error",
      error,
    });
  } 
});

router.post("/add", async (req, res) => {

  try {
    let users=await UserDetails.create(req.body)   
     res.send({
      statusCode: 200,
      message: "added Successfully",
      users,
    });
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      message: "Internal Server Error",
      error,
    });
  } 
});
module.exports = router;
