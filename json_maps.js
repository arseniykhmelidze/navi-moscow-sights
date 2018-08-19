    var map = new Object();
    var i;
    var location_name;

    function initMap() // Initializing map
        {    
           map = new google.maps.Map(document.getElementById('map_area'), 
            {
                center: {lat: 55.752023, lng: 37.617499}, // Moscow Kremlin
                zoom: 10
             });
            
            map.data.loadGeoJson('moscow_locations.json'); // Loading JSON Layers
            
                    
            var infowindow = new google.maps.InfoWindow(
            {
                content: ""
            });
            
    //////////////// CURSOR ////////////////////////////////////////////////////////////////////////////////////
     
            map.setOptions({ draggableCursor: 'default' });  // custom cursor

            
        } // End of initMap
