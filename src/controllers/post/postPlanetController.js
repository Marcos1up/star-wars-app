const helmet = require("helmet");
const {
    createPlanet,
} = require("../../utilities/createFunctions/createPlanet");

async function postPlanet(req, res, next) {
    const info = req.body;
    try {
        if (
            !info ||
            !info.name ||
            !info.rotation_period ||
            !info.orbital_period ||
            !info.diameter ||
            !info.climate ||
            !info.gravity ||
            !info.terrain ||
            !info.surface_water ||
            !info.population
        ) {
            return res.status(400).send({
                message:
                    "La información proporcionada es incorrecta. Verifique que todos los campos estén completos",
            });
        }

        const result = await createPlanet(info);

        res.status(201).send({
            message: "El planeta fue creado exitosamente!!!",
            result,
        });
    } catch (error) {
        console.error({ message: error.message });
        res.status(500).send({
            message:
                "Ha ocurrido un error INESPERADO al crear el planeta. Por favor, inténtelo de nuevo",
        });
    }
}

module.exports = { postPlanet, helmet };
