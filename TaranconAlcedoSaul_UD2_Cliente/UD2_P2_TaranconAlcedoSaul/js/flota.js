let flota = [ //datos de cada camion generado por IA
    { matricula: "1234ABC", marca: "Volvo", modelo: "FH", kilometros: 235000, estado: "en_ruta" },
    { matricula: "5678DEF", marca: "Scania", modelo: "R450", kilometros: 200000, estado: "disponible" },
    { matricula: "9012GHI", marca: "Mercedes", modelo: "Actros", kilometros: 15000, estado: "mantenimiento" },
    { matricula: "3456JKL", marca: "MAN", modelo: "TGX", kilometros: 127000, estado: "disponible" },
    { matricula: "7890MNO", marca: "DAF", modelo: "XF", kilometros: 453000, estado: "en_ruta" },
    { matricula: "2345PQR", marca: "Iveco", modelo: "S-Way", kilometros: 65000, estado: "disponible" },
    { matricula: "6789STU", marca: "Volvo", modelo: "FM", kilometros: 21000, estado: "en_ruta" },
    { matricula: "0123VWX", marca: "Scania", modelo: "S500", kilometros: 156000, estado: "mantenimiento" },
    { matricula: "4567YZA", marca: "Renault", modelo: "T-High", kilometros: 380000, estado: "disponible" },
    { matricula: "8901BCD", marca: "Mercedes", modelo: "Arocs", kilometros: 90000, estado: "en_ruta" }
    ];

let totalCamiones = flota.length;
let disponibles = 0;
let en_ruta = 0;
let mantenimiento = 0;
let totalkm = 0;


let listaCamiones = "";

for (let i = 0; i < flota.length; i++) {
    let camion = flota[i];

    totalkm = totalkm + camion.kilometros;

    if (camion.estado === "disponible") {
        disponibles++;
    } else if (camion.estado === "en_ruta") {
        en_ruta++;
    } else if (camion.estado === "mantenimiento") {
        mantenimiento++;
    }

    listaCamiones += "<h3>Vehículo " + (i + 1) + "</h3><p><b>Matrícula:</b> " + camion.matricula + "<br><b>Modelo:</b> " + camion.marca + " " + camion.modelo + "<br><b>Kilómetros:</b> " + camion.kilometros + "<br><b>Estado:</b> " + camion.estado + "</p>";
} 

let kilometraje_medio = totalkm / totalCamiones;
let contenedor = document.getElementById("contenedor-flota");

contenedor.innerHTML = "<center><h2>Listado de Vehículos</h2></center>" + listaCamiones; // listado de camiones

contenedor.innerHTML += "<center><h2>Resumen</h2></center>"; // añadimos el resumen con +=
contenedor.innerHTML += "<p><b>Total de camiones:</b> " + totalCamiones + "</p>";
contenedor.innerHTML += "<p><b>Camiones disponibles:</b> " + disponibles + "</p>";
contenedor.innerHTML += "<p><b>Camiones en ruta:</b> " + en_ruta + "</p>";
contenedor.innerHTML += "<p><b>Camiones en mantenimiento:</b> " + mantenimiento + "</p>";
contenedor.innerHTML += "<p><b>Kilómetros totales:</b> " + totalkm + " km</p>";
contenedor.innerHTML += "<p><b>Kilometraje medio:</b> " + kilometraje_medio + " km</p>";
