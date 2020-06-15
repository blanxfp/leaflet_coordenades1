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

marker.bindPopup("<b>Restaurant Centfocs</b><br>Restaurante mediterráneo<br> Carrer de Balmes, 16, 08007 Barcelona");
