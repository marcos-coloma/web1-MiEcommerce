# Ecommerce Web App

Aplicación web de ecommerce desarrollada como trabajo práctico individual para la materia **WEB1**, construida de forma incremental a lo largo de distintos sprints, pasando de un prototipo estático a una aplicación con lógica de negocio y persistencia en base de datos.

---

## Descripción

El proyecto simula un entorno real de desarrollo, donde se construye una aplicación completa en etapas:

- **TP1:** Maquetación y prototipo funcional con HTML, CSS y Node.js + Express  
- **TP2:** Incorporación de lógica de negocio, arquitectura MVC, rutas, controladores y manejo de sesiones  
- **TP3:** Migración de persistencia (JSON → SQLite) e integración de base de datos  

---

## Funcionalidades

- Navegación entre vistas (Home, Producto, Carrito, Checkout, Login, Register)  
- Renderizado dinámico con EJS  
- Carrito de compras en sesión  
- Búsqueda, filtrado y productos relacionados  
- Validaciones en formularios  
- Manejo de errores (404 / 500)  
- Persistencia de datos en base de datos SQLite  

---

## Arquitectura

El proyecto evoluciona hacia una estructura MVC:

- **Controllers:** manejo de rutas y respuestas  
- **Services:** lógica de negocio  
- **Models / DB:** acceso a datos  
- **Views:** interfaz con EJS  
- **Public:** assets estáticos  

---

## Objetivo

Aplicar buenas prácticas de desarrollo web, trabajando de forma iterativa y escalable, replicando el flujo real de construcción de un producto digital.
