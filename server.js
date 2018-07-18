var fs = require('fs');
var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
  fs.readFile('./test.json', 'utf8', function(err, data) {
    if(err) throw err;
    stringifyFile = data
    res.send(data);
  });
});
app.post('/updateNote/:note', function(req, res) {
  console.log(req.params.note);
  fs.writeFile('./test.json', stringifyFile, function(err) {
    if(err) throw err;
    console.log('file updated');
  });
});
var server = app.listen(3000, function() {
  console.log('listening...');
});