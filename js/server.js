// to make this work make sure to npm install express & request 


var express = require('express');
var app = express();
var request = require('request');


// Serve static files
app.use('/', express.static(__dirname + "/", {
  setHeaders: function (res, path) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
}));

app.get('*', function(request, response, next) {
  response.sendfile(process.env.EP_XAMPP_HOME + '../index.html');
});
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);

});