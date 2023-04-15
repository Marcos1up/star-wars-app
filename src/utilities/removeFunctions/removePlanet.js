const Planets = require("../../models/Planets");

async function removePlanet(idPlanet) {
    try {
        if (!idPlanet) {
            throw new Error(
                `Error. No se ha encontrado un planeta con el ID: ${idPlanet}`
            );
        } else {
            const deleted = await Planets.findByIdAndDelete(idPlanet);
            return deleted;
        }
    } catch (error) {
        console.error({ message: error.message });
        throw error;
    }
}

module.exports = {
    removePlanet,
};
