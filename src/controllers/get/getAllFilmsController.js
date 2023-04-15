const { allFilms } = require("../../utilities/readFunctions/allFilms");
const helmet = require("helmet");

async function getAllFilms(req, res, next) {
    try {
        const allFilmsDb = await allFilms();

        if (allFilmsDb.length) {
            res.status(200).send(allFilmsDb);
        } else {
            res.status(404).send({
                message:
                    "No se encontraron las películas. Verifique posibles problemas con la base de datos",
            });
        }
    } catch (error) {
        console.error({ message: error.message }, error);
        res.status(500).send({
            message:
                "Ha ocurrido un error inesperado al obtener TODAS las películas. Por favor, inténtelo de nuevo más tarde",
        });
    }
}

module.exports = { getAllFilms, helmet };
