const { planetsToDb } = require("../../connections/dbConnect/planetsToDb");
const Planets = require("../../models/Planets");

async function allPlanets() {
    try {
        const planetsInDb = await planetsToDb();

        if (planetsInDb.length === 0) {
            throw new Error("No se encontraron planetas en la base de datos");
        }

        const allPlanets = await Planets.find();

        return allPlanets;
    } catch (error) {
        console.error(`Error al obtener todas los planetas: ${error.message}`);
        throw new Error(
            "Ha ocurrido un error inesperado al obtener TODOS los planetas"
        );
    }
}

module.exports = { allPlanets };
