# Portafolio Personal de Jesus Martinez

¡Bienvenido al repositorio de mi portafolio personal! Este proyecto es el **backend** de una aplicación web desarrollada con Django que gestiona la información de mis habilidades, proyectos y experiencia.

**Nota Importante sobre el Despliegue:**
Debido a las limitaciones y costos asociados con el despliegue continuo de aplicaciones full-stack (backend + frontend) en plataformas gratuitas como Render, Railway, etc., la versión pública de este portafolio ahora utiliza una arquitectura separada:

*   **Frontend Estático:** El diseño visual y la interacción del usuario (HTML, CSS, JavaScript) se han desacoplado y se despliegan como un sitio estático en [Netlify](https://www.netlify.com/). Puedes ver el código fuente de este frontend estático aquí: [github.com/CodeByJesus/portafolio-estatico](https://github.com/CodeByJesus/portafolio-estatico)
*   **Backend (este repositorio):** Este proyecto ahora sirve principalmente como el código fuente del backend. Su propósito es demostrar la implementación de un sistema de gestión de contenido con Django, y está diseñado para ser ejecutado localmente para fines de desarrollo y demostración.

## 🚀 Características (Backend)

*   **Gestión de Contenido:** Permite administrar información sobre habilidades, secciones "Sobre Mí", y proyectos.
*   **API REST:** Proporciona endpoints para acceder a los datos del portafolio.
*   **Internacionalización (i18n):** Soporte para múltiples idiomas en el backend.
*   **Panel de Administración:** Acceso a un panel de administración de Django para gestionar los datos.

## 🛠️ Tecnologías Utilizadas (Backend)

Este proyecto ha sido construido utilizando las siguientes tecnologías:

**Backend & Framework:**
*   **Python:** Lenguaje de programación principal.
*   **Django:** Framework web de alto nivel para un desarrollo rápido y seguro.
*   **Django REST Framework:** Para la creación de APIs RESTful.
*   **Gunicorn:** Servidor WSGI utilizado en producción (si se desplegara el backend).
*   **psycopg2-binary:** Adaptador para la conexión con bases de datos PostgreSQL.
*   **dj-database-url:** Para gestionar la configuración de la base de datos a través de URLs de entorno.
*   **django-environ:** Para la gestión de variables de entorno.
*   **Whitenoise:** Para servir archivos estáticos de Django en producción (si se desplegara el backend).

**Base de Datos:**
*   **PostgreSQL:** Base de datos relacional utilizada en producción (si se desplegara el backend).
*   **SQLite:** Base de datos ligera utilizada para desarrollo local.

**Herramientas:**
*   **Git:** Sistema de control de versiones.
*   **GitHub:** Plataforma para el alojamiento del código fuente.

## ⚙️ Configuración y Ejecución Local (Solo Backend)

Sigue estos pasos para configurar y ejecutar el **backend** de este proyecto en tu máquina local. Esto te permitirá interactuar con el panel de administración de Django y la API.

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/CodeByJesus/Portafolio-jesus.git
    cd Portafolio-jesus
    ```

2.  **Crear y activar un entorno virtual:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # En Linux/macOS
    # venv\\Scripts\\activate   # En Windows
    ```

3.  **Instalar las dependencias:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configurar la base de datos local:**
    Asegúrate de que no exista un archivo `db.sqlite3` en la raíz del proyecto. Si existe, bórralo.
    ```bash
    rm db.sqlite3 # En Linux/macOS
    # del db.sqlite3 # En Windows
    ```
    Luego, aplica las migraciones para crear la base de datos y las tablas:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

5.  **Crear un superusuario (para acceder al panel de administración):**
    ```bash
    python manage.py createsuperuser
    ```
    Sigue las instrucciones para crear tu usuario y contraseña.

6.  **Ejecutar el servidor de desarrollo:**
    ```bash
    python manage.py runserver
    ```
    El **backend** de la aplicación estará disponible en `http://127.0.0.1:8000/`. Puedes acceder al panel de administración en `http://127.0.0.1:8000/admin/`.

## 🌐 Despliegue en Producción

La versión pública de este portafolio ahora utiliza un **frontend estático** desplegado en Netlify, que consume datos de una API (si se implementara una API pública para este backend).

## 🌍 Internacionalización (i18n)

El backend de la aplicación soporta múltiples idiomas para la gestión de contenido.

## 📧 Contacto

Puedes contactarme a través de:
*   **Correo Electrónico:** [jesusdmartinezj03@gmail.com](mailto:jesusdmartinezj03@gmail.com)
*   **LinkedIn:** [https://www.linkedin.com/in/jesus-martinez-bb4596348/](https://www.linkedin.com/in/jesus-martinez-bb4596348/)
*   **GitHub:** [https://github.com/CodeByJesus](https://github.com/CodeByJesus)
*   **WhatsApp:** [https://wa.me/3018193287](https://wa.me/3018193287)
*   **Telegram:** [https://t.me/eljesus303](https://t.me/eljesus303)

---
