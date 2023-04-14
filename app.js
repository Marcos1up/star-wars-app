const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

const routes = require("./src/routes/routes");

//helmet para configurar las cabeceras HTTP
server.use(helmet());

server.use(morgan("tiny"));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

//rutas base
server.use("", routes);

module.exports = server;
