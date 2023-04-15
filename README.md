# Star Wars App - Api Rest


Un api rest para la gestión y obtencion de informacion de la saga de peliculas de Star Wars, donde los usuarios podrán buscar las peliculas, los planetas y las naves espaciales por medio de un Id. También pueden editar y registrar información nueva que sea proporcionada por el usuario, que será guardada en una base de datos.

___


## Comenzando 🚀

_Para poder ejecutar el proyecto de forma local deberá crear los archivos .env en la carpeta raiz con la configuración necesaria de acuerdo a sus especifícaciones_



### Pre-requisitos 📋

_Se necesita estar registrado en los siguientes servicios para ejecutar Heladitos APP_

* [MongoDB](https://www.mongodb.com/)
* [Mongo Atlas](https://www.mongodb.com/es/atlas/database)

### Instalación 🔧

_Para ejecutar el proyecto se deberá navegar con el terminal dentro de la carpeta raiz del proyecto, donde deberán seguir los siguientes pasos:_


_⌨️ Para instalar los servicios, navegar dentro de la carpeta correspondiente y ejecutar el comando_

```
npm install
```

_⌨️ Para ejecutarlo_

```
npm start
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

### Endpoints 🚩

* /films - Método GET - Devuelve todos los registros de películas existentes, incluyendo las creadas por el usuario.
* /films/:id - Método GET - Recibe una id, busca en la base de datos la película con esa Id y lo devuelve.
* /films - Método POST - Crea una película en la base de datos. Tiene una fuerte validacion de datos.
* /films/:id - Método PUT - Recibe una id, busca en la base de datos la película con esa Id, lo actualiza y devuelve la nueva película actualizada.
* /films/:id - Método DELETE - Recibe una id, busca en la base de datos la película con esa Id, lo elimina y devuelve un mensaje de éxito.

* /planets - Método GET - Devuelve todos los registros de planeta existentes, incluyendo las creadas por el usuario.
* /planets/:id - Método GET - Recibe una id, busca en la base de datos el planeta con esa Id y lo devuelve.
* /planets - Método POST - Crea un planeta en la base de datos. Tiene una fuerte validacion de datos.
* /planets/:id - Método PUT - Recibe una id, busca en la base de datos el planeta con esa Id, lo actualiza y devuelve el nuevo planeta actualizado.
* /planets/:id - Método DELETE - Recibe una id, busca en la base de datos el planeta con esa Id, lo elimina y devuelve un mensaje de éxito.

* /starships - Método GET - Devuelve todos los registros de naves espaciales existentes, incluyendo las creadas por el usuario.
* /starships/:id - Método GET - Recibe una id, busca en la base de datos la nave espacial con esa Id y lo devuelve.
* /starships - Método POST - Crea una nave espacial en la base de datos. Tiene una fuerte validacion de datos.
* /starships/:id - Método PUT - Recibe una id, busca en la base de datos la nave espacial con esa Id, lo actualiza y devuelve la nueva nave espacial actualizada.
* /starships/:id - Método DELETE - Recibe una id, busca en la base de datos la nave espacial con esa Id, lo elimina y devuelve un mensaje de éxito.


## Construido con 🛠️

_Para la construcción de Heladitos APP se utilizaron las siguientes tecnologías_

* [NodeJs](https://nodejs.org/en/) - Para la creación del server.
* [ExpressJs](https://expressjs.com/es/) - Para la creación del REST API.
* [MongoDB](https://www.mongodb.com/) - Para la Base de Datos.
* [Mongoose](https://mongoosejs.com/) - ORM para Mongo DB.
* [Mongo Atlas](https://www.mongodb.com/es/atlas/database) - Como host de la Base de Datos.

---
⌨️ con ❤️ por [Marcos1up](https://github.com/Marcos1up) 😊
