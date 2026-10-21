function clasificarViaje() {

let codigo = document.getElementById("codigo").value;
let matricula = document.getElementById("matricula").value;
let origen = document.getElementById("origen").value;
let destino = document.getElementById("destino").value;
let estado = document.getElementById("estado").value;

let resultado = document.getElementById("resultado");

let mensaje = "";

    switch (estado) {
        case "pendiente":
            mensaje = "El viaje todavía no ha sido asignado.";
        break;

        case "asignado":
            mensaje = "El viaje tiene recursos asignados y está preparado.";
        break;

        case "en_ruta":
            mensaje = "El camión se encuentra realizando el trayecto.";
        break;

        case "entregado":
            mensaje = "El viaje ha finalizado correctamente.";
        break;

        case "incidencia":
            mensaje = "El viaje requiere atención del departamento de operaciones.";
        break;


        default: //Si se introduce un estado no identificado.
            mensaje = "Estado de viaje no reconocido.";
        break;
    }

    resultado.innerHTML = "Viaje " + codigo + " (" + origen + " - " + destino + "): <br>" + mensaje;

}