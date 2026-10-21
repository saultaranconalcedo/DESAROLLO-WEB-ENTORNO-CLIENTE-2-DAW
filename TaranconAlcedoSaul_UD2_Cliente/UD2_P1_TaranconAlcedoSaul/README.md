# PRÁCTICA 1. Clasificador de viajes de ALBOR LOGISTICS

## Descripción
Esta aplicación web permite clasificar los viajes de transporte de la empresa ALBOR LOGISTICS en función de su estado operativo mediante un formulario interactivo.

## Explicación técnica: Uso de la estructura `switch`

### 1. ¿Dónde se ha utilizado?
La sentencia `switch` se ha implementado en el archivo externo `js/app.js`, dentro de la función `clasificarViaje()`. 

Se encarga de evaluar el valor de la variable `estado`, extraída directamente del campo de entrada del formulario HTML.

### 2. ¿Por qué se ha utilizado esta estructura?
* **Claridad y legibilidad:** El campo `estado` maneja un conjunto fijo de valores conocidos (`pendiente`, `asignado`, `en_ruta`, `entregado`, `incidencia`). Utilizar un `switch` hace que el código sea mucho más limpio y fácil de leer en comparación con múltiples sentencias `if...else if` anidadas.
* **Control de casos por defecto:** Permite usar la cláusula `default` de forma sencilla para capturar cualquier entrada no válida o desconocida, mostrando un mensaje de error adecuado.
* **Eficiencia:** Incluir la instrucción `break` en cada `case` garantiza que, una vez encontrado el estado correcto, el programa deje de evaluar el resto de condiciones inmediatamente.