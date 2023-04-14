const data = require("../jsonData/films.json");

async function allFilmsData() {
    try {
        let allFilms = data.map((e) => {
            return {
                title: e.title,
                episode_id: e.episode_id,
                opening_crawl: e.opening_crawl,
                director: e.director,
                release_date: e.release_date,
            };
        });

        if (!allFilms.length) {
            throw new Error(
                "El archivo JSON está vacío o no contiene películas"
            );
        }

        return allFilms;
    } catch (error) {
        console.error("Error al obtener las películas:", error.message);
        throw new Error("No se pudieron obtener las películas");
    }
}

module.exports = { allFilmsData };
