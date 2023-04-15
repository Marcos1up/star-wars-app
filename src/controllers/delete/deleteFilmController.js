const helmet = require("helmet");
const { removeFilm } = require("../../utilities/removeFunctions/removeFilm");

async function deleteFilmController(req, res) {
    try {
        const filmId = req.params.id;
        const film = await removeFilm(filmId);

        if (!film) {
            return res.status(404).send({
                message: `No se encontró la pelicula con la id: ${filmId}. Verifique posibles problemas con la base de datos`,
            });
        }

        res.status(200).send({
            message: `Se ha borrado la pelicula con la id: ${filmId} exitosamente!!!`,
        });
    } catch (error) {
        console.error(error.message, error);
        res.status(500).send({
            message:
                "Ha ocurrido un error inesperado al remover la pelicula de la base de datos. Verifique que la Id sea correcta",
        });
    }
}

module.exports = { deleteFilmController, helmet };
