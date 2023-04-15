const helmet = require("helmet");
const { findFilmById } = require("../../utilities/readFunctions/findFilmById");

async function getFilmsById(req, res, next) {
    try {
        const filmId = req.params.id;
        const film = await findFilmById(filmId);

        if (!film) {
            return res.status(404).send({
                message: `No se encontró la pelicula con la id: ${filmId}. Verifique que el Id proporcionado sea válido`,
            });
        }

        res.status(200).send(film);
    } catch (error) {
        console.error(error.message, error);
        res.status(500).send({
            message:
                "Ha ocurrido un error inesperado al obtener la pelicula. Por favor, inténtelo de nuevo más tarde",
        });
    }
}

module.exports = { getFilmsById, helmet };
