document.getElementById("bienvenida").innerHTML = "<b>Bienvenido a la página de Albor Logistics</b>";

function mostrar() {
    let textoExtra = document.getElementById("extra");

    if (textoExtra.style.display === "none") {
        textoExtra.style.display = "block";
    } else {

        textoExtra.style.display = "none";
    }
}

function validar() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let resultado = document.getElementById("mensaje");

    if (nombre == "" || email == "") {

        resultado.innerHTML = "Faltan datos";
        resultado.style.color = "red"; 

    } else if (!email.includes("@") || !email.includes(".com")) {

        resultado.innerHTML = "Introduzca un correo valido";
        resultado.style.color = "red";

    } else {
        
        resultado.innerHTML = "Los datos son correctos.<br>El formulario puede enviarse.";
        resultado.style.color = "green";
    }
}