function Camion(matricula, marca, modelo, anio, kilometros, estado) {
    this.matricula = matricula;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.kilometros = kilometros;
    this.estado = estado;

    this.mostrarInfo = function() {
        return this.matricula + " | " + this.marca + " " + this.modelo + " | " +
            this.kilometros + " km | " + this.estado;
    };

    this.cambiarEstado = function(nuevoEstado) {
        if (nuevoEstado === "disponible" || nuevoEstado === "en_ruta" ||
            nuevoEstado === "mantenimiento") {
            this.estado = nuevoEstado;
            return true;
        }
        return false;
    };

    this.aniadirKilometros = function(km) {
        if (km > 0) {
            this.kilometros = this.kilometros + km;
            return true;
        }
        return false;
    };

    this.necesitaMantenimiento = function() {
        return this.kilometros > 250000;
    };
}
