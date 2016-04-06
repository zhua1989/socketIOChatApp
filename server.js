var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var ejs = require("ejs");



// Set the view directory to /views

app.set('view engine', 'ejs');


io.on('connection', function(client){

  console.log('Client connected...');

  client.on('join', function(name){
    client.nickname = name;
    io.emit('join', name)
  });

  // client.on('messages', function(data){
  //   var nickname = client.nickname;

  //   client.emit('message', nickname + ": " + data);

  // })

  client.on('disconnect', function(){
    console.log('user disconnected');
    io.emit('disconnect')
  });

  client.on('chat message', function(msg){
    var nickname = client.nickname;

    io.emit('chat message', nickname + ": " + msg);
  });
  
})

//Get Request to render Home Page
app.get("/", function(req, res) {
  res.render('pages/index');
})


server.listen('3000', function(){
  console.log("Server has started on port 3000")
});
