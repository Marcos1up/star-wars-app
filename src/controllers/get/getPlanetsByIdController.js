const helmet = require("helmet");
const {
    findPlanetById,
} = require("../../utilities/readFunctions/findPlanetById");

async function getPlanetsById(req, res, next) {
    try {
        const planetId = req.params.id;
        const planet = await findPlanetById(planetId);

        if (!planet) {
            return res.status(404).send({
                message: `No se encontró planeta con la id: ${planetId}. Verifique que el Id proporcionado sea válido`,
            });
        }

        res.status(200).send(planet);
    } catch (error) {
        console.error(error.message, error);
        res.status(500).send({
            message:
                "Ha ocurrido un error INESPERADO al obtener el planeta. Por favor, inténtelo de nuevo más tarde",
        });
    }
}

module.exports = { getPlanetsById, helmet };
