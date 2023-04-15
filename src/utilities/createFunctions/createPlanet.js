const Planets = require("../../models/Planets");

async function createPlanet(data) {
    try {
        if (
            !data ||
            !data.name ||
            !data.rotation_period ||
            !data.orbital_period ||
            !data.diameter ||
            !data.climate ||
            !data.gravity ||
            !data.terrain ||
            !data.surface_water ||
            !data.population
        ) {
            console.log(
                "debe tener los valores 'name', 'rotation_period', 'orbital_period', 'diameter', climate, gravity, terrain, surface_water y 'population'"
            );
            throw new Error(
                "Falta información necesaria para crear el planeta. Verifique que la información ingresada sea correcta"
            );
        }

        const newPlanet = new Planets({
            ...data, //creo todos los valores ya validados
        });

        const savedPlanet = await newPlanet.save();
        return savedPlanet;
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
        throw new Error(
            "Ha ocurrido un error inesperado al crear el planeta. Por favor, intentelo de nuevo"
        );
    }
}

module.exports = { createPlanet };

/* 

    "name": "Tatooine",
    "rotation_period": 23,
    "orbital_period": 304,
    "diameter": 10465,
    "climate": "arid",
    "gravity": "1 standard",
    "terrain": "desert",
    "surface_water": 1,
    "population": "200000",

*/
