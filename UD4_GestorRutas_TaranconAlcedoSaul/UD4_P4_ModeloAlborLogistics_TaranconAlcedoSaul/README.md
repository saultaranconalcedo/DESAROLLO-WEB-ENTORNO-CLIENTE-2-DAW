# Práctica 4: Modelo de datos de ALBOR LOGISTICS

El panel muestra viajes relacionados con sus camiones, conductores y rutas. Se pueden ver todos los viajes, buscarlos por código, filtrar por conductor o matrícula, ver los que están en ruta o entregados y contar los pendientes. El resumen operativo aparece al abrir la página.

## Estructura

- `index.html`: panel, resumen y controles.
- `js/camion.js`, `js/conductor.js` y `js/ruta.js`: funciones constructoras de cada entidad.
- `js/viaje.js`: constructor de viaje y método para mostrar su información.
- `js/app.js`: datos de ejemplo, funciones de búsqueda y filtros, resumen y eventos.

## Relaciones

```text
Camión ─────┐
Conductor ──┼──> Viaje
Ruta ───────┘
```

Cada objeto `Viaje` contiene un objeto `Camion`, un objeto `Conductor` y un objeto `Ruta`.
