const Films = require("../../models/Films");
const { allFilmsData } = require("../data/filmsData");

async function filmsToDb() {
    try {
        const allFilms = await Films.find();
        if (allFilms.length) {
            console.log(
                "Las peliculas ya han sido cargadas en la base de datos con anterioridad"
            );
            return allFilms;
        }

        const data = await allFilmsData();
        if (!data || !data.length) {
            throw new Error("No se encontraron peliculas en el archivo JSON");
        } else {
            //mapear los datos para guardarlos en la DB
            const filmsToSave = await Promise.all(
                data.map(async (e) => {
                    const jsonFilms = new Films({
                        title: e.title,
                        episode_id: e.episode_id,
                        opening_crawl: e.opening_crawl,
                        director: e.director,
                        release_date: e.release_date,
                    });

                    return jsonFilms.save();
                })
            );

            return filmsToSave;
        }
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
        throw new Error(
            "No se pudieron cargar las pelculas en la base de datos"
        );
    }
}

module.exports = { filmsToDb };

/* 

title: e.title,
                episode_id: e.episode_id,
                opening_crawl: e.opening_crawl,
                director: e.director,
                release_date: e.release_date,

*/
