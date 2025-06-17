# MercadoLibre Challenge – Clone de Búsqueda y Detalle de Productos

Este proyecto es una solución técnica basada en el stack de **React + Sass (BEM)** para el frontend y **Node.js + Express** para el backend. La aplicación simula el comportamiento de búsqueda y visualización de productos como en Mercado Libre, cumpliendo criterios de usabilidad, SEO, performance y escalabilidad.

---

## 🧰 Stack Tecnológico

### Cliente (Frontend)

- **HTML5**
- **JavaScript (React)**
- **SASS** con metodología **BEM** para el manejo de estilos

### Servidor (Backend)

- **Node.js** (versión ≥ 20)
- **Express.js**

---

## 🚀 Funcionalidades

- **Página de Búsqueda**

  - Barra de búsqueda con sugerencia de bienvenida en primer uso
  - Listado de productos con paginación
  - Formato de precios y cuotas
  - Diseño responsivo y adaptativo

- **Detalle del Producto**

  - Breadcrumb de categorías
  - Galería de imágenes con vista principal
  - Información completa: título, precio, cuotas, condición, vendedor, descripción, atributos
  - URL SEO-friendly

- **Backend**
  - Lectura de archivos JSON simulando la API de Mercado Libre
  - Transformación de datos al formato requerido por el frontend (DTO)
  - Endpoint `/api/items` para búsquedas
  - Endpoint `/api/items/:id` para detalle de producto
  - Soporte para paginación

---

## 📁 Estructura del Proyecto

```
/backend
  ├── src/application/use-cases
  ├── src/infrastructure/dataSources/
  ├── src/infrastructure/mappers/
  ├── src/interfaces/
  ├── data-iphone/ (archivos JSON simulados)
  ├── app.js
  └── routes.js

/frontend
  ├── src/assets/
  ├── src/components/
  ├── src/pages/
  ├── src/styles/
  ├── src/utils/
  └── App.jsx
```

---

## 📌 Consideraciones Técnicas

- **Usabilidad**: diseño simple, navegación fluida, feedback visual al interactuar.
- **SEO**: URLs limpias, uso adecuado de etiquetas HTML.
- **Performance**: uso de memoria optimizada, assets comprimidos, carga diferida.
- **Escalabilidad**: código modular, separación de responsabilidades, arquitectura mantenible.

---

## 🐳 Despliegue con Docker Compose

Este proyecto puede ejecutarse fácilmente usando Docker Compose. Asegúrate de tener Docker y Docker Compose instalados en tu sistema.

### Instrucciones

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. Construye y levanta los servicios:

   ```bash
   docker-compose up --build
   ```

3. Accede a la aplicación en:
   - Cliente: [http://localhost:3000](http://localhost:3000)

### Estructura del Docker Compose

- `client`: Servicio del frontend (React)
- `server`: Servicio del backend (Express)

---

## 🧪 Para Pruebas

Puedes usar los siguientes endpoints:

- `/api`
- `/api/items?search=`
- `/api/items/:id` (usa un ID válido del dataset)
