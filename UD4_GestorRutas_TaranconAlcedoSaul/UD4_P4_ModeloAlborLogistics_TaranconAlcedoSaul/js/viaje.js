function Viaje(codigo, camion, conductor, ruta, estado) {
    this.codigo = codigo;
    this.camion = camion;
    this.conductor = conductor;
    this.ruta = ruta;
    this.estado = estado;

    // Guardo los objetos relacionados para poder mostrar los datos completos del viaje.
    this.mostrarInfo = function() {
        return "<h3>" + this.codigo + "</h3>" +
            "<p>Camión: " + this.camion.matricula + " | " + this.camion.marca + " " +
            this.camion.modelo + " | " + this.camion.kilometros + " km | Estado: " +
            this.camion.estado + "</p>" +
            "<p>Conductor: " + this.conductor.nombre + " | DNI: " + this.conductor.dni +
            " | Teléfono: " + this.conductor.telefono + " | Experiencia: " +
            this.conductor.experiencia + " años | Disponible: " +
            this.conductor.disponible + "</p>" +
            "<p>Ruta: " + this.ruta.codigo + " | " + this.ruta.origen + " a " +
            this.ruta.destino + " | Distancia: " + this.ruta.distancia + " km</p>" +
            "<p>Estado del viaje: " + this.estado + "</p>" +
            "<hr>";
    };
}
