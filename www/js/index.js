var app = {
    initialize: function(){
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    

onDeviceReady: function() {
    alert("onDeviceReady: function {...");
    this.receivedEvent('deviceready');
    navigator.geolocation.getCurrentPosition(
        this.onGeolocationSuccess,
        this.onGeolocationError,
        { timeout: 120000});   
},

//Update DOM on a recivied event
receivedEvent: function() {
},

onGeolocationSuccess: function(position) {
    alert("onGeolocationSuccess: function(position) {...");
    alert('Latitude: '           + position.coords.latitude          + '\n' +
          'Longitude: '          + position.coords.longitude         + '\n' +
          'Altitude: '           + position.coords.altitude          + '\n' +
          'Accurency: '          + position.coords.accuracy         + '\n' +
          'Altitude Accurency: ' + position.coords.altitudeAccuracy + '\n' +
          'Heading: '            + position.coords.heading           + '\n' +
          'Speed: '              + position.coords.speed             + '\n' +
          'Timestamp: '           + position.coords.timestamp        + '\n');

          document.getElementById("lat").value = position.coords.latitude;
          document.getElementById("lng").value = position.coords.longitude;
    },

    onGeolocationError: function(err) {
        alert("onGeolocationError:function(position) {...");
        alert(err.code +" "+err.messege);
    }
};

app.initialize();