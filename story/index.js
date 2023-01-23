/*
 * This demo illustrates the coordinate system used to display map tiles in the
 * API.
 *
 * Tiles in Google Maps are numbered from the same origin as that for
 * pixels. For Google's implementation of the Mercator projection, the origin
 * tile is always at the northwest corner of the map, with x values increasing
 * from west to east and y values increasing from north to south.
 *
 * Try panning and zooming the map to see how the coordinates change.
 */

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4
      ,
      center: {lat: 39.9042, lng: 116.4074}
    });
    var markerA = new google.maps.Marker({
        position: {lat: 39.9042, lng: 116.4074},
        
        map: map,
        label: {
          text: 'A',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold'
        },
        title: 'Marker A: Beijing, China'
      });
      
      var markerD = new google.maps.Marker({
        position: {lat: 37.7749, lng: -122.4194},
        map: map,
        label: {
          text: 'D',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold'
        },
        title: 'Marker D: Los Angeles, USA'
      });
      
      var markerC = new google.maps.Marker({
        position: {lat: 41.3851, lng: 2.1734},
        map: map,
        label: {
          text: 'C',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold'
        },
        title: 'Marker C: Barcelona,Spain'
      });
      var markerB = new google.maps.Marker({
        position: {lat: 20.5937, lng: 78.9629},
        label: 'India',
        map: map,
        label: {
          text: 'B',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold'
        },
        title: 'Marker B India'
      });

      var silkRouteCoordinates = [
        {lat: 39.9042, lng: 116.4074},
        {lat: 20.5937, lng: 78.9629},
        {lat: 41.3851, lng: 2.1734},
        {lat: 37.7749, lng: -122.4194},
        
      ];
      
      var silkRoutePath = new google.maps.Polyline({
        path: silkRouteCoordinates,
        geodesic: true,
        strokeColor: '#ff0000',
        strokeOpacity: 1.0,
        strokeWeight: 1.5
      });
      var silkRoutePath = new google.maps.Polyline({
        path: silkRouteCoordinates,
        geodesic: true,
        strokeColor: '#ff0000',
        strokeOpacity: 1.0,
        strokeWeight: 1.5,
        icons: [{
          icon: {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
          },
          offset: '0',
          repeat: '20px'
        }]
      });
      
      silkRoutePath.setMap(map);
      // Create the info window for marker A
    var infowindowA = new google.maps.InfoWindow({
      content: "Beijing, China -The Silk route network began with the Han dynasty's (China) expansion into Central Asia around 114 BCE, which largely pacified the once untamed region."
  });
  markerA.addListener('click', function() {
      infowindowA.open(map, markerA);
  });
  // Create the info window for marker B
 var infowindowB= new google.maps.InfoWindow({
  content: "India played an important role in the historical Silk Road, as it was a major source of valuable goods such as spices, textiles, and precious stones. Indian merchants and traders were involved in the trade along the Silk Road, which connected Asia and the Mediterranean. "
});
markerB.addListener('click', function() {
  infowindowB.open(map, markerB);
});

  // Create the info window for marker C
  var infowindowC = new google.maps.InfoWindow({
      content: "Europe's contribution to the expansion of the Silk Road came from the merchants and traders that controlled key ports, explorers that opened new trade routes, the European crusaders who established trading posts and the influence of the Silk Road on European art, culture and economy. "
  });
  markerC.addListener('click', function() {
      infowindowC.open(map, markerC);
  });
   // Create the info window for marker D
   var infowindowD = new google.maps.InfoWindow({
    content: "The Silk Road predates the existence of the United States, as it was a network of trade routes that connected the East and West during ancient and medieval times."
});
markerC.addListener('click', function() {
    infowindowD.open(map, markerD);
});
 

    const coordMapType = new CoordMapType(new google.maps.Size(256, 256));
  
    map.overlayMapTypes.insertAt(0, coordMapType);
    
  }
  
  window.initMap = initMap;





