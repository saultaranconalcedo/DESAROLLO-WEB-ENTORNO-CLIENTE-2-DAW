// Calcula los litros gastados haciendo una regla de tres simple
function combustibleNecesario(distancia, consumo) {
    return (distancia * consumo) / 100;
}

// Multiplica los litros por lo que vale cada litro
function costeCombustible(litros, precio) {
    return litros * precio;
}

// Suma todos los gastos del viaje
function costeTotal(combustible, peajes, adicionales) {
    return combustible + peajes + adicionales;
}

// Divide el total entre los kilometros para sacar la media
function costePorKilometro(total, distancia) {
    return total / distancia;
}

window.onload = function() {

    document.getElementById("btnCalcular").onclick = function() {
        
        // Uso parseFloat para pasar el texto de los inputs a numeros con decimales
        var dist = parseFloat(document.getElementById("distancia").value);
        var cons = parseFloat(document.getElementById("consumo").value);
        var prec = parseFloat(document.getElementById("precio").value);
        var peaj = parseFloat(document.getElementById("peajes").value);
        var adic = parseFloat(document.getElementById("adicional").value);

        // isNaN comprueba si algun campo se ha quedado vacio o no es un numero
        if (isNaN(dist) || isNaN(cons) || isNaN(prec) || isNaN(peaj) || isNaN(adic) || dist <= 0) {
            alert("Revisa los datos, todos tienen que ser números válidos.");
            return;
        }

        // Llamo a cada funcion paso a paso guardando lo que me devuelve
        var litros = combustibleNecesario(dist, cons);
        var gastoGasoil = costeCombustible(litros, prec);
        var total = costeTotal(gastoGasoil, peaj, adic);
        var costeKm = costePorKilometro(total, dist);

        // .toFixed(2) redondea a 2 decimales para que parezcan euros de verdad
        var html = "<p>Distancia: " + dist + " km<br>";
        html += "Consumo: " + cons + " l/100 km<br>";
        html += "Precio combustible: " + prec.toFixed(2) + " €/l</p>";
        html += "<p>Combustible necesario: " + litros.toFixed(0) + " litros<br>";
        html += "Coste combustible: " + gastoGasoil.toFixed(2) + " €</p>";
        html += "<p>Peajes: " + peaj.toFixed(2) + " €<br>";
        html += "Otros costes: " + adic.toFixed(2) + " €</p>";
        html += "<p><b>COSTE TOTAL: " + total.toFixed(2) + " €</b></p>";
        html += "<p>Coste por kilómetro: " + costeKm.toFixed(2) + " €/km</p>";

        var caja = document.getElementById("cajaResultado");
        caja.innerHTML = html;
        caja.style.display = "block";
    };
};
