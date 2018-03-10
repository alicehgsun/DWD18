// ---setup
var express = require('express');
var app = express();
var path = require("path");

var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public');
  },
  filename: function (req, file, cb) {
    cb(null, 'population.csv');
  }
});
var upload = multer({ storage: storage });

var years = [];
var academic = [];

app.set('view engine', 'ejs');
app.use(express.static(path.resolve('./public')));

// ---data

app.get('/processit', function(req, res) {
    years[0] = req.query.years0;
    years[1] = req.query.years1;
    years[2] = req.query.years2;
    years[3] = req.query.years3;
    years[4] = req.query.years4;
    years[5] = req.query.years5;
    years[6] = req.query.years6;
    years[7] = req.query.years7;
    years[8] = req.query.years8;
    years[9] = req.query.years9;
    years[10] = req.query.years10;
      res.redirect('/report');

});

app.get('/processit1', function(req, res) {
    academic[0] = req.query.grad;
    academic[1] = req.query.undergrad;
    academic[2] = req.query.postgrad;
    academic[3] = req.query.other;
    res.redirect('/report');

});

app.post('/upload', upload.single('file'), function (req, res) {
	console.log(req.file);
  res.redirect('/report');
});


// ---output

app.get('/annual', function(req, res) {
  res.render('annual.ejs');

});
app.get('/report', function(req, res) {
  res.render('report.ejs', {yearsdata: years, academicdata: academic});
});

app.listen(9090, function () {
  console.log('Example app listening on port 9090!');
});
