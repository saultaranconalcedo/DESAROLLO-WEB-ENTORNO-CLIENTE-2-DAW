// Creo los 5 camiones usando 'new' y los meto en un array

var flota = [
    new Camion("1234ABC", "Volvo", "FH", 2021, 235000, "disponible"),
    new Camion("5678DEF", "Scania", "R", 2022, 180000, "en_ruta"),
    new Camion("9012GHI", "MAN", "TGX", 2019, 310000, "mantenimiento"),
    new Camion("3456JKL", "Mercedes", "Actros", 2023, 95000, "disponible"),
    new Camion("7890MNO", "Iveco", "S-Way", 2020, 260000, "en_ruta")
];

// Pinta una tabla HTML con la lista de camiones que le pase

function mostrarCamiones(lista) {
    var div = document.getElementById("contenedorTabla");
    if (lista.length == 0) {
        div.innerHTML = "<p>No hay camiones que mostrar.</p>";
        return;
    }

    var html = "<table>";
    html += "<tr><th>Matrícula</th><th>Modelo</th><th>Kilómetros</th><th>Estado</th><th>Revisión</th></tr>";

    for (var i = 0; i < lista.length; i++) {
        var c = lista[i];

        // Llamo al metodo del propio objeto para ver si le toca taller
        var aviso = c.necesitaMantenimiento() ? "Sí" : "No";

        html += "<tr>";
        html += "<td>" + c.matricula + "</td>";
        html += "<td>" + c.marca + " " + c.modelo + "</td>";
        html += "<td>" + c.kilometros + "</td>";
        html += "<td>" + c.estado + "</td>";
        html += "<td>" + aviso + "</td>";
        html += "</tr>";
    }

    html += "</table>";
    div.innerHTML = html;
}

// Busca un camion exacto por su matricula
function buscarPorMatricula(mat) {
    var matMayus = mat.toUpperCase().trim();
    for (var i = 0; i < flota.length; i++) {
        if (flota[i].matricula == matMayus) {
            return [flota[i]]; // Lo devuelvo dentro de un array para que mostrarCamiones lo pinte igual
        }
    }
    return [];
}
// Filtra los camiones segun el estado que le pida

function filtrarPorEstado(estadoBuscado) {
    var resultado = [];

    for (var i = 0; i < flota.length; i++) {
        if (flota[i].estado == estadoBuscado) {
        resultado.push(flota[i]);
        }
    }
    return resultado;
}

// Cuenta cuantos estan en el taller
function contarMantenimiento() {
    var contador = 0;

    for (var i = 0; i < flota.length; i++) {
        if (flota[i].estado == "mantenimiento") {
        contador++;
        }
    }
    return contador;
}

window.onload = function() {
    
    // Al abrir la web muestro toda la flota
    mostrarCamiones(flota);

    document.getElementById("btnTodos").onclick = function() {
        document.getElementById("infoExtra").innerHTML = "";
        mostrarCamiones(flota);
    };

    document.getElementById("btnDisponibles").onclick = function() {
        document.getElementById("infoExtra").innerHTML = "";
        mostrarCamiones(filtrarPorEstado("disponible"));
    };

    document.getElementById("btnRuta").onclick = function() {
        document.getElementById("infoExtra").innerHTML = "";
        mostrarCamiones(filtrarPorEstado("en_ruta"));
    };

    document.getElementById("btnContarMant").onclick = function() {
        var total = contarMantenimiento();
        document.getElementById("infoExtra").innerHTML = "Camiones actualmente en mantenimiento: " + total;
    };

    document.getElementById("btnBuscar").onclick = function() {
        var texto = document.getElementById("inputMatricula").value;
        document.getElementById("infoExtra").innerHTML = "";
        mostrarCamiones(buscarPorMatricula(texto));
    };
};