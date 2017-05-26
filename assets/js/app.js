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

	var tarifa = document.getElementById("tarifa");
  var partida = document.getElementById("partida");
  var llegada = document.getElementById("llegada");
  new google.maps.places.Autocomplete(partida);
  new google.maps.places.Autocomplete(llegada);

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  var calculateAndDisplayRoute = function(directionsService, directionsDisplay){
    directionsService.route({
      origin: partida.value,
      destination: llegada.value,
      travelMode: 'DRIVING'
    }, function(response,status){
      if(status === 'OK'){
        var distancia = Number((response.routes[0].legs[0].distance.text.replace("km","")).replace(",","."));
        tarifa.classList.remove("none");
				var costo = distancia*1.75;
        if(costo>4){
          tarifa.innerHTML = "S/. " + parseInt(costo);
        } else {
					tarifa.innerHTML = "S/. 4";
				}
        console.log(response.routes[0].legs[0].distance.text);
        directionsDisplay.setDirections(response);
      } else {
        window.alert("Houston, no hay ruta");
      }
    });
  }

  directionsDisplay.setMap(map);
  var trazarRuta = function(){
    calculateAndDisplayRoute(directionsService,directionsDisplay);
  };
  document.getElementById("trazar-ruta").addEventListener("click",trazarRuta);


  function find(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }

    document.getElementById("encuentrame").addEventListener("click",find);

    var latitud,longitud,miUbicacion;
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
