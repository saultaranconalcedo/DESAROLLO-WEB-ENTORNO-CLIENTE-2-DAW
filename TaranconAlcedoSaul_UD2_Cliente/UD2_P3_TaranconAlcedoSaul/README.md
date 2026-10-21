# Práctica UD2_P3 - Simulador de Asignación de Viajes (ALBOR LOGISTICS)

## Descripción del Proyecto
Esta aplicación simula el proceso de asignación y gestión de viajes para el departamento de operaciones de ALBOR LOGISTICS. 

Mediante el uso de un bucle `while`, la herramienta procesa los viajes pendientes uno a uno, evalúa el estado de finalización de cada trayecto (correcto o incidencia) y genera un resumen estadístico detallado del proceso.

---

## Estrategia e Implementación

1. **Estructura de Control Iterativa (`while`):**
   - Se utiliza un bucle `while` cuya condición de permanencia es `viajesPendientes > 0`.
   - **Control de bucles infinitos:** En cada iteración se decrementa el contador de viajes pendientes (`viajesPendientes--`) y se incrementa el identificador del viaje actual (`viajeActual++`), garantizando la finalización del programa.

2. **Control de Incidencias y Condicionales (`if / else`):**
   - Se emplean contadores independientes para registrar la métrica global: `viajesProcesados`, `viajesCorrectos` y `viajesIncidencia`.
   - En cada iteración se simula el resultado del viaje utilizando una comprobación probabilística mediante `Math.random()`.
   - Si la simulación da como resultado un trayecto correcto, se incrementa `viajesCorrectos`; en caso contrario, se incrementa `viajesIncidencia` y se destaca visualmente en rojo con estilos en el DOM (`<span style='color:red;'>`).

3. **Salida e Inyección en el DOM:**
   - Toda la secuencia del proceso y el bloque de resumen final se acumulan en la variable `mensaje`.
   - Una vez finalizado el bucle, el resultado se inyecta dinámicamente en la página web mediante `document.getElementById("contenedor-viajes").innerHTML`.

---

## Estructura de Archivos

- `asignacion-viajes.html`: Interfaz de la aplicación con la estructura base y el contenedor `#contenedor-viajes`.
- `js/asignacion.js`: Lógica en JavaScript con el bucle `while`, simulación de incidencias y actualización de contadores.
- `README.md`: Documentación explicativa del proyecto.