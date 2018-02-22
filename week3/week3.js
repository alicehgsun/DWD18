var express = require('express');
var app = express();
var path = require('path');
var mongojs = require('mongojs');
var config = require('./config.js');
var db = mongojs(config.mlabkey, ["toiletdata"]);

app.set('view engine', 'ejs');
app.use(express.static(path.resolve('./public')));

app.listen(3010, function() {
  console.log('Example app listening on port 3010!');
});

app.get('/processit1', function(req, res) {

  db.toiletdata.save({
    "acceptData": req.query.yes
  }, function(err, saved) {
    if (err || !saved) console.log("Not saved");
    else console.log("Saved");

  });

  res.redirect('/toilet#addOne');

});

app.get('/processit2', function(req, res) {

  db.toiletdata.save({
    "mehData": req.query.meh
  }, function(err, saved) {
    if (err || !saved) console.log("Not saved");
    else console.log("Saved");

  });

  res.redirect('/toilet#addTwo');

});

app.get('/processit3', function(req, res) {

  db.toiletdata.save({
    "unacceptData": req.query.no
  }, function(err, saved) {
    if (err || !saved) console.log("Not saved");
    else console.log("Saved");

  });

  res.redirect('/toilet#addThree');

});

app.get('/toilet', function(req, res) {

  db.toiletdata.find({}, function(err, saved) {
    if (err || !saved) {
      console.log("No results");
    } else {
      console.log(saved);
      res.render('toilet.ejs', {
        answerData: saved
      });
    }
  });
});
