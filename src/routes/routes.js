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
const { postPlanet } = require("../controllers/post/postPlanetController");
const {
    putPlanetController,
} = require("../controllers/put/putPlanetController");
const {
    deletePlanetController,
} = require("../controllers/delete/deletePlanetController");
const {
    getAllStarships,
} = require("../controllers/get/getAllStarshipsController");
const {
    getStarshipById,
} = require("../controllers/get/getStarshipsByIdController");
const {
    deleteStarshipController,
} = require("../controllers/delete/deleteStarshipController");
const {
    putStarshipController,
} = require("../controllers/put/putStarshipController");
const { postStarship } = require("../controllers/post/postStarshipController");

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
//documentacion de swagger (AY DIOS):
/**
 * @swagger
 * /planets:
 *   get:
 *     summary: Obtiene todos los planetas
 *     description: Retorna una lista con todos los planetas de Star Wars
 *     tags:
 *       - Planetas
 *     responses:
 *       '200':
 *         description: Lista de planetas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Planet'
 */

//rutas GET
router.get("/films", getAllFilms);
router.get("/films/:id", getFilmsById);

router.get("/planets", getAllPlanets);
router.get("/planets/:id", getPlanetsById);

router.get("/starships", getAllStarships);
router.get("/starships/:id", getStarshipById);

//rutas POST
router.post("/films", postFilm);

router.post("/planets", postPlanet);

router.post("/starships", postStarship);

//rutas PUT
router.put("/films/:id", putFilmController);

router.put("/planets/:id", putPlanetController);

router.put("/starships/:id", putStarshipController);

//rutas DELETE
router.delete("/films/:id", deleteFilmController);

router.delete("/planets/:id", deletePlanetController);

router.delete("/starships/:id", deleteStarshipController);

module.exports = router;
