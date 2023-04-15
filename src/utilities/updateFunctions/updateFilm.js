const Films = require("../../models/Films");
const { findFilmById } = require("../readFunctions/findFilmById");
/*
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
*/

async function updateFilm(body, idFilm) {
    try {
        const film = await findFilmById(idFilm);

        if (!film) {
            throw new Error(
                `Error. No se ha encontrado una película con el ID: ${idFilm}, para modificar`
            );
        } else {
            const updateObj = {};
            if (body.title) updateObj.title = body.title;
            if (body.episode_id) updateObj.episode_id = body.episode_id;
            if (body.opening_crawl)
                updateObj.opening_crawl = body.opening_crawl;
            if (body.director) updateObj.director = body.director;
            if (body.producer) updateObj.producer = body.producer;
            if (body.release_date) updateObj.release_date = body.release_date;

            const update = await Films.updateOne({ _id: idFilm }, updateObj, {
                new: true,
            });
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
