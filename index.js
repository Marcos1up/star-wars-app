require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./app.js");
const PORT = process.env.PORT || 3800;
const { swaggerDocs: V1SwaggerDocs } = require("./swagger.js");

const url = process.env.DB_CREDENTIAL;

//para quitar una alerta molesta de la consola (una actualizacion)
mongoose.set("strictQuery", false);

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("¡Conexión a MongoDB exitosa!");
        server.listen(PORT, () => {
            console.log("El servidor está corriendo en: ", PORT);
            V1SwaggerDocs(server, PORT);
        });
    })
    .catch((error) => {
        console.log("Error al conectarse a MongoDB:", error);
    });
