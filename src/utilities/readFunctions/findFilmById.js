const Films = require("../../models/Films");

async function findFilmById(idFilm) {
    try {
        if (!idFilm) {
            throw new Error("Error. No se ha proporcionado un ID válido");
        } else {
            const film = await Films.findById(idFilm);
            if (!film) {
                throw new Error(
                    `Error. No se ha encontrado una película con el ID: ${idFilm}`
                );
            }
            return film;
        }
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
        throw error;
    }
}

module.exports = {
    findFilmById,
};
