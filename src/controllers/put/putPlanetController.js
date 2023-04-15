const helmet = require("helmet");
const {
    updatePlanet,
} = require("../../utilities/updateFunctions/updatePlanet");

async function putPlanetController(req, res, next) {
    try {
        const idPlanet = req.params.id;
        const body = req.body;

        const updateResult = await updatePlanet(body, idPlanet);

        if (updateResult.length === 0) {
            return res.status(404).send({
                message: `No se encontró el planeta a actualizar con el Id: ${idPlanet}`,
            });
        }

        return res.status(200).send({
            message: "Se ha actualizado el planeta exitosamente!!!",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message:
                "Ha ocurrido un error INESPERADO al actualizar el planeta. Por favor, inténtelo de nuevo",
        });
    }
}

module.exports = {
    putPlanetController,
    helmet,
};
