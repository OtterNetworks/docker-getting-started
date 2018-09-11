var express = require('express');
var app = express();

app.get('/', function (req, res) {
  // processing the request requires some work!
  var i = 0;
  while (i < 1e8) {
	  i++
	  }
  res.send('Hello World!')
  console.log('This is a log line')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
