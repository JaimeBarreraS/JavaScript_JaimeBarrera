# Star Wars Character Info

Este proyecto es una aplicación web simple que muestra información detallada sobre un personaje específico de Star Wars utilizando la API pública de Star Wars (SWAPI). La información incluye detalles sobre el personaje, su planeta natal, las películas en las que aparece, las especies a las que pertenece, los vehículos que usa y las naves espaciales que pilotea.

## Requisitos

- Un navegador web moderno con soporte para JavaScript.

## Descripción del Código

El código principal está en un archivo JavaScript que se ejecuta cuando la página HTML se carga. Aquí está un resumen de lo que hace el código:

### Estructura del Código

- **`DOMContentLoaded Event`**: El código se asegura de que solo se ejecute una vez que el DOM haya terminado de cargarse, utilizando el evento `DOMContentLoaded`.

- **`Url`**: Se define una URL para obtener información sobre el personaje `Luke Skywalker` (ID 1) desde la API de SWAPI.

- **`dataTable`**: Se refiere al elemento de la tabla HTML donde se mostrará la información.

### Función `fetchStar`

Esta función hace lo siguiente:

1. **Obtiene datos del personaje** desde la API.
2. **Obtiene datos sobre el planeta natal** del personaje.
3. **Hace solicitudes adicionales para obtener datos sobre películas, especies, vehículos y naves espaciales** relacionadas con el personaje.
4. **Muestra toda esta información en una tabla HTML** utilizando la función `cargarTabla`.
5. **Manejo de errores**: Si alguna de las solicitudes falla, muestra un mensaje de error en la tabla.

### Función `cargarTabla`

Esta función es responsable de construir y rellenar dinámicamente la tabla HTML con la información obtenida de la API. La información incluye:

- Datos generales del personaje (nombre, altura, masa, etc.).
- Detalles del planeta natal (nombre, clima, población, etc.).
- Detalles de las películas en las que aparece el personaje.
- Información sobre las especies a las que pertenece.
- Datos sobre vehículos y naves espaciales.

### Manejo de Errores

Si ocurre un error durante la obtención de datos, el error se captura y se muestra un mensaje en la tabla HTML.

## Cómo Ejecutar el Proyecto

1. Clona o descarga este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. La información sobre Luke Skywalker y sus asociaciones aparecerá automáticamente en la tabla de la página.

## API Usada

- [Star Wars API (SWAPI)](https://swapi.py4e.com/)

Esta API pública proporciona datos sobre personajes, planetas, películas, especies, vehículos y naves espaciales de la franquicia Star Wars.

## Autor

Jaime Barrera Sandoval
