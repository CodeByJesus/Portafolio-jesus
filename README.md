# Portafolio Personal de Jesus Martinez

¡Bienvenido al repositorio de mi portafolio personal! Este proyecto es una aplicación web desarrollada con Django que muestra mis habilidades, proyectos recientes y experiencia en desarrollo de software.

## 🚀 Características

*   **Página de Inicio:** Presentación personal y resumen de habilidades.
*   **Sección "Sobre Mí":** Detalles sobre mi trayectoria y pasión por el desarrollo.
*   **Conocimientos:** Listado de lenguajes, frameworks, bases de datos y herramientas que domino.
*   **Proyectos Recientes:** Una galería de mis trabajos más destacados.
*   **Contacto:** Información para ponerse en contacto conmigo a través de correo electrónico y redes sociales.
*   **Internacionalización (i18n):** Soporte para múltiples idiomas (Español e Inglés).
*   **Descarga de CV:** Opción para descargar mi currículum en el idioma seleccionado.

## 🛠️ Tecnologías Utilizadas

Este proyecto ha sido construido utilizando las siguientes tecnologías:

**Backend & Framework:**
*   **Python:** Lenguaje de programación principal.
*   **Django:** Framework web de alto nivel para un desarrollo rápido y seguro.
*   **Gunicorn:** Servidor WSGI utilizado en producción.
*   **psycopg2-binary:** Adaptador para la conexión con bases de datos PostgreSQL.
*   **dj-database-url:** Para gestionar la configuración de la base de datos a través de URLs de entorno.

**Frontend:**
*   **HTML5:** Estructura del contenido web.
*   **CSS3:** Estilos y diseño visual.
*   **JavaScript:** Interactividad en el lado del cliente.
*   **Bootstrap:** Framework CSS para un diseño responsivo y moderno.
*   **Font Awesome & Bootstrap Icons:** Librerías de iconos.

**Base de Datos:**
*   **PostgreSQL:** Base de datos relacional utilizada en producción.
*   **SQLite:** Base de datos ligera utilizada para desarrollo local.

**Herramientas & Despliegue:**
*   **Git:** Sistema de control de versiones.
*   **GitHub:** Plataforma para el alojamiento del código fuente.
*   **Render:** Plataforma de despliegue continuo para la aplicación web.
*   **Whitenoise:** Para servir archivos estáticos de Django en producción.

## ⚙️ Configuración y Ejecución Local

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/CodeByJesus/Portafolio-jesus.git
    cd Portafolio-jesus
    ```

2.  **Crear y activar un entorno virtual:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # En Linux/macOS
    # venv\Scripts\activate   # En Windows
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
    La aplicación estará disponible en `http://127.0.0.1:8000/`.

## 🌐 Despliegue en Producción

Este portafolio está desplegado en [Render](https://render.com/). La configuración incluye:
*   **Web Service:** Para la aplicación Django.
*   **PostgreSQL Database:** Para la persistencia de datos.
*   **Comandos de Construcción y de Inicio** configurados para el entorno de Render.
*   **Variables de Entorno** (`SECRET_KEY`, `DEBUG`, `ALLOWED_HOSTS`, `DATABASE_URL`) gestionadas de forma segura.

## 🌍 Internacionalización (i18n)

La aplicación soporta múltiples idiomas. Puedes cambiar el idioma usando el selector en la parte superior de la página.
*   Las cadenas de texto en las plantillas se traducen automáticamente.
*   El CV descargable cambia entre español e inglés según el idioma seleccionado.

## 📧 Contacto

Puedes contactarme a través de:
*   **Correo Electrónico:** [jesusdmartinezj03@gmail.com](mailto:jesusdmartinezj03@gmail.com)
*   **LinkedIn:** [https://www.linkedin.com/in/jesus-martinez-bb4596348/](https://www.linkedin.com/in/jesus-martinez-bb4596348/)
*   **GitHub:** [https://github.com/CodeByJesus](https://github.com/CodeByJesus)
*   **WhatsApp:** [https://wa.me/3018193287](https://wa.me/3018193287)
*   **Telegram:** [https://t.me/eljesus303](https://t.me/eljesus303)

---