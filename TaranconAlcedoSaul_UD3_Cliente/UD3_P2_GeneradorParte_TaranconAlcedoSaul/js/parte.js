// Variable global para guardar los datos recopilados y usarlos si abrimos la ventana emergente
let datosParteActual = null;

// Esperamos a que el HTML esté cargado antes de enganchar los botones
window.addEventListener('DOMContentLoaded', () => {

    // --- GENERAR EL PARTE EN LA PÁGINA ---

    document.getElementById('btnGenerar').addEventListener('click', () => {
        // Cojo lo que el usuario ha escrito en cada campo
        const codigo = document.getElementById('codigo').value.trim();
        const matricula = document.getElementById('matricula').value.trim();
        const conductor = document.getElementById('conductor').value.trim();
        const origen = document.getElementById('origen').value.trim();
        const destino = document.getElementById('destino').value.trim();
        const distancia = document.getElementById('distancia').value.trim();
        const estado = document.getElementById('estado').value;

        const divError = document.getElementById('mensajeError');
        divError.textContent = ''; // Limpio errores viejos

        // Validación básica para asegurarme de que no se dejan ningún campo vacío
        if (!codigo || !matricula || !conductor || !origen || !destino || !distancia || !estado) {
            divError.textContent = 'Por favor, rellena todos los campos del formulario.';
            return;
        }

        // Guardo los datos limpios en el objeto global
        datosParteActual = { codigo, matricula, conductor, origen, destino, distancia, estado };

        // Construyo el HTML dinámicamente con las variables
        const htmlParte = `
            <div class="parte-card">
                <div class="parte-header">
                    <h3>ALBOR LOGISTICS</h3>
                    <h4>PARTE DE VIAJE</h4>
                </div>
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

        // Injecto el bloque dinámico en el HTML con innerHTML
        document.getElementById('contenedorParte').innerHTML = htmlParte;

        // Muestro el botón de abrir ventana emergente una vez que ya existe un parte
        document.getElementById('btnNuevaVentana').style.display = 'block';
    });


    // --- ABRIR EL PARTE EN UNA NUEVA VENTANA ---

    document.getElementById('btnNuevaVentana').addEventListener('click', () => {
        if (!datosParteActual) return;

        // Uso Date() para obtener la fecha y hora actual bien formateada
        const fechaActual = new Date().toLocaleString('es-ES');

        // Abro una ventana en blanco y me guardo la referencia
        const ventanaParte = window.open('', 'ParteViajeWin', 'width=500,height=600');

        // Escribo el HTML completo directamente dentro de la nueva ventana con .document.write()
        ventanaParte.document.write(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Parte de Viaje - ${datosParteActual.codigo}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; background-color: #ffffff; }
                    .header { text-align: center; border-bottom: 2px solid #1e3a8a; margin-bottom: 20px; }
                    .header h1 { color: #1e3a8a; margin: 0; }
                    .header h3 { color: #555; margin-top: 5px; }
                    .box { border: 1px solid #ccc; padding: 15px; border-radius: 5px; }
                    .fecha { text-align: right; font-size: 0.85em; color: #666; margin-top: 15px; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>ALBOR LOGISTICS</h1>
                    <h3>PARTE DE VIAJE OFICIAL</h3>
                </div>
                <div class="box">
                    <p><strong>Código de Viaje:</strong> ${datosParteActual.codigo}</p>
                    <p><strong>Matrícula Camión:</strong> ${datosParteActual.matricula}</p>
                    <p><strong>Conductor Asignado:</strong> ${datosParteActual.conductor}</p>
                    <hr>
                    <p><strong>Punto de Origen:</strong> ${datosParteActual.origen}</p>
                    <p><strong>Punto de Destino:</strong> ${datosParteActual.destino}</p>
                    <p><strong>Distancia Recorrida:</strong> ${datosParteActual.distancia} km</p>
                    <hr>
                    <p><strong>Estado Actual:</strong> ${datosParteActual.estado}</p>
                </div>
                <div class="fecha">
                    <p><strong>Fecha de generación:</strong> ${fechaActual}</p>
                </div>
            </body>
            </html>
        `);

        // Cierro el flujo de escritura de la nueva ventana para que termine de cargar
        ventanaParte.document.close();
    });

});