# Fundación Caminos de Paz y Esperanza

**Construyendo la presencia digital. (Sustituir por una descripción clara del proyecto)**

Este proyecto es una aplicación web moderna y modular, construida con React y TypeScript, diseñada para presentar información de manera clara y estructurada (por ejemplo, para una ONG) La arquitectura sigue los principios del Diseño Atómico (Atomic Design) para garantizar la reutilización y el mantenimiento del código.

## Tabla de Contenidos

1.  [Características Principales](#-características-principales)
2.  [Estructura del Proyecto](#-estructura-del-proyecto)
3.  [Tecnologías Utilizadas](#-tecnologías-utilizadas)
4.  [Instalación y Puesta en Marcha](#-instalación-y-puesta-en-marcha)
5.  [Uso y Scripts](#-uso-y-scripts)
6.  [Estructura de Componentes (Atomic Design)](#-estructura-de-componentes-atomic-design)

---

## Características Principales

* **Diseño Modular (Atomic Design):** Componentes altamente reutilizables y fáciles de mantener.
* **Página Única:** Implementación de una `HomePage` que integra todas las secciones principales del sitio.
* **Gestión de Contenido Centralizada:** Datos estáticos y de configuración manejados en el directorio `constants`.
* **Experiencia de Usuario:** Incluye animaciones de desplazamiento (`useScrollAnimation`) y desplazamiento suave (`SmoothScroll`).
* **Secciones Clave:** Incluye módulos predefinidos para secciones comunes como `Hero`, `About`, `Activities`, `Contact`, e `Impact`.

---

## Estructura del Proyecto

El corazón de la aplicación se encuentra en el directorio `src/`, organizado de la siguiente manera:

## Tecnologías Utilizadas

Este proyecto está construido con las siguientes tecnologías:

* **Framework:** [React](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Estilos:** CSS/Tailwind 

---

## Instalación y Puesta en Marcha

Sigue estos pasos para clonar el repositorio y ejecutar el proyecto localmente.

### Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/) y npm/yarn instalados en tu sistema.

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL-DEL-REPOSITORIO]
    cd [nombre-del-proyecto]
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Configuración de Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade las variables necesarias (p. ej., claves de servicio de correo si usas `EmailServices.ts`).

---

## ▶Uso y Scripts

Para desarrollar y construir la aplicación, usa los siguientes comandos:

| Script | Descripción | Comando |
| :--- | :--- | :--- |
| **Desarrollo** | Inicia el servidor de desarrollo con hot-reloading. | `npm run dev` |
| **Build** | Compila la aplicación para producción en el directorio `dist`. | `npm run build` |
| **Lint** | Ejecuta el linter para mantener la calidad del código. | `npm run lint` |
| **Previsualización** | Sirve el build de producción localmente. | `npm run preview` |

---

## Estructura de Componentes (Atomic Design)

La jerarquía de componentes es clave para la escalabilidad:

### Atoms (`components/atoms`)

Los bloques de construcción más pequeños (botones, iconos, tipografía, entradas de formulario). Son puros y no contienen lógica de aplicación.

* **Ejemplos:** `PrimaryButton.tsx`, `DynamicIcon.tsx`, `Heading.tsx`, `Avatar.tsx`.

### Molecules (`components/molecules`)

Grupos de átomos unidos para funcionar como una unidad. Contienen algo de lógica, pero no la estructura de la página.

* **Ejemplos:** `ActivityCard.tsx` (usa `Image`, `Heading` y `ActivityDateBadge`), `ContactForm.tsx`, `FloatingStatsCard.tsx`.

### Organisms (`components/organisms`)

Grupos de moléculas y átomos que componen secciones complejas o interfaces completas. Están altamente conectados a la página y representan áreas de la interfaz.

* **Ejemplos:** `Navigation.tsx`, `Footer.tsx`, y todas las secciones específicas de la página (`AboutSection.tsx`, `HeroSection.tsx`, etc.).

---

