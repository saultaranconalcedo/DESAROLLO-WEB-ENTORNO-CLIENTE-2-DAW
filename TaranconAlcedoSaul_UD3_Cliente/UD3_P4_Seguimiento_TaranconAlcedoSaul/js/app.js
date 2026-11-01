window.addEventListener('DOMContentLoaded', () => {

    // Extraigo la info del navegador de la ventana principal
    document.getElementById('appUrl').textContent = window.location.href;
    document.getElementById('appPlataforma').textContent = window.navigator.userAgent;

    const iframe = document.getElementById('visor');

    // Cargar documentos en el iframe al hacer click en los botones
    document.getElementById('btnViajes').addEventListener('click', () => {
        iframe.src = 'viajes.html';
    });

    document.getElementById('btnCamiones').addEventListener('click', () => {
        iframe.src = 'camiones.html';
    });

    document.getElementById('btnConductores').addEventListener('click', () => {
        iframe.src = 'conductores.html';
    });

    // Recargar el iframe desde fuera usando 'contentWindow'
    document.getElementById('btnRecargar').addEventListener('click', () => {
        if (iframe.contentWindow) {
            iframe.contentWindow.location.reload();
        }
    });

    // Coger la URL que tiene cargada el iframe y abrirla fuera
    document.getElementById('btnAbrir').addEventListener('click', () => {
        const urlIframe = iframe.contentWindow.location.href;
        window.open(urlIframe, '_blank');
    });

});