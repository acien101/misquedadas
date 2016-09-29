//console.log('Leaflet - map - construction - clickable');
function onMapClick(e) {
   //console.log('Leaflet - map - construction - onMapClick');
   alert("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);
function ponerVista(lat,long,nombre){
     //console.log('Leaflet - map - vista - start: map, lat, long, nombre = '+mymap+', '+lat+', '+long+', '+nombre);
     //console.log('Leaflet - map - construction - center');
     mymap.setView(new L.LatLng(lat,long), initZoom);
     //console.log('Leaflet - map - construction - add marker');
     var marker = L.marker([lat, long]).addTo(mymap);
     
/*
     //console.log('Leaflet - map - construction - add circle');
     var circle = L.circle([lat + 51.508 - 51.505, long + (-0.11) -(-0.09)], 500, {
         color: 'red', fillColor: '#f03', fillOpacity: 0.5
     }).addTo(mymap);
     
     //console.log('Leaflet - map - construction - add polygon');
     var polygon = L.polygon([
         [lat + 51.509 - 51.505, long +  (-0.08) - (-0.09)],
         [lat + 51.503 - 51.505, long +  (-0.06) - (-0.09)],
         [lat + 51.51  - 51.505, long + (-0.047) - (-0.09)]
     ]).addTo(mymap);
*/     
     //console.log('Leaflet - map - construction - add popup');
     var popup = L.popup()
         .setLatLng([lat, long]) .setContent(nombre) .openOn(mymap);
};
// ponerVista(initLat,initLong,"ETSIT-UPM");
