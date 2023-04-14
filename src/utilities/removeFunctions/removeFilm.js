const Films = require("../../models/Films");
//const { findFilmById } = require("../readFunctions/findFilmById");

async function removeFilm(idFilm) {
    try {
        //const film = await findFilmById(idFilm);

        if (!idFilm) {
            throw new Error(
                `Error. No se ha encontrado una película con el ID: ${idFilm}`
            );
        } else {
            const deleted = await Films.findByIdAndDelete(idFilm);
            return deleted;
        }
    } catch (error) {
        console.error({ message: error.message });
        throw error;
    }
}

module.exports = {
    removeFilm,
};
