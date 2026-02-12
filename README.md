# 🚀 Curso Backend - CoderHouse

Repositorio de aprendizaje de backend con Node.js. Incluye proyectos prácticos sobre módulos nativos, servidores, routers, handlebars y websockets.

## 📋 Contenido

### 1. **Módulos Nativos**
Exploración de módulos de Node.js:
- **crypto**: Encriptación y generación de hashes
- **filesystem**: Lectura/escritura de archivos
- **bcrypt**: Hashing seguro de contraseñas

### 2. **Router-Handlebars**
Servidores con Express y plantillas Handlebars:
- **01-router**: Rutas básicas con managers de usuarios y carritos
- **02-static**: Archivos estáticos con públicos
- **03-multer**: Carga de imágenes con multer
- **04-handlebars**: Plantillas dinámicas con vistas y layouts

### 3. **Servidores**
APIs base con Express:
- **01-base**: Servidores HTTP y Express básicos
- **02-api**: API REST con managers de datos

### 4. **Websockets**
Comunicación en tiempo real:
- **01-websockets**: Ejemplo básico de Socket.io
- **02-chat**: 💬 Chat grupal en tiempo real con persistencia

## 🛠️ Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Socket.io** - WebSockets para tiempo real
- **Handlebars** - Motor de plantillas
- **Bcrypt** - Seguridad de contraseñas
- **Multer** - Carga de archivos

## 📦 Instalación

Para cualquier proyecto:

```bash
cd [ruta-del-proyecto]
npm install
```

## 🚀 Ejecutar Proyectos

**Ejemplo - Chat WebSocket:**
```bash
cd websockets/02-chat
npm install
npm start
```

El servidor estará disponible en `http://localhost:8080`

## 📚 Estructura General

```
├── Modulos Nativos/       # Módulos core de Node.js
├── Router-Handlebars/     # Express con plantillas
├── Servidores/            # APIs básicas
└── websockets/            # Comunicación en tiempo real
```

## ✨ Características Principales

- ✅ Manejo de archivos asincrónico
- ✅ Autenticación con bcrypt
- ✅ API REST estructurada
- ✅ Chat en tiempo real
- ✅ Carga de archivos
- ✅ Plantillas dinámicas

## 📝 Notas

Cada carpeta de proyecto contiene su propio `package.json` e instrucciones específicas.

---

**Autor**: Lucas  
**Curso**: CoderHouse Backend - 76735