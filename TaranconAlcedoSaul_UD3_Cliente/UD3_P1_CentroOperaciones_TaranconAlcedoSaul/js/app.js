// Variable global para guardar la referencia de la segunda ventana
let ventanaSecundaria = null;

window.addEventListener('DOMContentLoaded', () => {

    // Extraigo la info del sistema directamente de las propiedades del navegador
    document.getElementById('infoUrl').textContent = window.location.href;
    document.getElementById('infoProtocolo').textContent = window.location.protocol;
    document.getElementById('infoNavegador').textContent = window.navigator.userAgent;

    // --- ACCIONES DE NAVEGACIÓN ---

    document.getElementById('btnPanel').addEventListener('click', () => {
        window.open('centro-operaciones.html', '_blank');
    });

    // Abro la ventana de seguimiento y me guardo su referencia para controlarla luego
    document.getElementById('btnSeguimiento').addEventListener('click', () => {
        ventanaSecundaria = window.open('seguimiento.html', 'VentanaSeguimiento', 'width=600,height=400');
    });

    document.getElementById('btnWeb').addEventListener('click', () => {
        window.open('https://www.google.com', '_blank');
    });

    document.getElementById('btnRecargar').addEventListener('click', () => {
        window.location.reload();
    });

    document.getElementById('btnVolver').addEventListener('click', () => {
        window.history.back();
    });

    // --- CARGAR URL EN VENTANA SECUNDARIA ---

    document.getElementById('btnCargarUrl').addEventListener('click', () => {
        const urlTexto = document.getElementById('inputUrl').value.trim();
        const divError = document.getElementById('mensajeError');

        divError.textContent = ''; // Limpio errores antiguos

        // Compruebo si la ventana no existe o si el usuario la ha cerrado con la 'X'
        if (!ventanaSecundaria || ventanaSecundaria.closed) {
            divError.textContent = 'Primero debes abrir la ventana de seguimiento.';
            return;
        }

        if (urlTexto === '') {
            divError.textContent = 'Escribe una URL antes de cargar.';
            return;
        }

        if (!urlTexto.startsWith('http://') && !urlTexto.startsWith('https://')) {
            divError.textContent = 'La URL debe empezar por "http://" o "https://".';
            return;
        }

        // Cambio la dirección de la ventana emergente desde aquí
        ventanaSecundaria.location.href = urlTexto;
    });

});