const { Router } = require("express");
const router = Router();
const helmet = require("helmet");

const { getAllFilms } = require("../controllers/get/getAllFilmsController");
const { getFilmsById } = require("../controllers/get/getFilmByIdController");
const { postFilm } = require("../controllers/post/postFilmController");
const { putFilmController } = require("../controllers/put/putFilmController");
const {
    deleteFilmController,
} = require("../controllers/delete/deleteFilmController");
const { getAllPlanets } = require("../controllers/get/getAllPlanetsController");
const {
    getPlanetsById,
} = require("../controllers/get/getPlanetsByIdController");

//protección contra vulnerabilidades de OWASP >:(
router.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'", "data:", "validator.swagger.io"],
                connectSrc: ["'self'"],
            },
        },
    })
);

//rutas GET
router.get("/films", getAllFilms);
router.get("/films/:id", getFilmsById);

router.get("/planets", getAllPlanets);
router.get("/planets/:id", getPlanetsById);

router.get("/starships");
router.get("/starships/:id");

//rutas POST
router.post("/films", postFilm);

//rutas PUT
router.put("/films/:id", putFilmController);

//rutas DELETE
router.delete("/films/:id", deleteFilmController);

module.exports = router;
