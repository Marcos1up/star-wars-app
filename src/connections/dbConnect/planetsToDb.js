const Planets = require("../../models/Planets");
const { allPlanetsData } = require("../data/PlanetsData");

async function planetsToDb() {
    try {
        const allPlanets = await Planets.find();
        if (allPlanets.length) {
            console.log(
                "Los planetas ya han sido cargadas en la base de datos con anterioridad"
            );
            return allPlanets;
        }

        const data = await allPlanetsData();
        if (!data || !data.length) {
            throw new Error("No se encontraron planetas en el archivo JSON");
        } else {
            //mapear toooodos los datos para guardarlos en la DB
            const planetsToSave = await Promise.all(
                data.map(async (e) => {
                    const jsonPlanets = new Planets({
                        name: e.name,
                        rotation_period: parseInt(e.rotation_period), //me aseguro de que llegue como numero
                        orbital_period: parseInt(e.orbital_period),
                        diameter: parseInt(e.diameter),
                        climate: e.climate,
                        gravity: e.gravity,
                        terrain: e.terrain,
                        surface_water: parseInt(e.surface_water),
                        population: e.population,
                    });

                    return jsonPlanets.save();
                })
            );

            return planetsToSave;
        }
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
        throw new Error(
            "No se pudieron cargar los planetas en la base de datos"
        );
    }
}

module.exports = { planetsToDb };

/* 

    name: e.name,
    rotation_period: parseInt(e.rotation_period),
    orbital_period: parseInt(e.orbital_period),
    diameter: parseInt(e.diameter),
    climate: e.climate,
    gravity: e.gravity,
    terrain: e.terrain,
    surface_water: parseInt(e.surface_water),
    population: parseInt(e.population),

*/
