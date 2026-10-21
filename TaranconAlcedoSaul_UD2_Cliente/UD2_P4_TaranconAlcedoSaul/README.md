# Práctica UD2_P4 - Control de Acceso al Panel de Operaciones (ALBOR LOGISTICS)

## Descripción del Proyecto
Esta aplicación simula el sistema de autenticación de empleados para acceder al panel de operaciones de ALBOR LOGISTICS. 

Utilizando estructuras de control avanzadas en JavaScript, el programa valida el código introducido por el usuario mediante ventanas emergentes, limita los intentos fallidos a un máximo de 3 y determina el perfil funcional del empleado autorizado.

---

## Estrategia e Implementación

1. **Bucle Iterativo de Control (`do...while`):**
   - Garantiza la ejecución de la solicitud mediante `prompt()` al menos una vez.
   - Evalúa en la condición final `(!esValido && intentos < MAX_INTENTOS)` si se debe repetir la solicitud o bloquear el acceso.

2. **Validación de Datos (`if` / `else`):**
   - Evalúa si el código ingresado pertenece al listado de credenciales válidas (`ALBOR001`, `ALBOR002`, `ALBOR003`).
   - Mantiene un contador incrementable de intentos (`intentos++`) y notifica al usuario los reintentos restantes mediante `alert()`.

3. **Determinación de Perfiles (`switch`):**
   - Una vez validado el acceso, se emplea una estructura `switch` para mapear de forma eficiente cada código con su puesto correspondiente:
     - `ALBOR001` $\rightarrow$ Administrador
     - `ALBOR002` $\rightarrow$ Operador
     - `ALBOR003` $\rightarrow$ Gestor de tráfico

4. **Inyección en el DOM:**
   - Si el acceso es correcto, se muestra el bloque formateado de **ACCESO AUTORIZADO** con los detalles del perfil e intentos consumidos.
   - Si se superan los 3 intentos fallidos, se muestra el estado de **ACCESO BLOQUEADO** en color rojo.

---

## Estructura de Archivos

- `acceso-operaciones.html`: Documento HTML principal con la estructura base e inyección `#contenedor-acceso`.
- `js/acceso.js`: Archivo con la lógica en JavaScript (`do...while`, `switch`, `if`, contadores e inyección DOM).
- `README.md`: Documentación detallada del proyecto.