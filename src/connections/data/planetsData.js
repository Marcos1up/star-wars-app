const data = require("../jsonData/planets.json");

async function allPlanetsData() {
    try {
        let allPlanets = data.map((e) => {
            return {
                name: e.name,
                rotation_period: parseInt(e.rotation_period), //conviertiendolo en número
                orbital_period: parseInt(e.orbital_period),
                diameter: parseInt(e.diameter),
                climate: e.climate,
                gravity: e.gravity,
                terrain: e.terrain,
                surface_water: parseInt(e.surface_water),
                population: parseInt(e.population),
            };
        });

        if (!allPlanets.length) {
            throw new Error(
                "El archivo JSON está vacío o no contiene planetas"
            );
        }

        return allPlanets;
    } catch (error) {
        console.error("Error al obtener los planetas:", error.message);
        throw new Error("No se pudieron obtener los planetas");
    }
}

module.exports = { allPlanetsData };

/* 
    "name": "Tatooine",
    "rotation_period": 23,
    "orbital_period": 304,
    "diameter": 10465,
    "climate": "arid",
    "gravity": "1 standard",
    "terrain": "desert",
    "surface_water": 1,
    "population": 200000

*/
