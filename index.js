var app = require('express')();
var assets = require('./assets');
var http = require('http').Server(app);

var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

// assets code below

var express = require("express");
app.use("/assets", assets);

