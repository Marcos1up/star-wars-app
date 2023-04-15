const { starshipsToDb } = require("../../connections/dbConnect/starshipsToDb");
const Starships = require("../../models/Starships");

async function allStarships() {
    try {
        const starshipsInDb = await starshipsToDb();

        if (starshipsInDb.length === 0) {
            throw new Error("No se encontraron naves en la base de datos");
        }

        const allStarships = await Starships.find();

        return allStarships;
    } catch (error) {
        console.error(`Error al obtener todas las naves: ${error.message}`);
        throw new Error(
            "Ha ocurrido un error inesperado al obtener TODAS las naves"
        );
    }
}

module.exports = { allStarships };
