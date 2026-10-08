let intentos = 0;             
const MAX_INTENTOS = 3;       
let esValido = false;         
let codigoIngresado = "";    

// Se ejecuta obligatoriamente al menos una vez y solicita el código repetidamenten hasta que el usuario introduzca un código válido O alcance el máximo de 3 intentos.
do {
    intentos++; //Suma 1 al contador de intentos cada vez que se ejecute

    // Solicitamos el código mediante la ventana emergente prompt()
    codigoIngresado = prompt("Intento " + intentos + " de " + MAX_INTENTOS + ":\nIntroduce tu codigo de empleado");

    //Comprobamos si el código coincide con alguno de los tres
    if (codigoIngresado === "ALBOR001" || codigoIngresado === "ALBOR002" || codigoIngresado === "ALBOR003") {
        esValido = true; // El código es correcto, marcamos como válido para salir del bucle
    } else {
        alert("Codigo incorrecto. Te quedan " + (MAX_INTENTOS - intentos) + " intentos.");
    }

} while (!esValido && intentos < MAX_INTENTOS);


let mensaje = "";

if (esValido) {

    let perfil = "";

    switch (codigoIngresado) {
        case "ALBOR001":
            perfil = "Administrador";
            break;
        case "ALBOR002":
            perfil = "Operador";
            break;
        case "ALBOR003":
            perfil = "Gestor de trafico";
            break;
        default:
            perfil = "Desconocido";
    }

    mensaje += "<h2>ACCESO AUTORIZADO</h2>";
    mensaje += "<p><b>Bienvenido al panel de operaciones.</b></p>";
    mensaje += "<hr>";
    mensaje += "<p><b>Empleado:</b> " + codigoIngresado + "</p>";
    mensaje += "<p><b>Perfil:</b> " + perfil + "</p>";
    mensaje += "<p><b>Intentos utilizados:</b> " + intentos + "</p>";

} else {
    // Mensaje de bloqueo si pierdes los 3 intentos
    mensaje += "<h2>ACCESO BLOQUEADO</h2>";
    mensaje += "<p><b>Se ha superado el numero maximo de intentos.</b></p>";
    mensaje += "<p><b>Intentos utilizados:</b> " + intentos + "</p>";
}

let contenedor = document.getElementById("contenedor-acceso");
contenedor.innerHTML = mensaje;