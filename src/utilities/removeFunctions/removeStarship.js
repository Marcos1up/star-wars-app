const Starships = require("../../models/Starships");

async function removeStarship(idStarship) {
    try {
        if (!idStarship) {
            throw new Error(
                `Error. No se ha encontrado una nave con el ID: ${idStarship}`
            );
        } else {
            const deleted = await Starships.findByIdAndDelete(idStarship);
            return deleted;
        }
    } catch (error) {
        console.error({ message: error.message });
        throw error;
    }
}

module.exports = {
    removeStarship,
};
