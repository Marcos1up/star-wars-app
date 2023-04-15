const helmet = require("helmet");
const {
    findStarshipById,
} = require("../../utilities/readFunctions/findStarshipsById");

async function getStarshipById(req, res) {
    try {
        const starshipId = req.params.id;
        const starship = await findStarshipById(starshipId);

        if (!starship) {
            return res.status(404).send({
                message: `No se encontró la nave con la id: ${starshipId}. Verifique posibles problemas con la base de datos`,
            });
        }

        res.status(200).send(starship);
    } catch (error) {
        console.error(error.message, error);
        res.status(500).send({
            message: "Ha ocurrido un error INESPERADO al obtener la nave",
        });
    }
}

module.exports = { getStarshipById, helmet };
