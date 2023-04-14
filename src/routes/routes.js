const { Router } = require("express");
const router = Router();
const helmet = require("helmet");

const { getAllFilms } = require("../controllers/get/getAllFilmsController");
const { getFilmsById } = require("../controllers/get/getFilmByIdController");
const { postFilm } = require("../controllers/post/postFilmController");

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

//rutas POST
router.post("/films", postFilm);

//rutas PUT

//rutas DELETE

module.exports = router;
