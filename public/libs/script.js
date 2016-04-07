
<script src="/socket.io/socket.io.js"> </script>


  var socket = io();

  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });

  socket.on('connect', function(data){
    $('#status').html('You are now connected to Chat App');
    nickname = prompt("What is your nickname?");
    socket.emit('join', {name: nickname});
  });


  socket.on('join', function(name){
    $('#status').text(name + ' has joined the chat room');
  });

  socket.on('chat message', function(msg, nickname){
    $('#messages').append($('<li>').text(msg));
  });

  socket.on('disconnect', function(name){
    console.log(name)
    console.log('hello world')
    $('#status').append($('<h4>disconnected</h4>'));
  })




  // socket.on('message', function(data){
  //   insertMessage(data);
  // })
