var mymap = L.map('mapid').setView([41.386943, 2.170036], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmxhYW54IiwiYSI6ImNrYmdhMnBhNDEzZzYycnM3dGo1b3VvYmkifQ.3y2Q8T7j3DmMnjfA1oclXQ'
}).addTo(mymap);

var marker = L.marker([41.386977, 2.166005]).addTo(mymap);

// var circle = L.circle([41.386977, 2.166005], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 20
// }).addTo(mymap);

// var polygon = L.polygon([
//     [41.386977, 2.166005],
//     [41.39, 2.166005],
//     [41.39, 2.167],
//     [41.386977, 2.167]
// ]).addTo(mymap);

marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante mediterráneo<br> Carrer de Balmes, 16, 08007 Barcelona");
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup()
//     .setLatLng([41.386977, 2.166005])
//     .setContent("<b>Restaurant Centfocs</b><br>Restaurante mediterráneo<br> Carrer de Balmes, 16, 08007 Barcelona")
//     .openOn(mymap);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);