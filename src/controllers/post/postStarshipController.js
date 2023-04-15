const helmet = require("helmet");
const {
    createStarship,
} = require("../../utilities/createFunctions/createStarship");

async function postStarship(req, res) {
    const info = req.body;
    try {
        if (
            !info ||
            !info.name ||
            !info.model ||
            !info.manufacturer ||
            !info.cost_in_credits ||
            !info.length ||
            !info.max_atmosphering_speed ||
            !info.crew ||
            !info.passengers ||
            !info.cargo_capacity ||
            !info.consumables ||
            !info.hyperdrive_rating ||
            !info.MGLT ||
            !info.starship_class
        ) {
            return res.status(400).send({
                message:
                    "La información proporcionada es incorrecta. Verifique que todos los campos estén completos",
            });
        }

        const result = await createStarship(info);

        console.log("La nave fue creada exitosamente!!!");

        res.status(201).send(result);
    } catch (error) {
        console.error({ message: error.message });
        res.status(500).send({
            message: "Ha ocurrido un error INESPERADO al crear la nave",
        });
    }
}

module.exports = { postStarship, helmet };
