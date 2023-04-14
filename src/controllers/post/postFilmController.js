const helmet = require("helmet");
const { createFilm } = require("../../utilities/createFunctions/createFilm");

async function postFilm(req, res) {
    const info = req.body;
    try {
        if (
            !info ||
            !info.title ||
            !info.episode_id ||
            !info.opening_crawl ||
            !info.director ||
            !info.producer ||
            !info.release_date
        ) {
            return res.status(400).send({
                message:
                    "La información proporcionada es incorrecta. Verifique que todos los campos estén completos",
            });
        }

        const result = await createFilm(info);

        console.log("La pelicula fue creada exitosamente!!!");

        res.status(201).send(result);
    } catch (error) {
        console.error({ message: error.message });
        res.status(500).send({
            message: "Ha ocurrido un error INESPERADO al crear la pelicula",
        });
    }
}

module.exports = { postFilm, helmet };
