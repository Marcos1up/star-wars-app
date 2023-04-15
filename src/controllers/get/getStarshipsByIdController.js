const helmet = require("helmet");
const {
    findStarshipById,
} = require("../../utilities/readFunctions/findStarshipsById");

async function getStarshipById(req, res, next) {
    try {
        const starshipId = req.params.id;
        const starship = await findStarshipById(starshipId);

        if (!starship) {
            return res.status(404).send({
                message: `No se encontró la nave con la id: ${starshipId}. Verifique que el Id proporcionado sea válido`,
            });
        }

        res.status(200).send(starship);
    } catch (error) {
        console.error(error.message, error);
        res.status(500).send({
            message:
                "Ha ocurrido un error INESPERADO al obtener la nave. Por favor, inténtelo de nuevo más tarde",
        });
    }
}

module.exports = { getStarshipById, helmet };
