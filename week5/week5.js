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

// var upload = multer({ dest: './public',
// filename: function (req, file, cb) {
//     var id = path.extname(file.originalname);
//     cb(null, id);
//   }
// });

app.set('view engine', 'ejs');
app.use(express.static(path.resolve('./public')));

app.post('/upload', upload.single('file'), function (req, res) {
	console.log(req.file);
	res.send("uploaded: " + req.file);
});



app.get('/annual', function(req, res) {
  res.render('annual.ejs');

});
app.get('/report', function(req, res) {
  res.render('report.ejs');

});

app.listen(9010, function () {
  console.log('Example app listening on port 9010!');
});
