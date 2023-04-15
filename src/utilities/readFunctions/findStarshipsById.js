const Starships = require("../../models/Starships");

async function findStarshipById(idStarship) {
    try {
        if (!idStarship) {
            throw new Error("Error. No se ha proporcionado un ID válido");
        } else {
            const starship = await Starships.findById(idStarship);
            if (!starship) {
                throw new Error(
                    `Error. No se ha encontrado una nave con el ID: ${idStarship}`
                );
            }
            return starship;
        }
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
        throw error;
    }
}

module.exports = {
    findStarshipById,
};
