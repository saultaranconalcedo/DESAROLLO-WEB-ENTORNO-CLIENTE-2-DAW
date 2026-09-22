let distancia = 530;
let consumo = 29;
let precio_combustible = 1.42;
let coste_peajes = 38;


let litros = (distancia * consumo) / 100;
let costeCombustible = litros * precio_combustible;
let costeTotal = costeCombustible + coste_peajes;

document.getElementById("distancia").innerHTML = distancia;
document.getElementById("consumo").innerHTML = consumo;
document.getElementById("precio_combustible").innerHTML = precio_combustible;
document.getElementById("coste_peajes").innerHTML = coste_peajes;

document.getElementById("litros").innerHTML = litros;
document.getElementById("coste_combustible").innerHTML = costeCombustible;
document.getElementById("coste_total").innerHTML = costeTotal;