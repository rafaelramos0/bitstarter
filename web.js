var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//    var buffer = new buffer(fs.readFileSync('index.html'));
//    response.send(buffer.toString());
    response.send(fs.readFileSync('index.html').toString('utf-81')
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
