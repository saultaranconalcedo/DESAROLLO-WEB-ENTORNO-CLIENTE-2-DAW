// Creo los objetos sueltos primero

var c1 = new Camion("1234ABC", "Volvo", "FH", 235000, "en_ruta");
var c2 = new Camion("5678DEF", "Scania", "R", 180000, "disponible");
var c3 = new Camion("9012GHI", "MAN", "TGX", 310000, "en_ruta");

var cond1 = new Conductor("11111111A", "Juan García", "600111222", 8, false);
var cond2 = new Conductor("22222222B", "Pedro López", "600333444", 5, true);
var cond3 = new Conductor("33333333C", "Ana Martín", "600555666", 10, false);

var r1 = new Ruta("R-01", "Jerez", "Madrid", 640);
var r2 = new Ruta("R-02", "Cádiz", "Málaga", 235);
var r3 = new Ruta("R-03", "Sevilla", "Valencia", 650);

// Relaciono los objetos metiendolos dentro de cada Viaje

var listaViajes = [
    new Viaje("VIA-001", c1, cond1, r1, "En ruta"),
    new Viaje("VIA-002", c2, cond2, r2, "Entregado"),
    new Viaje("VIA-003", c3, cond3, r3, "En ruta"),
    new Viaje("VIA-004", c2, cond1, r1, "Pendiente"),
    new Viaje("VIA-005", c1, cond2, r2, "Asignado"),
    new Viaje("VIA-006", c3, cond3, r3, "Incidencia")
];

// Muestra la lista de viajes que reciba

function mostrarViajes(arrayViajes) {
    var panel = document.getElementById("panelViajes");
    if (arrayViajes.length == 0) {
        panel.innerHTML = "<p>No se han encontrado viajes.</p>";
        return;
    }

    var html = "";
    for (var i = 0; i < arrayViajes.length; i++) {// Llamo al metodo de cada objeto Viaje
        html += arrayViajes[i].mostrarDetalle();
    }
    panel.innerHTML = html;
}

// Busca por codigo de viaje

function buscarPorCodigo(cod) {
    var res = [];
    for (var i = 0; i < listaViajes.length; i++) {
        if (listaViajes[i].codigo.toUpperCase() == cod.toUpperCase().trim()) {
            res.push(listaViajes[i]);
        }
    }
    return res;
}

// Filtra por nombre de conductor (accediendo a viaje.conductor.nombre)

function viajesPorConductor(nombre) {
    var res = [];
    var buscado = nombre.toLowerCase().trim();
    for (var i = 0; i < listaViajes.length; i++) {
        if (listaViajes[i].conductor.nombre.toLowerCase().indexOf(buscado) != -1) {
            res.push(listaViajes[i]);
        }
    }
    return res;
}

// Filtra por matricula de camion (accediendo a viaje.camion.matricula)
function viajesPorCamion(matricula) {
    var res = [];
    var buscado = matricula.toUpperCase().trim();
    for (var i = 0; i < listaViajes.length; i++) {
        if (listaViajes[i].camion.matricula == buscado) {
            res.push(listaViajes[i]);
        }
    }
    return res;
}

// Filtra por estado

function viajesPorEstado(estado) {
    var res = [];
    for (var i = 0; i < listaViajes.length; i++) {
        if (listaViajes[i].estado == estado) {
            res.push(listaViajes[i]);
        }
    }
    return res;
}

// Cuenta cuantos hay pendientes

function contarPendientes() {
    var cont = 0;
    for (var i = 0; i < listaViajes.length; i++) {
        if (listaViajes[i].estado == "Pendiente") {
            cont++;
        }
    }
    return cont;
}

// Calcula  los totales y pone el resumen

function mostrarResumen() {
    var pendientes = 0, asignados = 0, enRuta = 0, entregados = 0, incidencias = 0;

    for (var i = 0; i < listaViajes.length; i++) {
        var est = listaViajes[i].estado;
        if (est == "Pendiente") pendientes++;
        else if (est == "Asignado") asignados++;
        else if (est == "En ruta") enRuta++;
        else if (est == "Entregado") entregados++;
        else if (est == "Incidencia") incidencias++;
    }

    var html = "<b>RESUMEN OPERATIVO</b><br><br>";
    html += "Viajes totales: " + listaViajes.length + "<br>";
    html += "Pendientes: " + pendientes + "<br>";
    html += "Asignados: " + asignados + "<br>";
    html += "En ruta: " + enRuta + "<br>";
    html += "Entregados: " + entregados + "<br>";
    html += "Incidencias: " + incidencias;

    document.getElementById("cajaResumen").innerHTML = html;
}

window.onload = function() {
    mostrarResumen();
    mostrarViajes(listaViajes);

    document.getElementById("btnTodos").onclick = function() {
        document.getElementById("aviso").innerHTML = "";
        mostrarViajes(listaViajes);
    };

    document.getElementById("btnEnRuta").onclick = function() {
        document.getElementById("aviso").innerHTML = "";
        mostrarViajes(viajesPorEstado("En ruta"));
    };

    document.getElementById("btnEntregados").onclick = function() {
        document.getElementById("aviso").innerHTML = "";
        mostrarViajes(viajesPorEstado("Entregado"));
    };

    document.getElementById("btnPendientes").onclick = function() {
        document.getElementById("aviso").innerHTML = "Viajes pendientes actualmente: " + contarPendientes();
    };

    document.getElementById("btnBuscCodigo").onclick = function() {
        var cod = document.getElementById("buscCodigo").value;
        document.getElementById("aviso").innerHTML = "";
        mostrarViajes(buscarPorCodigo(cod));
    };

    document.getElementById("btnBuscCond").onclick = function() {
        var nom = document.getElementById("buscConductor").value;
        document.getElementById("aviso").innerHTML = "";
        mostrarViajes(viajesPorConductor(nom));
    };

    document.getElementById("btnBuscCam").onclick = function() {
        var mat = document.getElementById("buscCamion").value;
        document.getElementById("aviso").innerHTML = "";
        mostrarViajes(viajesPorCamion(mat));
    };
};
