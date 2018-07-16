

var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 10
	  });
  }

var socket = io.connect();

socket.on('message', function(data) {
console.log(data);
$scope.test = data;

});



