const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//metadata info acerca de mi api
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Star Wars",
            version: "1.0.0",
            description: "Documentación de la API de Star Wars",
        },
    },
    apis: ["src\routes\routes.js"],
};

//documentacion en formato JSON
const swaggerSpec = swaggerJSDoc(options);

//funcion para setear mis documentos
const swaggerDocs = (app, port) => {
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("api/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(
        `📃 Esta version de la API, está disponible en: http://localhost:${port}/api/docs`
    );
};

module.exports = { swaggerDocs };
