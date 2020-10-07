var express = require('express');
var app = require('express')();
var http = require('http').Server(app);

var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static('public'));

io.on('connection', function(socket){
  socket.on('chat message', function(msg, spriteSaid){
    io.emit('chat message', msg, spriteSaid);
  });
   socket.on('move', function(sprToMove, movex, movey){
    io.emit('move', sprToMove, movex, movey);
   });
  socket.on('avUpdate', function(targetAv, dataURL){
    io.emit('avUpdate', targetAv, dataURL);
   });
  
  
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

// assets code below