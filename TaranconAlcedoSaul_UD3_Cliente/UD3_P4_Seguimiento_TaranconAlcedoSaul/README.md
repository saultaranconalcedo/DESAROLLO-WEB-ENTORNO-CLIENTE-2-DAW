# UD3 – PRÁCTICA 4: Panel de seguimiento de ALBOR LOGISTICS

## Descripción
Primera versión del panel de seguimiento para ALBOR LOGISTICS que permite cargar diferentes vistas (`viajes.html`, `camiones.html` y `conductores.html`) de forma dinámica mediante un `iframe` y gestionar su comunicación y recarga con JavaScript.

## Objetivos técnicos trabajados
- **Lectura de propiedades globales**: `window.location.href` y `navigator.userAgent`.
- **Manipulación de `iframe`**: Cambio dinámico del atributo `src` mediante eventos.
- **Comunicación entre ventanas**: Uso de `contentWindow` para forzar la recarga (`location.reload()`) y coger la dirección interna para abrirla en una nueva ventana con `window.open()`.

## Estructura de archivos
- `index.html`: Panel principal contenedor.
- `viajes.html`: Vista de viajes.
- `camiones.html`: Vista de camiones.
- `conductores.html`: Vista de conductores.
- `js/app.js`: Script externo con la lógica de navegación y control de ventanas.

## Autor
Tarancón Alcedo, Saúl