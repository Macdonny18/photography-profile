var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.end();
});

app.listen(3000, function () {
  console.log('InnovativeCharm app listening on port 3000!');
});