function validarFormulario() {

let codigo = document.getElementById("codigo").value;
let matricula = document.getElementById("matricula").value;
let conductor = document.getElementById("conductor").value;
let origen = document.getElementById("origen").value;
let destino = document.getElementById("destino").value;
let distancia = Number(document.getElementById("distancia").value);

let mensaje = document.getElementById("mensaje");

if (codigo === ""|| matricula === ""|| conductor === ""|| origen === ""|| destino === ""|| distancia === ""){
mensaje.innerHTML = "Los campos son obligatorio";
mensaje.style.color = "red";
return;
}    

if (distancia <= 0) {
mensaje.innerHTML = "La distancia tiene que ser mayor a 0 km";
mensaje.style.color = "red";
return;
} 

if (matricula.length !== 7) {
    mensaje.innerHTML = "La matrícula debe tener 7 caracteres";
    mensaje.style.color = "red";
    return;
}

if (codigo === "") {
    mensaje.innerHTML = "El codigo de viaje no puede estar vacio";
    mensaje.style.color = "red";
    return;
}

if (origen === destino) {
    mensaje.innerHTML = "El origen no puede ser igual que el destino";
    mensaje.style.color = "red";
    return;
}

mensaje.innerHTML = "Todos los datos son correctos<br>El formulario puede enviarse";
mensaje.style.color = "green";

}