const Planets = require("../../models/Planets");

async function findPlanetById(idPlanet) {
    try {
        if (!idPlanet) {
            throw new Error("Error. No se ha proporcionado un ID válido");
        } else {
            const planet = await Planets.findById(idPlanet);

            if (!planet) {
                throw new Error(
                    `Error. No se ha encontrado un planeta con el ID: ${idPlanet}`
                );
            }
            return planet;
        }
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
        throw error;
    }
}

module.exports = {
    findPlanetById,
};
