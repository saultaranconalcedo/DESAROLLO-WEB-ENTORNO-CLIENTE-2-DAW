# Práctica UD2_P2 - Control de Flota (ALBOR LOGISTICS)

## Descripción del Proyecto
Este proyecto consiste en un sistema básico de gestión de flota de transporte para ALBOR LOGISTICS desarrollado en JavaScript. 

El script procesa una lista de vehículos mediante estructuras iterativas y condicionales, generando dinámicamente un informe en pantalla que muestra el desglose individual de cada vehículo y un resumen estadístico global.

---

## Estrategia e Implementación

1. **Estructura de Datos:**
   - Se utiliza un `Array` de objetos (`flota`) que almacena la información de 10 camiones.
   - Cada objeto cuenta con las propiedades: `matricula`, `marca`, `modelo`, `kilometros` y `estado` (`disponible`, `en_ruta` o `mantenimiento`).

2. **Procesamiento de Datos:**
   - **Bucle `for`:** Recorre el array posición por posición (`i = 0` hasta `flota.length`).
   - **Acumuladores:** Se suman los kilómetros de cada camión en la variable `totalkm`.
   - **Estructura de Control (`if / else if`):** Se comprueba el atributo `estado` de cada vehículo para clasificarlo e incrementar su respectivo contador (`disponibles`, `en_ruta`, `mantenimiento`).
   - **Cálculo de Promedios:** Se calcula el `kilometraje_medio` dividiendo los kilómetros totales entre el número total de vehículos fuera del bucle.

3. **Inyección en el DOM:**
   - Se construye dinámicamente un bloque HTML para cada camión identificándolo de forma numerada (`Vehículo 1`, `Vehículo 2`, etc.) utilizando el índice del bucle `(i + 1)`.
   - Se inyecta la lista y el resumen de datos dentro del contenedor principal (`#contenedor-flota`) mediante la propiedad `innerHTML`.

---

## Estructura de Archivos

- `flota.html`: Página principal con la estructura base y el contenedor `#contenedor-flota`.
- `js/flota.js`: Código JavaScript con los datos, lógica de procesamiento e inyección DOM.
- `README.md`: Documentación explicativa del proyecto.