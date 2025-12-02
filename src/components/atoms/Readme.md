# Directorio Atoms

El directorio **`atoms`** contiene los componentes más pequeños y reutilizables de la aplicación.  
Siguiendo el **Diseño Atómico (Atomic Design)**, estos componentes son bloques de construcción básicos que pueden combinarse para crear moléculas, organismos y secciones completas.

---

## Subdirectorios y Componentes

### 1. `buttons`

Contiene **botones reutilizables** con estilos y comportamientos definidos:

* `GalleryButton.tsx` – Botón específico para galerías o carruseles.  
* `HamburgerButton.tsx` – Botón tipo “hamburguesa” para menús móviles.  
* `PrimaryButton.tsx` – Botón principal de acción, con estilo destacado.  
* `SecondaryButton.tsx` – Botón secundario, menos prominente que el primario.  

---

### 2. `cards`

Componentes de **tarjeta (card)** para mostrar contenido agrupado:

* `BaseCard.tsx` – Tarjeta base reutilizable que sirve de plantilla para otras tarjetas, incluyendo estilos, sombra y padding uniformes.  

---

### 3. `icons`

Componentes de **iconos reutilizables** para la interfaz de usuario:

* `DynamicIcon.tsx` – Icono dinámico que puede cambiar según props o contexto.  
* `IconBox.tsx` – Contenedor visual para un icono con fondo y padding.  
* `IconLink.tsx` – Icono que actúa como enlace externo.  
* `IconWrapper.tsx` – Wrapper para aplicar estilos o animaciones a iconos.  
* `QuoteIcon.tsx` – Icono decorativo para citas.  
* `SocialIconLink.tsx` – Iconos de redes sociales con enlace.  
* `StarIcon.tsx` – Icono de estrella reutilizable.  

---

### 4. `layout`

Componentes que afectan **la disposición visual y elementos estructurales**:

* `ActivityDateBadge.tsx` – Pequeña etiqueta con la fecha de una actividad.  
* `Avatar.tsx` – Componente de avatar para usuarios.  
* `Badge.tsx` – Etiqueta decorativa para resaltar información.  
* `CategoryTag.tsx` – Etiqueta para clasificar categorías de contenido.  
* `DivideBar.tsx` – Barra visual divisoria entre secciones.  
* `DividerGradient.tsx` – Barra divisoria con degradado y animación.  
* `Dot.tsx` – Indicador animado tipo “punto” para timeline u otras UI.  
* `Image.tsx` – Componente base para imágenes con estilos consistentes.  
* `Indicator.tsx` – Indicador visual para sliders o galerías.  
* `ModalBase.tsx` – Estructura base de un modal con animaciones y soporte para scroll.  
* `TimeLineDot.tsx` – Punto decorativo animado para líneas de tiempo.  

---

### 5. `misc`

Componentes **varios y utilitarios**:

* `ContactItem.tsx` – Elemento de contacto con icono y texto.  
* `InputText.tsx` – Campo de entrada de texto con estilos consistentes.  
* `TextArea.tsx` – Área de texto multi-línea reutilizable.  

---

### 6. `navigation`

Componentes relacionados con **navegación**:

* `NavLink.tsx` – Enlace de navegación con efecto de scroll suave y estado activo.  

---

### 7. `typography`

Componentes de **tipografía y textos**:

* `Heading.tsx` – Título principal o subtítulos.  
* `Paragraph.tsx` – Párrafo con estilo uniforme.  
* `StatDescription.tsx` – Descripción pequeña para estadísticas.  
* `StatLabel.tsx` – Etiqueta de estadística.  
* `StatValue.tsx` – Valor destacado de estadística.  

---

## 📌 Resumen

Los **atoms** son la base de todos los demás componentes. Son:

* Pequeños y reutilizables.  
* Sin lógica de negocio compleja.  
* Diseñados para combinarse en moléculas y organismos.  
* Clave para mantener la consistencia visual y la escalabilidad del proyecto.
