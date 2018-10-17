var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
const request = require('request')

app.use(express.static(__dirname + '/dist'))

app.get('/', function (req, res) {
  res.sendFile('./index.html')
})

app.post('/api/users', function (req, res) {
  console.log("POST DATA", req.body);
  // This is where we would add the user to the database
  // Then redirect to the root route
  res.redirect('/ChatRoom.js');
})


io.on('connection', function (socket) {
  console.log('a user connected')

  socket.on('chat message', function (msg) {
    console.log('message', msg)
    io.emit('chat message', msg)
  })

  socket.on('disconnect', function () {
    console.log('user disconnected')
  })
})

http.listen(8080, function () {
  console.log('listening on *:8080')
})