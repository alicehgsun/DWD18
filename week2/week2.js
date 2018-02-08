var express = require('express');
var app = express();
var path = require("path");

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

var answers1 = [];
var answers2 = [];
var answers3 = [];

// app.use(express.static('/index.html'));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname +'/index.html'));
// });

app.get('/processit', function(req, res) {
    answers1.push(req.query.textfield);
    // res.send(answers);
      res.redirect('/toilet');

});

app.get('/processit2', function(req, res) {
    answers2.push(req.query.textfield2);
      res.redirect('/toilet');

});

app.get('/processit3', function(req, res) {
    answers3.push(req.query.textfield3);
      res.redirect('/toilet');

});

app.get('/toilet', function(req, res) {
  res.render('toilet.ejs', {acceptable: answers1, meh: answers2, unacceptable: answers3});

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
