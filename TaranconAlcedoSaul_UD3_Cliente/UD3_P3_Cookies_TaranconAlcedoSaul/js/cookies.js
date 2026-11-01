// Nombres clave para las cookies
const CLAVES_COOKIES = ['op_nombre', 'op_idioma', 'op_numViajes', 'op_ultimoPanel'];

window.addEventListener('DOMContentLoaded', () => {

    // Cargar nada más entrar
    cargarEstado();

    // --- FUNCIONES COOKIES ---

    // Crear/modificar cookie con fecha de expiración
    function setCookie(nombre, valor, dias) {
        const d = new Date();
        d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
        document.cookie = `${nombre}=${encodeURIComponent(valor)};expires=${d.toUTCString()};path=/`;
    }

    // Buscar una cookie por nombre
    function getCookie(nombre) {
        const nombreIgual = nombre + "=";
        const arrayCookies = document.cookie.split(';');
        for (let i = 0; i < arrayCookies.length; i++) {
            let c = arrayCookies[i].trim();
            if (c.indexOf(nombreIgual) === 0) {
                return decodeURIComponent(c.substring(nombreIgual.length, c.length));
            }
        }
        return '';
    }

    // Eliminar cookie poniéndole una fecha ya pasada
    function deleteCookie(nombre) {
        document.cookie = `${nombre}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }

    // --- MOSTRAR LAS PREFERENCIAS EN PANTALLA ---

    function cargarEstado() {
        const nombre = getCookie('op_nombre');
        const idioma = getCookie('op_idioma');
        const numViajes = getCookie('op_numViajes');
        const ultimoPanel = getCookie('op_ultimoPanel');

        const div = document.getElementById('pantallaEstado');

        if (nombre !== '') {
            // Sincronizar los inputs con las cookies
            document.getElementById('nombre').value = nombre;
            if (idioma) document.getElementById('idioma').value = idioma;
            if (numViajes) document.getElementById('numViajes').value = numViajes;
            if (ultimoPanel) document.getElementById('ultimoPanel').value = ultimoPanel;

            div.innerHTML = `
                <div class="resumen">
                    <p>Bienvenido de nuevo, <strong>${nombre}</strong>.</p>
                </div>
                <p>Tus preferencias:</p>
                <ul>
                    <li>Idioma: ${idioma}</li>
                    <li>Viajes por página: ${numViajes}</li>
                    <li>Último panel: ${ultimoPanel}</li>
                </ul>
            `;
        } else {
            div.innerHTML = `
                <p>No existen preferencias guardadas.</p>
                <p>Configura tus preferencias para comenzar.</p>
            `;
        }
    }

    // --- ACCIONES BOTONES ---

    document.getElementById('btnGuardar').addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value.trim();
        const idioma = document.getElementById('idioma').value;
        const numViajes = document.getElementById('numViajes').value;
        const ultimoPanel = document.getElementById('ultimoPanel').value;
        const divError = document.getElementById('mensajeError');

        divError.textContent = '';

        if (nombre === '') {
            divError.textContent = 'Escribe un nombre de operador.';
            return;
        }

        // Guardo para 30 días
        setCookie('op_nombre', nombre, 30);
        setCookie('op_idioma', idioma, 30);
        setCookie('op_numViajes', numViajes, 30);
        setCookie('op_ultimoPanel', ultimoPanel, 30);

        cargarEstado();
    });

    document.getElementById('btnConsultar').addEventListener('click', () => {
        cargarEstado();
    });

    document.getElementById('btnEliminar').addEventListener('click', () => {
        CLAVES_COOKIES.forEach(c => deleteCookie(c));
        cargarEstado();
    });

    document.getElementById('btnRestablecer').addEventListener('click', () => {
        CLAVES_COOKIES.forEach(c => deleteCookie(c));
        document.getElementById('formPref').reset();
        document.getElementById('mensajeError').textContent = '';
        cargarEstado();
    });

});