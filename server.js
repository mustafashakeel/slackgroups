// var express = require('express');
// var path = require('path');
// //var ejs = require('ejs');

// var app = express();

// //  configure app

// app.set('view engine','ejs');
// app.set('views', path.join(__dirname, 'views'));
// // use middleware 
// // define routes

// app.get('/', function(req,res){
//   res.render('index');
// });



// app.listen(1337, function(){
//   console.log(' ready on port 1337 ');
// });



// var express = require("express");
// var logger = require("morgan");
// var http = require("http");
// var app = express();

// app.use(logger());

// // Homepage
// app.use(function(request, response, next) {
//   if (request.url == "/") {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Welcome to the homepage!\n");
//     // The middleware stops here.
//   } else {
//     next();
//   }
// });

// // About page
// app.use(function(request, response, next) {
//   if (request.url == "/about") {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Welcome to the about page!\n");
//     // The middleware stops here.
//   } else {
//     next();
//   }
// });

// // 404'd!
// app.use(function(request, response) {
//   response.writeHead(404, { "Content-Type": "text/plain" });
//   response.end("404 error!\n");
// });

// http.createServer(app).listen(1337);

// var express = require('express');
// var app = express();
// var path = require('path');

// // viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.listen(8080);

// var http = require('http');    // server module — standard
// var url = require('url');   // url-processing module - standard
// var fs = require('fs');        // file system module — standard
// var mime = require('mime');    // MIME-type module — optional

// // Create a web server that, when a page request comes in,
// // e.g. "http://localhost:3000/index.html",
// // passes it to a callback function to generate a response:

// function serverResponse(request, response)
// {
//     var urlPath = url.parse(request.url).pathname;  // ignore queries
//     // Root directory of server files; dot means the same as this file:
//     var filePath = '.';
//     if (urlPath == '/') // No explicit document; use default
//         filePath += '/index.html';
//     else
//         filePath += decodeURI(urlPath.replace(/\+/g, ' ')); // decode +, %nn

//     // Check the file status:
//     fs.exists(filePath,
//         function(exists)
//         {
//             if (exists)
//                 fs.readFile(filePath,
//                     function(error, file)
//                     {
//                         if (error)
//                         {
//                             response.writeHead(500, 
//                                 { 'Content-Type': 'text/plain' });
//                             response.end('Error 500: Internal Server Error');
//                         }
//                         else
//                         {
//                             response.writeHead(200,
//                                 { 'Content-Type': mime.lookup(filePath),
//                                   'Content-Length': file.length });
//                             response.end(file);
//                         }
//                     }
//                 );
//             else
//             {
//                 response.writeHead(404, { 'Content-Type': 'text/plain' });
//                 response.end('Error 404: Document Not Found.');
//             }
//         }
//     );
// }



// const express = require('express')  
// const app = express()

// app.use((request, response, next) => {  
//   console.log(request.headers)
//   next()
// })

// app.use((request, response, next) => {  
//   request.chance = Math.random()
//   next()
// })

// app.get('/', (request, response) => {  
//   response.json({
//     chance: request.chance
//   })
// })

// app.listen(3000)  
// var express = require('express');
// var app = express();

// // app.get('/', function (req, res) {
// //     res.send('<html><body><h1>Hello World</h1></body></html>');
// // });

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function (req, res) {
//     res.sendFile('index.html');
// });


// app.post('/submit-data', function (req, res) {
//     res.send('POST Request');
// });

// app.put('/update-data', function (req, res) {
//     res.send('PUT Request');
// });

// app.delete('/delete-data', function (req, res) {
//     res.send('DELETE Request');
// });

// var server = app.listen(5000, function () {
//     console.log('Node server is running..');
// });

////////////////////////////////////////////////////////////////
// var express    =    require('express');
// var app        =    express();

// app.get('*', function(request, response, next) {
//   response.sendFile(process.env.EP_XAMPP_HOME + 'index.html');
// });
// var server     =    app.listen(3000,function(){
//     console.log("We have started our server on port 3000");
//     var host = server.address().address;
//   var port = server.address().port;
// });
/////////////////////////////////////////////////////////////
//#!/usr/bin/env node
var express = require('express');
var app = express();
var request = require('request');

// Services proxy to dev
// app.use('/acs-services*', function(req, res) {
// 	var url = 'http://acs-dev-portal01.aa1.afcv.net/acs-services/' + req.url;
// 	console.log("Proxying through: " + url);
// 	req.pipe(request(url)).pipe(res);
// });

// Serve static files
app.use('/', express.static(__dirname + "/", {
  setHeaders: function (res, path) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
}));

app.get('*', function(request, response, next) {
  response.sendfile(process.env.EP_XAMPP_HOME + '/index.html');
});
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);

});