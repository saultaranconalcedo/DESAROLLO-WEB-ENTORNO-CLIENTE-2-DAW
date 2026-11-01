function calcular() {

let distancia = Number(document.getElementById("distancia").value);
let consumo = Number(document.getElementById("consumo").value);
let precio_combustible = Number(document.getElementById("precio_combustible").value);
let coste_peajes = Number(document.getElementById("coste_peajes").value);

if (distancia <= 0 || consumo <= 0 || precio_combustible <= 0 || coste_peajes <= 0) {
    document.getElementById("mensaje_error").innerHTML = "Los datos tienen que ser mayores que 0";
    return; 
}

document.getElementById("mensaje_error").innerHTML = "";

let litros = (distancia * consumo) / 100;
let costeCombustible = litros * precio_combustible;
let costeTotal = costeCombustible + coste_peajes;
document.getElementById("litros").innerHTML = litros;
document.getElementById("coste_combustible").innerHTML = costeCombustible;
document.getElementById("coste_total").innerHTML = costeTotal;



}