navigator.geolocation.getCurrentPosition(function (pos) {
  // console.log(pos.coords.latitude);
  // console.log(pos.coords.longitude);
  var lati = pos.coords.latitude;
  var longi = pos.coords.longitude;

  initMap(lati, longi);
});

function initMap(x, y) {
  const myLatLng = { lat: x, lng: y };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
