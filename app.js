// required garbage
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false});
var maxNum;


var rand = function(maxNum){
  var randomNumber = parseInt(Math.random() * maxNum) + 1;
  console.log(randomNumber);

};
app.use(express.static('public'));
//port listening
app.listen(1776, function(){
  console.log('Listening!');
});
//Start button click
app.post('/getMax', urlEncodedParser, function(req, res){
  console.log('/getMax url hit');
  console.log('req.body:',req.body);
  res.send(req.body);
  maxNum = req.body.num;
  var gameNumber = rand(maxNum);
  console.log(maxNum);
  console.log(gameNumber);
});


//submit button click
app.post('/postInputs', urlEncodedParser, function(req, res){
  console.log('/postInputs url hit');
  console.log('req.body:',req.body);
  var playerInputs = req.body;
  console.log('P inputs: ' +  playerInputs.one);
  res.send(req.body);
});
