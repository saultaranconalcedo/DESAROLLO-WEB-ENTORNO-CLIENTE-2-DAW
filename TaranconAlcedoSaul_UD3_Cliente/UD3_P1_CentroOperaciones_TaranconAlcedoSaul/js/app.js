// La creo fuera para guardarme la ventana emergente y usarla en otros botones
let ventanaSeguimiento = null;

// Esperamos a que cargue todo el HTML antes de empezar
window.addEventListener('DOMContentLoaded', () => {

    // Relleno la info de la web sacándola de las propiedades del navegador
    document.getElementById('infoUrl').textContent = window.location.href;
    document.getElementById('infoProtocolo').textContent = window.location.protocol;
    document.getElementById('infoNavegador').textContent = window.navigator.userAgent;

    // --- ACCIONES DE LOS BOTONES ---

    // Abrir esta misma página en una pestaña nueva
    document.getElementById('btnAbrirPanel').addEventListener('click', () => {
        window.open('centro-operaciones.html', '_blank');
    });

    // Abrir la ventana pequeña y guardarme el control en la variable
    document.getElementById('btnAbrirSeguimiento').addEventListener('click', () => {
        ventanaSeguimiento = window.open('seguimiento.html', 'SeguimientoWin', 'width=600,height=400');
    });

    // Abrir la web de la empresa en pestaña nueva
    document.getElementById('btnWebCorporativa').addEventListener('click', () => {
        window.open('https://www.google.com', '_blank');
    });

    // Refrescar la página actual
    document.getElementById('btnRecargar').addEventListener('click', () => {
        window.location.reload();
    });

    // Ir a la página donde estábamos antes
    document.getElementById('btnVolver').addEventListener('click', () => {
        window.history.back();
    });

    // --- CAMBIAR LA URL DE LA SEGUNDA VENTANA ---

    document.getElementById('btnCargarUrl').addEventListener('click', () => {
        const inputUrl = document.getElementById('inputUrl').value.trim(); // .trim() quita espacios tontos
        const divError = document.getElementById('mensajeError');

        divError.textContent = ''; // Limpio el error anterior

        // Si no la hemos abierto aún o la hemos cerrado con la 'X'
        if (!ventanaSeguimiento || ventanaSeguimiento.closed) {
            divError.textContent = 'Primero abre la ventana de seguimiento.';
            return;
        }

        if (inputUrl === '') {
            divError.textContent = 'Escribe alguna dirección web.';
            return;
        }

        // Valido que sea una URL bien formada con http/https
        if (!inputUrl.startsWith('http://') && !inputUrl.startsWith('https://')) {
            divError.textContent = 'La URL debe empezar por http:// o https://';
            return;
        }

        // Le cambio la dirección a la ventana secundaria
        ventanaSeguimiento.location.href = inputUrl;
    });

});