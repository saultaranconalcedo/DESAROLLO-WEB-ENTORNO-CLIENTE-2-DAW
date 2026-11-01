# UD3 – PRÁCTICA 3: Preferencias del operador mediante cookies

## Descripción
Módulo de gestión de usuario para ALBOR LOGISTICS que utiliza cookies de navegador para guardar, leer, modificar y eliminar la configuración seleccionada por cada operador sin hacer uso de `localStorage`.

## Cookies utilizadas

1. **`albor_nombre`**: Almacena el nombre del operador. Permite mostrar el saludo personalizado al volver a acceder al panel.
2. **`albor_idioma`**: Guarda la preferencia de idioma del usuario (`Español` o `Inglés`).
3. **`albor_numViajes`**: Guarda el número de registros o viajes por página elegidos (`10`, `20` o `50`).
4. **`albor_ultimoPanel`**: Almacena la última vista utilizada por el operador (`Viajes`, `Camiones`, `Conductores` o `Clientes`).

## Funcionamiento técnico
- **Creación/Modificación**: Se asigna un tiempo de expiración futuro (`expires`) calculado en días (30 días de persistencia).
- **Lectura**: Se analiza la propiedad `document.cookie` separando mediante cadenas de texto para recuperar el valor asociado a cada clave.
- **Eliminación**: Se fuerzan las cookies a caducar enviando una fecha pasada (`Thu, 01 Jan 1970 00:00:00 UTC`).

## Autor
Tarancón Alcedo, Saúl