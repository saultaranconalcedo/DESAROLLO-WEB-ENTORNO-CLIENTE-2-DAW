var camiones = [
    new Camion("1234ABC", "Volvo", "FH", 2021, 235000, "disponible"),
    new Camion("5678DEF", "Scania", "R", 2020, 180000, "en_ruta"),
    new Camion("9012GHI", "MAN", "TGX", 2018, 310000, "mantenimiento"),
    new Camion("3456JKL", "Mercedes", "Actros", 2022, 95000, "disponible"),
    new Camion("7890MNP", "DAF", "XF", 2019, 260000, "en_ruta")
];

function mostrarCamiones(lista) {
    var texto = "<table border='1' cellpadding='5'><tr><th>Matrícula</th><th>Modelo</th>" +
        "<th>Kilómetros</th><th>Estado</th></tr>";
    var i;

    if (lista.length === 0) {
        texto = "No se han encontrado camiones.";
    } else {
        for (i = 0; i < lista.length; i++) {
            texto = texto + "<tr><td>" + lista[i].matricula + "</td><td>" +
                lista[i].marca + " " + lista[i].modelo + "</td><td>" +
                lista[i].kilometros.toLocaleString("es-ES") + "</td><td>" +
                lista[i].estado + "</td></tr>";
        }
        texto = texto + "</table>";
    }

    document.getElementById("resultado").innerHTML = texto;
}

function buscarCamion(matricula) {
    var i;
    for (i = 0; i < camiones.length; i++) {
        if (camiones[i].matricula.toUpperCase() === matricula.toUpperCase()) {
            return camiones[i];
        }
    }
    return null;
}

function mostrarDisponibles() {
    var disponibles = [];
    var i;
    for (i = 0; i < camiones.length; i++) {
        if (camiones[i].estado === "disponible") {
            disponibles.push(camiones[i]);
        }
    }
    mostrarCamiones(disponibles);
}

function mostrarEnRuta() {
    var enRuta = [];
    var i;
    for (i = 0; i < camiones.length; i++) {
        if (camiones[i].estado === "en_ruta") {
            enRuta.push(camiones[i]);
        }
    }
    mostrarCamiones(enRuta);
}

function contarMantenimiento() {
    var cantidad = 0;
    var i;
    for (i = 0; i < camiones.length; i++) {
        if (camiones[i].estado === "mantenimiento") {
            cantidad++;
        }
    }
    document.getElementById("resultado").innerHTML =
        "<p>Camiones en mantenimiento: " + cantidad + "</p>";
}

document.getElementById("todos").onclick = function() {
    mostrarCamiones(camiones);
};

document.getElementById("disponibles").onclick = function() {
    mostrarDisponibles();
};

document.getElementById("enRuta").onclick = function() {
    mostrarEnRuta();
};

document.getElementById("mantenimiento").onclick = function() {
    contarMantenimiento();
};

document.getElementById("buscar").onclick = function() {
    var matricula = document.getElementById("matriculaBuscar").value.trim();
    var camion = buscarCamion(matricula);
    if (camion === null) {
        document.getElementById("resultado").innerHTML = "No se ha encontrado esa matrícula.";
    } else {
        mostrarCamiones([camion]);
    }
};

document.getElementById("anadirKilometros").onclick = function() {
    var matricula = document.getElementById("matriculaKilometros").value.trim();
    var kilometros = parseFloat(document.getElementById("kilometrosNuevos").value);
    var camion = buscarCamion(matricula);
    var mensaje = document.getElementById("mensaje");

    if (camion === null) {
        mensaje.innerHTML = "No se ha encontrado esa matrícula.";
    } else if (isNaN(kilometros) || !camion.aniadirKilometros(kilometros)) {
        mensaje.innerHTML = "Indica una cantidad de kilómetros mayor que cero.";
    } else {
        mensaje.innerHTML = "Kilómetros añadidos.";
        mostrarCamiones([camion]);
    }
};

window.onload = function() {
    mostrarCamiones(camiones);
};
