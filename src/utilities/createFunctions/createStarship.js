const Starships = require("../../models/Starships");

async function createStarship(data) {
    try {
        if (
            !data ||
            !data.name ||
            !data.model ||
            !data.manufacturer ||
            !data.cost_in_credits ||
            !data.length ||
            !data.max_atmosphering_speed ||
            !data.crew ||
            !data.passengers ||
            !data.cargo_capacity ||
            !data.consumables ||
            !data.hyperdrive_rating ||
            !data.MGLT ||
            !data.starship_class
        ) {
            throw new Error(
                "Falta información necesaria para crear la nave. Verifique que la información ingresada sea correcta"
            );
        }

        const newStarship = new Starships({
            name: data.name,
            model: data.model,
            manufacturer: data.manufacturer,
            cost_in_credits: data.cost_in_credits,
            length: data.length,
            max_atmosphering_speed: data.max_atmosphering_speed,
            crew: data.crew,
            passengers: data.passengers,
            cargo_capacity: data.cargo_capacity,
            consumables: data.consumables,
            hyperdrive_rating: data.hyperdrive_rating,
            MGLT: data.MGLT,
            starship_class: data.starship_class,
        });

        const savedStarship = await newStarship.save();
        return savedStarship;
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
        throw new Error(
            "Ha ocurrido un error inesperado al crear la nave. Por favor, intentelo de nuevo"
        );
    }
}

module.exports = { createStarship };

/* 

{
        "name": "Death Star",
        "model": "DS-1 Orbital Battle Station",
        "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
        "cost_in_credits": "1000000000000",
        "length": "120000",
        "max_atmosphering_speed": "n/a",
        "crew": "342,953",
        "passengers": "843,342",
        "cargo_capacity": "1000000000000",
        "consumables": "3 years",
        "hyperdrive_rating": "4.0",
        "MGLT": "10",
        "starship_class": "Deep Space Mobile Battlestation"
    }
    
*/
