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
            const updateObj = {};

            if (body.name) updateObj.name = body.name;
            if (body.rotation_period)
                updateObj.rotation_period = body.rotation_period;
            if (body.orbital_period)
                updateObj.orbital_period = body.orbital_period;
            if (body.diameter) updateObj.diameter = body.diameter;
            if (body.climate) updateObj.producer = body.climate;
            if (body.gravity) updateObj.gravity = body.gravity;
            if (body.terrain) updateObj.terrain = body.terrain;
            if (body.surface_water)
                updateObj.surface_water = body.surface_water;
            if (body.population) updateObj.population = body.population;

            const update = await Planets.updateOne(
                { _id: idPlanet },
                updateObj,
                {
                    new: true,
                }
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
