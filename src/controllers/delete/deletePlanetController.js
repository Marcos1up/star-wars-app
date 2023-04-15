const helmet = require("helmet");
const {
    removePlanet,
} = require("../../utilities/removeFunctions/removePlanet");

async function deletePlanetController(req, res) {
    try {
        const planetId = req.params.id;
        const planet = await removePlanet(planetId);

        if (!planet) {
            return res.status(404).send({
                message: `No se encontró el planeta con la id: ${planetId}. Verifique posibles problemas con la base de datos`,
            });
        }

        res.status(200).send({
            message: `Se ha borrado el planeta con la id: ${planetId} exitosamente!!!`,
        });
    } catch (error) {
        console.error(error.message, error);
        res.status(500).send({
            message:
                "Ha ocurrido un error INESPERADO al remover el planeta de la base de datos. Verifique que la Id sea correcta",
        });
    }
}

module.exports = { deletePlanetController, helmet };
