# Ecommerce Web App

Aplicación web de ecommerce desarrollada como trabajo práctico individual para la materia **WEB1**, construida de forma incremental mediante distintos sprints, evolucionando desde un prototipo estático hasta una aplicación con arquitectura MVC, persistencia en base de datos y un dashboard administrativo en React.

---

## Descripción

El proyecto simula un proceso real de desarrollo de software, incorporando progresivamente nuevas funcionalidades y mejoras de arquitectura.

Evolución del proyecto:

- **TP1:** Maquetación y prototipo funcional con HTML, CSS y Node.js + Express.
- **TP2:** Incorporación de lógica de negocio, arquitectura MVC, rutas, controladores y manejo de sesiones.
- **TP3:** Migración de persistencia (JSON → SQLite) e integración con base de datos.
- **TP4:** Implementación de API REST, exposición de datos en formato JSON y transición a backend como proveedor de datos.
- **TP5:** Desarrollo de dashboard administrativo con React, integración con API REST y gestión de productos.

---

## Funcionalidades

### Aplicación Ecommerce

- Navegación entre vistas:
  - Home
  - Productos
  - Detalle de producto
  - Carrito
  - Checkout
  - Login
  - Register

- Renderizado dinámico con EJS.
- Carrito de compras utilizando sesiones.
- Búsqueda y filtrado de productos.
- Productos relacionados.
- Validaciones de formularios.
- Manejo de errores (404 / 500).
- Persistencia de información mediante SQLite.

### Dashboard Administrativo

- Aplicación desarrollada con React.
- Consumo de API REST creada con Express.
- Listado de productos y categorias.
- Visualización y edición de productos y categorias.
- Creación de nuevos productos y categorias.
- Validación de formularios.
- Visualizacion de estadisticas mediante API.
- Actualización y eliminación de productos y categorias.
- Integración entre frontend React y backend existente.

---

## Arquitectura

El proyecto utiliza una arquitectura separada por responsabilidades.

### Backend

- **Routes:** definición de endpoints y navegación.
- **Controllers:** manejo de solicitudes y respuestas.
- **Services:** lógica de negocio.
- **Models / Database:** acceso y persistencia de datos.
- **Views:** renderizado con EJS.
- **Public:** archivos estáticos.

### Frontend Dashboard

- **Pages:** pantallas principales.
- **Components:** componentes reutilizables.
- **Hooks:** manejo de lógica y estados.
- **Utils:** validaciones y transformación de datos.
- **React Router:** navegación entre vistas.

---

## Tecnologías utilizadas

### Backend
- Node.js
- Express
- SQLite
- EJS
- Express Session

### Frontend
- React
- Vite
- React Router
- CSS

---

## Objetivo

Aplicar buenas prácticas de desarrollo web mediante un proceso iterativo, trabajando separación de responsabilidades, persistencia de datos, consumo de APIs y construcción progresiva de una aplicación completa.

El proyecto continúa en evolución incorporando nuevas mejoras fuera del alcance del trabajo práctico.
