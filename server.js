//Express server
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var mensajesMonitor = [];
app.use(express.static('public'));

var HTTP_PORT = process.env.PORT || 8081;

//home
app.get('/', function (req, res) {
    res.send("SITIO EN CONSTRUCCIÓN");
});

//404
app.get('*', function (req, res) {
    res.send("404");
});

//Socket.io Service
io.on("connection", function (socket) {
    console.log("new socket.io client")
});

http.listen(HTTP_PORT, function () {
    console.log("Web Server Started");
});

process.on("uncaughtException", function (err) {
    console.log("---------------> Uncaught Exception <---------------", err);
});
