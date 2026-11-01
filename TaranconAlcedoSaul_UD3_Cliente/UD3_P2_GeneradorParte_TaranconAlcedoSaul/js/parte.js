// para guardar los datos introducidos para usarlos en la ventana nueva
let datosParte = null;

window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btnGenerar').addEventListener('click', () => {
        const codigo = document.getElementById('codigo').value.trim();
        const matricula = document.getElementById('matricula').value.trim();
        const conductor = document.getElementById('conductor').value.trim();
        const origen = document.getElementById('origen').value.trim();
        const destino = document.getElementById('destino').value.trim();
        const distancia = document.getElementById('distancia').value.trim();
        const estado = document.getElementById('estado').value;

        const divError = document.getElementById('mensajeError');
        divError.textContent = '';

        if (!codigo || !matricula || !conductor || !origen || !destino || !distancia || !estado) {
            divError.textContent = 'Por favor, rellena todos los campos.';
            return;
        }

        // Guardo los datos limpios
        datosParte = { codigo, matricula, conductor, origen, destino, distancia, estado };

        // Monto la estructura HTML combinando los datos
        const parteHtml = `
            <div class="parte-res">
                <h3>ALBOR LOGISTICS</h3>
                <h4>PARTE DE VIAJE</h4>
                <p><strong>Viaje:</strong> ${codigo}</p>
                <p><strong>Camión:</strong> ${matricula}</p>
                <p><strong>Conductor:</strong> ${conductor}</p>
                <hr>
                <p><strong>Origen:</strong> ${origen}</p>
                <p><strong>Destino:</strong> ${destino}</p>
                <p><strong>Distancia:</strong> ${distancia} km</p>
                <hr>
                <p><strong>Estado:</strong> ${estado}</p>
            </div>
        `;

        // Lo pongo en el documento
        document.getElementById('contenedorParte').innerHTML = parteHtml;
        document.getElementById('btnAbrirVentana').style.display = 'inline-block';
    });


    // --- ABRIR PARTE EN NUEVA VENTANA ---

    document.getElementById('btnAbrirVentana').addEventListener('click', () => {
        if (!datosParte) return;

        // cambiar la fecha actual del sistema
        const fechaActual = new Date().toLocaleString('es-ES');

        const ventanaNueva = window.open('', 'ParteViaje', 'width=450,height=550');

        // Escribo directamente el HTML completo de la ventana emergente
        ventanaNueva.document.write(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Parte de Viaje - ${datosParte.codigo}</title>

                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    h2 { color: #1e3a8a; text-align: center; margin-bottom: 0; }
                    h4 { text-align: center; color: #555; margin-top: 5px; }
                    .card { border: 1px solid #000; padding: 15px; margin-top: 15px; }
                    .fecha { font-size: 0.85em; text-align: right; margin-top: 20px; color: #666; }

                </style>
                
            </head>
            <body>
                <h2>ALBOR LOGISTICS</h2>
                <h4>PARTE DE VIAJE OFICIAL</h4>
                <div class="card">

                    <p><strong>Viaje:</strong> ${datosParte.codigo}</p>
                    <p><strong>Camión:</strong> ${datosParte.matricula}</p>
                    <p><strong>Conductor:</strong> ${datosParte.conductor}</p>
                    <hr>

                    <p><strong>Origen:</strong> ${datosParte.origen}</p>
                    <p><strong>Destino:</strong> ${datosParte.destino}</p>
                    <p><strong>Distancia:</strong> ${datosParte.distancia} km</p>
                    <hr>

                    <p><strong>Estado:</strong> ${datosParte.estado}</p>

                </div>
                <div class="fecha">Fecha de generación: ${fechaActual}</div>

            </body>
            </html>
        `);

        ventanaNueva.document.close();
    });

});