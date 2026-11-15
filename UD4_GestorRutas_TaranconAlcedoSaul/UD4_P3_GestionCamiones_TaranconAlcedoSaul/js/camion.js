// Funcion  para crear objetos de tipo Camion

function Camion(matricula, marca, modelo, anio, kilometros, estado) {

    // Con 'this' guardo cada dato dentro del camion que estoy creando
    this.matricula = matricula;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.kilometros = kilometros;
    this.estado = estado;

    // Metodo para sacar sus datos en texto
    this.mostrarInfo = function() {
        return this.matricula + " - " + this.marca + " " + this.modelo + " (" + this.kilometros + " km) [" + this.estado + "]";
    };

    // Metodo para cambiarle el estado
    this.cambiarEstado = function(nuevoEstado) {
        this.estado = nuevoEstado;
    };

    // Metodo para sumarle kilometros cuando hace un viaje
    this.aniadirKilometros = function(km) {
        this.kilometros = this.kilometros + km;
    };

    // Devuelve true si pasa de 250.000 km o ya esta en el taller
    this.necesitaMantenimiento = function() {
        if (this.kilometros > 250000 || this.estado == "mantenimiento") {
            return true;
        }
        return false;
    };
}