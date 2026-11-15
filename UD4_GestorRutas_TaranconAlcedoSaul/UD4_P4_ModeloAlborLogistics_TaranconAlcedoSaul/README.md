# UD4 – PRÁCTICA 4: Modelo de datos de ALBOR LOGISTICS

## Descripción
Integración de entidades de negocio mediante objetos definidos por el usuario (`Camion`, `Conductor`, `Ruta` y `Viaje`) relacionados entre sí dentro de arrays para gestionar la operativa de transporte.

## Esquema de relaciones
```text
Camión      (matricula, marca, modelo, kilometros, estado)
Conductor   (dni, nombre, telefono, experiencia, disponible)
Ruta        (codigo, origen, destino, distancia)
   │
   ▼
Viaje       (codigo, camion, conductor, ruta, estado)
