function combustibleNecesario(distancia, consumo) {
    return distancia * consumo / 100;
}

function costeCombustible(litros, precio) {
    return litros * precio;
}

function costeTotal(combustible, peajes, adicionales) {
    return combustible + peajes + adicionales;
}

function costePorKilometro(costeTotal, distancia) {
    return costeTotal / distancia;
}

function formatoNumero(numero, decimales) {
    return numero.toFixed(decimales).replace(".", ",");
}

document.getElementById("calcular").onclick = function() {
    var distancia = parseFloat(document.getElementById("distancia").value);
    var consumo = parseFloat(document.getElementById("consumo").value);
    var precio = parseFloat(document.getElementById("precio").value);
    var peajes = parseFloat(document.getElementById("peajes").value);
    var adicionales = parseFloat(document.getElementById("adicionales").value);
    var error = document.getElementById("error");

    if (isNaN(distancia) || isNaN(consumo) || isNaN(precio) ||
        isNaN(peajes) || isNaN(adicionales) || distancia <= 0 ||
        consumo < 0 || precio < 0 || peajes < 0 || adicionales < 0) {
        error.innerHTML = "Revisa los datos. La distancia debe ser mayor que cero y los demás valores no pueden ser negativos.";
        document.getElementById("resultado").innerHTML = "";
        return;
    }

    error.innerHTML = "";
    var litros = combustibleNecesario(distancia, consumo);
    var costeDelCombustible = costeCombustible(litros, precio);
    var total = costeTotal(costeDelCombustible, peajes, adicionales);
    var porKilometro = costePorKilometro(total, distancia);

    document.getElementById("resultado").innerHTML =
        "<h3>ALBOR LOGISTICS - CALCULADORA DE COSTES</h3>" +
        "<p>Distancia: " + formatoNumero(distancia, 0) + " km | Consumo: " +
        formatoNumero(consumo, 0) + " l/100 km | Precio combustible: " +
        formatoNumero(precio, 2) + " €/l</p>" +
        "<p>Combustible necesario: " + formatoNumero(litros, 0) +
        " litros | Coste combustible: " + formatoNumero(costeDelCombustible, 2) + " €</p>" +
        "<p>Peajes: " + formatoNumero(peajes, 2) + " € | Otros costes: " +
        formatoNumero(adicionales, 2) + " €</p>" +
        "<p><strong>COSTE TOTAL: " + formatoNumero(total, 2) + " €</strong></p>" +
        "<p>Coste por kilómetro: " + formatoNumero(porKilometro, 2) + " €/km</p>";
};

window.onload = function() {
    document.getElementById("calcular").onclick();
};
