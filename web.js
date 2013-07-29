var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());
//app.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//    reponse.setHeader('Content-Type', 'text/html');
    var buffer = fs.readFileSync('./index.html','utf-8');
    response.send( buffer );
//    response.send(fs.readFileSync('index.html').toString('utf-81');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
