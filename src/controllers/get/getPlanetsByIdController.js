const helmet = require("helmet");
const {
    findPlanetById,
} = require("../../utilities/readFunctions/findPlanetById");

async function getPlanetsById(req, res) {
    try {
        const planetId = req.params.id;
        const planet = await findPlanetById(planetId);

        if (!planet) {
            return res.status(404).send({
                message: `No se encontró planeta con la id: ${planetId}. Verifique posibles problemas con la base de datos`,
            });
        }

        res.status(200).send(planet);
    } catch (error) {
        console.error(error.message, error);
        res.status(500).send({
            message: "Ha ocurrido un error INESPERADO al obtener el planeta",
        });
    }
}

module.exports = { getPlanetsById, helmet };
