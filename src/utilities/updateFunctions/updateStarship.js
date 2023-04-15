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
            const update = await Starships.updateOne(
                { _id: idStarship },
                //esto puede ser completamente mejorado, pero no me funcionaba quizas podria modularizar este objeto (AYUDAME JEBUS)
                {
                    name: body.name ? body.name : starship.name,
                    model: body.model ? body.model : starship.model,
                    manufacturer: body.manufacturer
                        ? body.manufacturer
                        : starship.manufacturer,
                    cost_in_credits: body.cost_in_credits
                        ? body.cost_in_credits
                        : starship.cost_in_credits,
                    length: body.length ? body.length : starship.length,
                    max_atmosphering_speed: body.max_atmosphering_speed
                        ? body.max_atmosphering_speed
                        : starship.max_atmosphering_speed,
                    crew: body.crew ? body.crew : starship.crew,
                    passengers: body.passengers
                        ? body.passengers
                        : starship.crew,
                    cargo_capacity: body.cargo_capacity
                        ? body.cargo_capacity
                        : starship.cargo_capacity,
                    consumables: body.consumables
                        ? body.consumables
                        : starship.consumables,
                    hyperdrive_rating: body.hyperdrive_rating
                        ? body.hyperdrive_rating
                        : starship.hyperdrive_rating,
                    MGLT: body.MGLT ? body.MGLT : starship.MGLT,
                    starship_class: body.starship_class
                        ? body.starship_class
                        : starship.starship_class,
                },
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
        "name": "PRUEBAAAAAAA PA BORRAR",
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
