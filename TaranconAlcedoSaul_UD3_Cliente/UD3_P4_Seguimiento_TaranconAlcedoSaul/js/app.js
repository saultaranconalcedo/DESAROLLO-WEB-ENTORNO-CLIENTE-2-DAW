// Ejecutamos cuando la ventana principal haya cargado su HTML
window.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOSTRAR INFORMACIÓN DINÁMICA DE LA APLICACIÓN ---

    // Cojo la URL de la ventana principal
    document.getElementById('appUrl').textContent = window.location.href;

    // Cojo la plataforma/navegador del usuario
    document.getElementById('appPlataforma').textContent = window.navigator.userAgent;


    // --- 2. CAMBIAR CONTENIDO DEL IFRAME AL PULSAR EL MENÚ ---

    const iframe = document.getElementById('visorContenido');

    // Cambiar a viajes.html
    document.getElementById('btnViajes').addEventListener('click', () => {
        iframe.src = 'viajes.html';
    });

    // Cambiar a camiones.html
    document.getElementById('btnCamiones').addEventListener('click', () => {
        iframe.src = 'camiones.html';
    });

    // Cambiar a conductores.html
    document.getElementById('btnConductores').addEventListener('click', () => {
        iframe.src = 'conductores.html';
    });


    // --- 3. COMUNICACIÓN Y CONTROL DEL IFRAME ---

    // Recargar el documento que está dentro del iframe
    document.getElementById('btnRecargarIframe').addEventListener('click', () => {
        // Uso contentWindow para acceder a la ventana interna del iframe y refrescarla
        if (iframe.contentWindow) {
            iframe.contentWindow.location.reload();
        }
    });

    // Abrir el documento visible en el iframe en una nueva ventana/pestaña
    document.getElementById('btnAbrirVentana').addEventListener('click', () => {
        // Accedo a la URL actual cargada dentro del iframe
        const urlIframe = iframe.contentWindow.location.href;
        window.open(urlIframe, '_blank');
    });

});