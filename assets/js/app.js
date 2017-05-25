function initMap() {
  var labLima = {lat:-12.1191427, lng:-77.0349046};
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 18,
    center: labLima
  });
  var marker = new google.maps.Marker({
    position: labLima,
    map: map
  });

  function find(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }

    document.getElementById("encuentrame").addEventListener("click",find);

    var latitud,longitud;
    var funcionExito = function(position){
      latitud = position.coords.latitude;
      longitud = position.coords.longitude;
    }
    var miUbicacion = new google.maps.Marker({
      position: {lat:latitud, lng:longitud},
      map: map
    });

    map.setZoom(18);
    map.setCenter({lat:latitud,lng:longitud});
  }

  var funcionError = function(error){
    alert("Houston, tenemos un problema");
  }
}
