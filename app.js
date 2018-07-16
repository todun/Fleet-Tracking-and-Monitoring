// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 80;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

// Location Tracking

var dronestate = {};


dronestate = {

	  1 : [1,'1.0.0', 12.97 , 77.59]
	, 2 : [2,'1.0.0', 12.59 , 77.644]
	, 3 : [3,'1.0.0', 12.78 , 77.78]
}

counter = 0;

io.on('connection', function(socket) {

   	socket.emit('init' , dronestate);

	socket.on('update',function(data) {

		counter = counter + 1;

		console.log('event rec' , counter);

        //socket.broadcast.emit('message' , dronestate[2]);

	});

});
