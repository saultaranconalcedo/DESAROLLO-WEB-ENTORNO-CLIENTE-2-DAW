var camion1 = new Camion("1234ABC", "Volvo", "FH", 235000, "disponible");
var camion2 = new Camion("5678DEF", "Scania", "R", 180000, "en_ruta");
var camion3 = new Camion("9012GHI", "MAN", "TGX", 310000, "disponible");

var conductor1 = new Conductor("12345678A", "Juan García", "600111222", 12, false);
var conductor2 = new Conductor("23456789B", "Pedro López", "600222333", 8, true);
var conductor3 = new Conductor("34567890C", "Marta Ruiz", "600333444", 5, true);

var ruta1 = new Ruta("R-001", "Jerez", "Madrid", 640);
var ruta2 = new Ruta("R-002", "Cádiz", "Málaga", 235);
var ruta3 = new Ruta("R-003", "Sevilla", "Valencia", 654);
var ruta4 = new Ruta("R-004", "Córdoba", "Granada", 170);

// Cada viaje enlaza una instancia de camión, conductor y ruta.
var viajes = [
    new Viaje("VIA-001", camion1, conductor1, ruta1, "En ruta"),
    new Viaje("VIA-002", camion2, conductor2, ruta2, "Entregado"),
    new Viaje("VIA-003", camion3, conductor3, ruta3, "Pendiente"),
    new Viaje("VIA-004", camion1, conductor2, ruta4, "Asignado"),
    new Viaje("VIA-005", camion2, conductor1, ruta3, "Incidencia"),
    new Viaje("VIA-006", camion3, conductor3, ruta1, "Pendiente"),
    new Viaje("VIA-007", camion1, conductor1, ruta2, "En ruta"),
    new Viaje("VIA-008", camion2, conductor2, ruta4, "Entregado")
];

function mostrarViajes(lista) {
    var texto = "";
    var i;
    if (lista.length === 0) {
        texto = "No se han encontrado viajes.";
    } else {
        for (i = 0; i < lista.length; i++) {
            texto = texto + lista[i].mostrarInfo();
        }
    }
    document.getElementById("viajes").innerHTML = texto;
}

function buscarViajePorCodigo(codigo) {
    var i;
    for (i = 0; i < viajes.length; i++) {
        if (viajes[i].codigo.toUpperCase() === codigo.toUpperCase()) {
            return viajes[i];
        }
    }
    return null;
}

function mostrarViajePorCodigo(codigo) {
    var viaje = buscarViajePorCodigo(codigo);
    if (viaje === null) {
        document.getElementById("viajes").innerHTML = "No se ha encontrado ese viaje.";
    } else {
        mostrarViajes([viaje]);
    }
}

function mostrarViajesDeConductor(datoConductor) {
    var encontrados = [];
    var dato = datoConductor.toLowerCase();
    var i;
    if (dato === "") {
        mostrarViajes([]);
        return;
    }
    for (i = 0; i < viajes.length; i++) {
        if (viajes[i].conductor.dni.toLowerCase() === dato ||
            viajes[i].conductor.nombre.toLowerCase().indexOf(dato) !== -1) {
            encontrados.push(viajes[i]);
        }
    }
    mostrarViajes(encontrados);
}

function mostrarViajesDeCamion(matricula) {
    var encontrados = [];
    var i;
    for (i = 0; i < viajes.length; i++) {
        if (viajes[i].camion.matricula.toUpperCase() === matricula.toUpperCase()) {
            encontrados.push(viajes[i]);
        }
    }
    mostrarViajes(encontrados);
}

function mostrarViajesEnRuta() {
    var encontrados = [];
    var i;
    for (i = 0; i < viajes.length; i++) {
        if (viajes[i].estado === "En ruta") {
            encontrados.push(viajes[i]);
        }
    }
    mostrarViajes(encontrados);
}

function mostrarViajesEntregados() {
    var encontrados = [];
    var i;
    for (i = 0; i < viajes.length; i++) {
        if (viajes[i].estado === "Entregado") {
            encontrados.push(viajes[i]);
        }
    }
    mostrarViajes(encontrados);
}

function contarViajesPendientes() {
    var cantidad = 0;
    var i;
    for (i = 0; i < viajes.length; i++) {
        if (viajes[i].estado === "Pendiente") {
            cantidad++;
        }
    }
    document.getElementById("viajes").innerHTML =
        "<p>Viajes pendientes: " + cantidad + "</p>";
}

function mostrarResumen() {
    var pendientes = 0;
    var asignados = 0;
    var enRuta = 0;
    var entregados = 0;
    var incidencias = 0;
    var i;

    for (i = 0; i < viajes.length; i++) {
        if (viajes[i].estado === "Pendiente") {
            pendientes++;
        } else if (viajes[i].estado === "Asignado") {
            asignados++;
        } else if (viajes[i].estado === "En ruta") {
            enRuta++;
        } else if (viajes[i].estado === "Entregado") {
            entregados++;
        } else if (viajes[i].estado === "Incidencia") {
            incidencias++;
        }
    }

    document.getElementById("resumen").innerHTML =
        "<p>Viajes totales: " + viajes.length + "</p>" +
        "<p>Pendientes: " + pendientes + " | Asignados: " + asignados +
        " | En ruta: " + enRuta + "</p>" +
        "<p>Entregados: " + entregados + " | Incidencias: " + incidencias + "</p>";
}

document.getElementById("mostrarTodos").onclick = function() {
    mostrarViajes(viajes);
};

document.getElementById("mostrarEnRuta").onclick = function() {
    mostrarViajesEnRuta();
};

document.getElementById("mostrarEntregados").onclick = function() {
    mostrarViajesEntregados();
};

document.getElementById("contarPendientes").onclick = function() {
    contarViajesPendientes();
};

document.getElementById("buscarCodigo").onclick = function() {
    mostrarViajePorCodigo(document.getElementById("codigoBuscar").value.trim());
};

document.getElementById("buscarConductor").onclick = function() {
    mostrarViajesDeConductor(document.getElementById("conductorBuscar").value.trim());
};

document.getElementById("buscarCamion").onclick = function() {
    mostrarViajesDeCamion(document.getElementById("camionBuscar").value.trim());
};

window.onload = function() {
    mostrarResumen();
    mostrarViajes(viajes);
};
