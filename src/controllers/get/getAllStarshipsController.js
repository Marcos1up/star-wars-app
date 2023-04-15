const helmet = require("helmet");
const { allStarships } = require("../../utilities/readFunctions/allStarships");

async function getAllStarships(req, res, next) {
    try {
        const allStarshipsDb = await allStarships();

        if (allStarshipsDb.length) {
            res.status(200).send(allStarshipsDb);
        } else {
            res.status(404).send({
                message:
                    "No se encontraron las naves. Verifique posibles problemas con la base de datos",
            });
        }
    } catch (error) {
        console.error({ message: error.message }, error);
        res.status(500).send({
            message:
                "Ha ocurrido un error inesperado al obtener TODAS las naves. Por favor, inténtelo de nuevo más tarde",
        });
    }
}

module.exports = { getAllStarships, helmet };
