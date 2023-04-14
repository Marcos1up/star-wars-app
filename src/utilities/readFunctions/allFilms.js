const { filmsToDb } = require("../../connections/dbConnect/filmsToDb");
const Films = require("../../models/Films");

async function allFilms() {
    try {
        const filmsInDb = await filmsToDb();

        if (filmsInDb.length === 0) {
            throw new Error("No se encontraron peliculas en la base de datos");
        }

        const allFilms = await Films.find();

        return allFilms;
    } catch (error) {
        console.error(`Error al obtener todas las películas: ${error.message}`);
        throw new Error(
            "Ha ocurrido un error inesperado al obtener TODAS las películas"
        );
    }
}

module.exports = { allFilms };
