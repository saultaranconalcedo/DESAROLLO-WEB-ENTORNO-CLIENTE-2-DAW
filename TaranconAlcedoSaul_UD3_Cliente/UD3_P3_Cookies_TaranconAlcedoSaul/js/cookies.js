// Nombre de las cookies que vamos a usar en la app
const COOKIES_APP = ['albor_nombre', 'albor_idioma', 'albor_numViajes', 'albor_ultimoPanel'];

// Esperamos a tener el HTML listo
window.addEventListener('DOMContentLoaded', () => {

    // Al entrar a la página intentamos cargar de primeras las cookies guardadas
    cargarPreferencias();

    // --- FUNCIONES AUXILIARES PARA MANEJAR COOKIES ---

    // Crear/Modificar cookie indicando días de vida
    function setCookie(nombre, valor, dias) {
        const fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        const expires = "expires=" + fecha.toUTCString();
        // encodeURIComponent por si el usuario pone acentos o caracteres raros
        document.cookie = `${nombre}=${encodeURIComponent(valor)};${expires};path=/`;
    }

    // Leer una cookie específica por su nombre
    function getCookie(nombre) {
        const nombreBuscar = nombre + "=";
        const arrayCookies = document.cookie.split(';');
        
        for (let i = 0; i < arrayCookies.length; i++) {
            let c = arrayCookies[i].trim();
            if (c.indexOf(nombreBuscar) === 0) {
                return decodeURIComponent(c.substring(nombreBuscar.length, c.length));
            }
        }
        return null;
    }

    // Borrar cookie pasándole una fecha del pasado
    function deleteCookie(nombre) {
        document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }


    // --- LÓGICA PRINCIPAL ---

    function cargarPreferencias() {
        const nombre = getCookie('albor_nombre');
        const idioma = getCookie('albor_idioma');
        const numViajes = getCookie('albor_numViajes');
        const ultimoPanel = getCookie('albor_ultimoPanel');

        const divEstado = document.getElementById('pantallaEstado');

        // Si existe al menos el nombre del operador, es que hay preferencias
        if (nombre) {
            // Sincronizo también los campos del formulario con lo guardado
            document.getElementById('nombre').value = nombre;
            if (idioma) document.getElementById('idioma').value = idioma;
            if (numViajes) document.getElementById('numViajes').value = numViajes;
            if (ultimoPanel) document.getElementById('ultimoPanel').value = ultimoPanel;

            divEstado.innerHTML = `
                <div class="mensaje-bienvenida">
                    <p><strong>Bienvenido de nuevo, ${nombre}.</strong></p>
                </div>
                <p><strong>Tus preferencias:</strong></p>
                <ul>
                    <li><strong>Idioma:</strong> ${idioma || 'No definido'}</li>
                    <li><strong>Viajes por página:</strong> ${numViajes || 'No definido'}</li>
                    <li><strong>Último panel:</strong> ${ultimoPanel || 'No definido'}</li>
                </ul>
            `;
        } else {
            divEstado.innerHTML = `
                <p>No existen preferencias guardadas.</p>
                <p>Configura tus preferencias para comenzar.</p>
            `;
        }
    }


    // --- BOTONES ---

    // Guardar o modificar preferencias (caducidad a 30 días)
    document.getElementById('btnGuardar').addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value.trim();
        const idioma = document.getElementById('idioma').value;
        const numViajes = document.getElementById('numViajes').value;
        const ultimoPanel = document.getElementById('ultimoPanel').value;
        const divError = document.getElementById('mensajeError');

        divError.textContent = '';

        if (nombre === '') {
            divError.textContent = 'Por favor, escribe el nombre del operador.';
            return;
        }

        // Guardo todas las cookies durante 30 días
        setCookie('albor_nombre', nombre, 30);
        setCookie('albor_idioma', idioma, 30);
        setCookie('albor_numViajes', numViajes, 30);
        setCookie('albor_ultimoPanel', ultimoPanel, 30);

        // Vuelvo a refrescar el estado visual
        cargarPreferencias();
    });

    // Consultar preferencias en pantalla
    document.getElementById('btnConsultar').addEventListener('click', () => {
        cargarPreferencias();
    });

    // Borrar cookies del sistema
    document.getElementById('btnEliminar').addEventListener('click', () => {
        COOKIES_APP.forEach(cookie => deleteCookie(cookie));
        cargarPreferencias();
    });

    // Restablecer: borra cookies y resetea el formulario
    document.getElementById('btnRestablecer').addEventListener('click', () => {
        COOKIES_APP.forEach(cookie => deleteCookie(cookie));
        document.getElementById('formPreferencias').reset();
        document.getElementById('mensajeError').textContent = '';
        cargarPreferencias();
    });

});