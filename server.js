var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var ejs = require("ejs");



// Set the view directory to /views

app.set('view engine', 'ejs');


io.on('connection', function(client){

  console.log('Client connected...');

  client.on('join', function(data){
    client.nickname = data.name;
    client.join(client.nickname)
    io.emit('join', client.nickname)
  });

  // client.on('messages', function(data){
  //   var nickname = client.nickname;

  //   client.emit('message', nickname + ": " + data);

  // })

  client.on('disconnect', function(){
    console.log('user disconnected');
    var nickname = client.nickname;
    io.emit('disconnect', nickname + " has disconnected")
  });

  client.on('chat message', function(msg){
    var nickname = client.nickname;
    io.sockets.in(nickname).emit('chat message', nickname + ": " + msg)
    // io.emit('chat message', nickname + ": " + msg);
  });
  
})

//Get Request to render Home Page
app.get("/", function(req, res) {
  res.render('pages/index');
})


server.listen(process.env.PORT || 5000, function(){
  console.log("Server has started");
});
