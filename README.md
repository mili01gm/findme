# Find Me!

Proyecto de práctica para la aplicación del API de Google Maps.


### Bootstrap

El framework de css utilizado fue Bootsrap

En este ejercicio se está usando el Grid de Bootsrap y el Formulario Inline, mediante el cual se solicitarán los puntos de inicio y destino para aplicar el mapa.

### Javascript HTML Google Maps API

El API de Google Maps nos permite colocar y utilizar el mapa de Google para nuestra web.

Para utilizar el API colocamos el script indicado por Google.

```HTML
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrHes4ltO64jvQqDtwIlPjQFsuVGWHrQU&callback=initMap&libraries=places"></script>

```

Y para colocar el mapa utilizamos un div con el ID "mapa".

```HTML
    <div class="row">
      <div id="mapa" class="col-md-12"></div>
    </div>

```
Para la aplicación del API utilizamos Javascript.
