const helmet = require("helmet");
const { allPlanets } = require("../../utilities/readFunctions/allPlanets");

async function getAllPlanets(req, res, next) {
    try {
        const allPlanetsDb = await allPlanets();

        if (allPlanetsDb.length) {
            res.status(200).send(allPlanetsDb);
        } else {
            res.status(404).send({
                message:
                    "No se encontraron los planetas. Verifique posibles problemas con la base de datos",
            });
        }
    } catch (error) {
        console.error({ message: error.message }, error);
        res.status(500).send({
            message:
                "Ha ocurrido un error inesperado al obtener TODOS los planetas. Por favor, inténtelo de nuevo más tarde",
        });
    }
}

module.exports = { getAllPlanets, helmet };
