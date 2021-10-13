# Challenge de Front End de MercadoLibre

En este repositorio está definida una aplicación web que sigue la consigna del challenge para desarrolladores de Front End de MercadoLibre.

Esta aplicación se encuentra publicada en Heroku y se puede ver su funcionamiento siguiendo [este link](https://fierce-shore-44710.herokuapp.com/).

## Correr en local

Para ejecutar la aplicación en local debemos ingresar a la carpeta /server e instalar las dependencias

      cd server
      npm install

Luego, iniciamos el servidor a partir del comando dev

      npm run dev

En paralelo, debemos iniciar la aplicación de React. Para esto, ingresamos a la carpeta app e instalamos las dependencias

      cd app
      npm install

Para iniciar el servidor de desarrollo de React lo hacemos a partir del comando start

      npm run start

## Descripción de la app

### Lo que se necesitaba

El desafío consiste en desarrollar una aplicación web para buscar productos haciendo uso de la API de MercadoLibre. Para esto, se definieron tres vistas principales que debían formar parte del frontend. Las tres vistas son la barra de búsqueda, los resultados y una página de producto.

Un usuario, comenzando en la barra de búsqueda, debería poder buscar productos. Estos productos se visualizan a partir de la vista de resultados y un click en alguno de estos resultados debe cargar la vista de página de producto con más detalles del mismo.

Además, debe ser posible acceder a un producto a partir de la url y un id de producto válido.

### Lo que se desarrolló

Para llegar a una solución válida, se hizo el desarrollo de una aplicación del frontend en React y se construyó un servidor con Express.

#### Frontend

- Se hizo uso de [react-router-dom](https://reactrouter.com/web/guides/quick-start) para la navegación entre distintas vistas.
- Se organizó el proyecto de manera que los componentes a los que apunta una ruta se consideren páginas, estando agrupados en el directorio `/pages`.
- Se trabajó en [typescript](https://www.typescriptlang.org/).
- Para los estilos globales y de los componentes, se utilizó [Sass](https://sass-lang.com/).
- Se realizaron test unitarios utilizando [testing-library](https://testing-library.com/). Los mismos pueden ser ejecutados a partir del comando `npm run test`.
- Se utilizó [react-helmet](https://github.com/nfl/react-helmet) para mejorar el SEO de la aplicación.

#### Backend

- En el directorio `/clients`, se definió un cliente para las consultas externas a la API de MercadoLibre.
- En el directorio `/controllers` se definieron los handlers encargados de dar respuesta a los requests provenientes del front.
- Se utilizó [axios](https://www.npmjs.com/package/axios) para los requests a servicios externos.

### Lo que no se desarrolló

En esta sección menciono cosas que no están incluidas tanto en el frontend como en el backend y que considero que serían las principales candidatas a ser desarrolladas en una segunda iteración.

#### Frontend

- Lograr una mayor covertura con las pruebas unitarias.
- Implementación de pruebas e2e utilizando, por ejemplo, cypress.

#### Backend

- Server Side Rendering de la aplicación de React.
- Pasar todo el javascript a typescript.
- Incluir pruebas unitarias y e2e.
