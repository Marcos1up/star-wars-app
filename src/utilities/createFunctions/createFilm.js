const Films = require("../../models/Films");

async function createFilm(data) {
    try {
        if (
            !data ||
            !data.title ||
            !data.episode_id ||
            !data.opening_crawl ||
            !data.director ||
            !data.producer ||
            !data.release_date
        ) {
            console.log(
                "debe tener los valores 'title', 'episode_id', 'opening_crawl', 'director' y 'release_date'"
            );
            throw new Error(
                "Falta información necesaria para crear la película. Verifique que la información ingresada sea correcta"
            );
        }

        const newFilm = new Films({
            title: data.title,
            episode_id: data.episode_id,
            opening_crawl: data.opening_crawl,
            director: data.director,
            producer: data.producer,
            release_date: data.release_date,
        });

        const savedFilm = await newFilm.save();
        return savedFilm;
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
        throw new Error(
            "Ha ocurrido un error inesperado al crear la pelicula. Por favor, intentelo de nuevo"
        );
    }
}

module.exports = { createFilm };
