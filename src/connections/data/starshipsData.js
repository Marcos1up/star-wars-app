const data = require("../jsonData/starships.json");

async function allStarshipsData() {
    try {
        let allStarships = data.map((e) => {
            return {
                name: e.name,
                model: e.model,
                manufacturer: e.manufacturer,
                cost_in_credits: parseInt(e.cost_in_credits),
                length: parseInt(e.length),
                max_atmosphering_speed: parseInt(e.max_atmosphering_speed),
                crew: e.crew,
                passengers: e.passengers,
                cargo_capacity: parseInt(e.cargo_capacity),
                consumables: e.consumables,
                hyperdrive_rating: parseInt(e.hyperdrive_rating),
                MGLT: parseInt(e.MGLT),
                starship_class: e.starship_class,
            };
        });

        if (!allStarships.length) {
            throw new Error(
                "El archivo JSON está vacío o no contiene naves espaciales"
            );
        }

        return allStarships;
    } catch (error) {
        console.error("Error al obtener las naves espaciales:", error.message);
        throw new Error("No se pudieron obtener las naves espaciales");
    }
}

module.exports = { allStarshipsData };
