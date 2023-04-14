const helmet = require("helmet");
const { updateFilm } = require("../../utilities/updateFunctions/updateFilm");

async function putFilmController(req, res) {
    try {
        const idFilm = req.params.id;
        const body = req.body;

        const updateResult = await updateFilm(body, idFilm);

        if (updateResult.length === 0) {
            return res.status(404).send({
                message: "No se encontró la pelicula a actualizar",
            });
        }

        return res.status(200).send({
            message: "Se ha actualizado la película exitosamente!!!",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message:
                "Ha ocurrido un error INESPERADO al actualizar la película",
        });
    }
}

module.exports = {
    putFilmController,
    helmet,
};
