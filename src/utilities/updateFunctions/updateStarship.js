const Starships = require("../../models/Starships");
const { findStarshipById } = require("../readFunctions/findStarshipsById");

async function updateStarship(body, idStarship) {
    try {
        const starship = await findStarshipById(idStarship);

        if (!starship) {
            throw new Error(
                `Error. No se ha encontrado una nave con el ID: ${idStarship}, para modificar`
            );
        } else {
            const updateFields = {};

            //recorro los campos y los agrego al auxiliar (AYUDAME JEBUS. QUE FUNQUE)
            Object.keys(body).forEach((key) => {
                if (body[key] !== undefined) {
                    updateFields[key] = body[key];
                }
            });

            const update = await Starships.updateOne(
                { _id: idStarship },
                updateFields,
                { new: true }
            );
            return update;
        }
    } catch (error) {
        console.error({ message: error.message });
        throw error;
    }
}

module.exports = {
    updateStarship,
};

/* 

{
        "name": "PRUEBAAAA",
        "model": "DS-1 Orbital Battle Station",
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
        "cost_in_credits": 1000000000000,
        "length": 120000,
        "max_atmosphering_speed": "n/a",
        "crew": "342,953",
        "passengers": "843,342",
        "cargo_capacity": 1000000000000,
        "consumables": "3 years",
        "hyperdrive_rating": 4.3,
        "MGLT": 10,
        "starship_class": "Deep Space Mobile Battlestation"
    }

*/
