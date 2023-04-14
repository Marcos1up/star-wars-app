const axios = require("axios");
const data = require("../jsonData/films.json");

async function allFilmsData() {
    try {
        const response = await axios.get(data);

        let allFilms = response.map((e) => {
            return {
                title: e.title,
                episode_id: e.episode_id,
                opening_crawl: e.opening_crawl,
                director: e.director,
                release_date: e.release_date,
            };
        });

        if (!allFilms.length) {
            throw new Error("No se encontraron películas en la API.");
        }

        return allFilms;
    } catch (error) {
        console.error("Error al obtener las películas:", error.message);
        throw new Error("No se pudieron obtener las películas.");
    }
}

module.exports = { allFilmsData };
