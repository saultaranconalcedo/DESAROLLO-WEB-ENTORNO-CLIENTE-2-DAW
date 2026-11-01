let intentos = 0;             
const intentos_max = 3;  //se usa coonst porque este valoe no cambia     
let esValido = false;   //empieza en false porque el usuario no empieza identificado       
let codigoIngresado = "";    

// Se ejecuta obligatoriamente al menos una vez y solicita el código repetidamenten hasta que el usuario introduzca un código válido O alcance el máximo de 3 intentos.
do {
    intentos++; //Suma 1 al contador de intentos cada vez que se ejecute

    // Solicitamos el codigo al usuario mediante prompt que muestra una ventana emergent
    codigoIngresado = prompt("Intento " + intentos + " de " + intentos_max + ":\nIntroduce tu codigo de empleado");

    //Comprobamos si el código coincide con alguno de los tres
    if (codigoIngresado === "ALBOR001" || codigoIngresado === "ALBOR002" || codigoIngresado === "ALBOR003") {
        esValido = true; // El código es correcto salimos del bucle
    } else {
        //alert es como el prompt, muestra un aviso emergente.
        alert("No valido. " + (intentos_max - intentos) + " intentos disponibles.");
    }

} while (!esValido && intentos < intentos_max);


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
    mensaje += "<hr>";
    mensaje += "<p><b>Empleado:</b> " + codigoIngresado + "</p>";
    mensaje += "<p><b>Perfil:</b> " + perfil + "</p>";
    mensaje += "<p><b>Intentos utilizados:</b> " + intentos + "</p>";

} else {
    // Mensaje de bloqueo si pierdes los 3 intentos
    mensaje += "<h2>ACCESO BLOQUEADO</h2>";
    mensaje += "<p>Se ha superado el numero maximo de intentos.</p>";
}

let contenedor = document.getElementById("contenedor-acceso");
contenedor.innerHTML = mensaje;