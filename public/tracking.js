var map;

var dronestate = {};
var dronespeed = [];

var markers = [];

function initMap() {
    var myLatLng = {
        lat: 12.363,
        lng: 77.044
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: myLatLng
    });
}

function addMarker(drone) {
   // console.log('called');
    var marker = new google.maps.Marker({
        position: drone.location,
        zoom: 5,
        label: drone.label,
        map: map
    });
    markers.push(marker);
}

function deleteMarkers() {

    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}


function drawMarkers(state) {

    deleteMarkers();

    for (var i in state) {

        drone = {
            label: i,
            location: {
                lat: state[i][2],
                lng: state[i][3]
            }
        };

        addMarker(drone);

    }

    updateActive();
}


function updateActive() {

var activeHTML = ' ';

for ( i in dronespeed ) {

//console.log("test...");
	activeHTML = activeHTML + ' <div class="button"> Drone ' + i + ' - ' +  dronespeed[i] + ' Mp/H </div> ';

}


document.getElementById('active').innerHTML = activeHTML;

}

    function distance_on_geoid(lat1, lon1, lat2, lon2) {

        // Convert degrees to radians
        lat1 = lat1 * M_PI / 180.0;
        lon1 = lon1 * M_PI / 180.0;

        lat2 = lat2 * M_PI / 180.0;
        lon2 = lon2 * M_PI / 180.0;

        // radius of earth in metres
        r = 6378100;


        rho1 = r * cos(lat1);
        z1 = r * sin(lat1);
        x1 = rho1 * cos(lon1);
        y1 = rho1 * sin(lon1);


        rho2 = r * cos(lat2);
        z2 = r * sin(lat2);
        x2 = rho2 * cos(lon2);
        y2 = rho2 * sin(lon2);


        dot = (x1 * x2 + y1 * y2 + z1 * z2);
        cos_theta = dot / (r * r);

        theta = acos(cos_theta);

        // Calculated Distance in Metres
        return r * theta;
    }

    var counter = 0;
    var socket = io.connect();

    //  draw the current state of all drone locations.

    socket.on('init', function(state) {


        dronestate = state;

        for (i in dronestate) {
            dronespeed[i] = 0.0000000000;
        }

         drawMarkers(state);


    });


  socket.on('update', function(data) {

        counter = counter + 1;

        if (dronestate[data[0]] === undefined) {

            dronestate[data[0]] = data;
            drawMarkers(dronestate);
        } else {

            var p1 = dronestate[data[0]];
            var p2 = data;


            dronestate[data[0]] = data;

            dist = distance_on_geoid(p1[2], p1[3], p2[2], p2[3]);

            time_s = (p2[1] - p1[1]) / 1000.0;

            speed_mps = dist / time_s;
            dronespeed[data[0]] = speed_mps;

            drawMarkers(dronestate);
        }

    });