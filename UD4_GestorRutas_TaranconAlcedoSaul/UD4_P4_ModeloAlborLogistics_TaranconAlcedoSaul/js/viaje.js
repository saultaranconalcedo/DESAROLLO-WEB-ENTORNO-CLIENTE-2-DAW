// Constructor principal: recibe objetos completos de Camion, Conductor y Ruta

function Viaje(codigo, camion, conductor, ruta, estado) {
    this.codigo = codigo;
    this.camion = camion; // Aqui va el objeto Camion entero
    this.conductor = conductor; // Aqui va el objeto Conductor entero
    this.ruta = ruta; // Aqui va el objeto Ruta entero
    this.estado = estado;

    // Metodo para sacar la ficha entrando a las propiedades de los objetos de dentro

    this.mostrarDetalle = function() {
        
        var texto = "<div class='tarjeta'>";
        texto += "<b>" + this.codigo + "</b><br>";
        texto += "────────────────────────<br>";
        texto += "Camión: " + this.camion.matricula + " (" + this.camion.marca + ")<br>";
        texto += "Conductor: " + this.conductor.nombre + "<br>";
        texto += "Ruta: " + this.ruta.origen + " → " + this.ruta.destino + "<br>";
        texto += "Distancia: " + this.ruta.distancia + " km<br>";
        texto += "Estado: <b>" + this.estado + "</b><br>";
        texto += "────────────────────────";
        texto += "</div>";
        return texto;
    };
}
