const Planets = require("../../models/Planets");
const { findPlanetById } = require("../readFunctions/findPlanetById");

async function updatePlanet(body, idPlanet) {
    try {
        const planet = await findPlanetById(idPlanet);

        if (!planet) {
            throw new Error(
                `Error. No se ha encontrado un planeta con el ID: ${idPlanet}, para modificar`
            );
        } else {
            const update = await Planets.updateOne(
                { _id: idPlanet },
                //esto puede ser completamente mejorado, pero no me funcionaba quizas podria modularizar este objeto (AYUDAME JEBUS)
                {
                    name: body.name ? body.name : planet.name,
                    rotation_period: body.rotation_period
                        ? body.rotation_period
                        : planet.rotation_period,
                    orbital_period: body.orbital_period
                        ? body.orbital_period
                        : planet.orbital_period,
                    diameter: body.diameter ? body.diameter : planet.diameter,
                    climate: body.climate ? body.climate : planet.climate,
                    gravity: body.gravity ? body.gravity : planet.gravity,
                    terrain: body.terrain ? body.terrain : planet.terrain,
                    surface_water: body.surface_water
                        ? body.surface_water
                        : planet.terrain,
                    population: body.population
                        ? body.population
                        : planet.population,
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
    updatePlanet,
};

/* 

{
		"name": "PRUEBA 1",
		"rotation_period": 88888,
		"orbital_period": 88888,
		"diameter": 88888,
		"climate": "cold",
		"gravity": "1 standard",
		"terrain": "woods, que se yo",
		"surface_water": 88888,
		"population": "200000"
	}

*/
