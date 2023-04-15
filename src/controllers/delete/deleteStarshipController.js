const helmet = require("helmet");
const {
    removeStarship,
} = require("../../utilities/removeFunctions/removeStarship");

async function deleteStarshipController(req, res, next) {
    try {
        const starshipId = req.params.id;
        const starship = await removeStarship(starshipId);

        if (!starship) {
            return res.status(404).send({
                message: `No se encontró la nave con la id: ${starshipId}. Verifique posibles problemas con la base de datos`,
            });
        }

        res.status(200).send({
            message: `Se ha borrado la nave con la id: ${starshipId} exitosamente!!!`,
        });
    } catch (error) {
        console.error(error.message, error);
        res.status(500).send({
            message:
                "Ha ocurrido un error inesperado al remover la nave de la base de datos. Por favor, inténtelo de nuevo",
        });
    }
}

module.exports = { deleteStarshipController, helmet };
