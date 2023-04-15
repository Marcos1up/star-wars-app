const helmet = require("helmet");
const {
    updateStarship,
} = require("../../utilities/updateFunctions/updateStarship");

async function putStarshipController(req, res, next) {
    try {
        const idStarship = req.params.id;
        const body = req.body;

        const updateResult = await updateStarship(body, idStarship);

        if (updateResult.length === 0) {
            return res.status(404).send({
                message: `No se encontró la nave a actualizar con el Id: ${idStarship}`,
            });
        }

        return res.status(200).send({
            message: "Se ha actualizado la nave exitosamente!!!",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message:
                "Ha ocurrido un error INESPERADO al actualizar la nave. Por favor, inténtelo de nuevo",
        });
    }
}

module.exports = {
    putStarshipController,
    helmet,
};
