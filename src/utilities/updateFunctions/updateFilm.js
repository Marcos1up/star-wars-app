const Films = require("../../models/Films");
const { findFilmById } = require("../readFunctions/findFilmById");

async function updateFilm(body, idFilm) {
    try {
        const film = await findFilmById(idFilm);

        if (!film) {
            throw new Error(
                `Error. No se ha encontrado una película con el ID: ${idFilm}, para modificar`
            );
        } else {
            const update = await Films.updateOne(
                { _id: idFilm },
                {
                    title: body.title ? body.title : film.title,
                    episode_id: body.episode_id
                        ? body.episode_id
                        : film.episode_id,
                    opening_crawl: body.opening_crawl
                        ? body.opening_crawl
                        : film.opening_crawl,
                    director: body.director ? body.director : film.director,
                    producer: body.producer ? body.producer : film.producer,
                    release_date: body.release_date
                        ? body.release_date
                        : film.release_date,
                },
                { new: true }
            );
            return update;
        }
    } catch (error) {
        console.error({ message: error.message });
        throw error;
    }
}

module.exports = {
    updateFilm,
};
