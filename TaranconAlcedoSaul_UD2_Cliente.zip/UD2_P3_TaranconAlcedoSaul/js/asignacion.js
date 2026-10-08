let viajespendientes = 8;
let viajeactual = 1;

let viajesprocesados = 0;
let viajescorrectos = 0;
let viajesincidencia = 0;

let mensaje = "";

while (viajespendientes > 0){

viajesprocesados++;
// nos da un numero entre 0 y 1 y hay un 50% de que el viaje sea correcto.
let aleatorio = Math.random();

if (aleatorio <= 0.5){
    viajescorrectos++;
    mensaje += "<p>Procesando viaje " + viajeactual + "... <b>Resultado:</b> <span style='color:green;'>Correcto</span></p>";

} else {
        viajesincidencia++;
        mensaje += "<p>Procesando viaje " + viajeactual + "... <b>Resultado:</b> <span style='color:red;'>Incidencia</span></p>";
}


//restamos los pendientes y sumamos los actuales
viajespendientes --; 
viajeactual ++;
}
mensaje += "<h3>Todos los viajes han sido procesados.</h3>";

mensaje += "<center><h2>Resumen:</h2></center>";
mensaje += "<p><b>Viajes procesados:</b> " + viajesprocesados + "</p>";
mensaje += "<p><b>Viajes correctos:</b> " + viajescorrectos + "</p>";
mensaje += "<p><b>Viajes con incidencia:</b> " + viajesincidencia + "</p>";

let contenedor = document.getElementById("contenedor-viajes");
contenedor.innerHTML = mensaje;