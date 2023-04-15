const Starships = require("../../models/Starships");
const { allStarshipsData } = require("../data/starshipsData");

async function starshipsToDb() {
    try {
        const allStarships = await Starships.find();
        if (allStarships.length) {
            console.log(
                "las naves espaciales ya han sido cargadas en la base de datos con anterioridad"
            );
            return allStarships;
        }

        const data = await allStarshipsData();
        if (!data || !data.length) {
            throw new Error(
                "No se encontraron las naves espaciales en el archivo JSON"
            );
        } else {
            const starshipsToSave = await Promise.all(
                data.map(async (e) => {
                    const jsonStarships = new Starships({
                        name: e.name,
                        model: e.model,
                        manufacturer: e.manufacturer,
                        cost_in_credits: parseInt(e.cost_in_credits), //me aseguro de que se guarde como numero
                        length: parseInt(e.length),
                        max_atmosphering_speed: parseInt(
                            e.max_atmosphering_speed
                        ),
                        crew: e.crew,
                        passengers: e.passengers,
                        cargo_capacity: parseInt(e.cargo_capacity),
                        consumables: e.consumables,
                        hyperdrive_rating: parseInt(e.hyperdrive_rating),
                        MGLT: parseInt(e.MGLT),
                        starship_class: e.starship_class,
                    });

                    return jsonStarships.save();
                })
            );

            return starshipsToSave;
        }
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
        throw new Error(
            "No se pudieron cargar las naves espaciales en la base de datos"
        );
    }
}

module.exports = { starshipsToDb };

/* 
    name: e.name,
    model: e.model,
    manufacturer: e.manufacturer,
    cost_in_credits: parseInt(e.cost_in_credits),
    length: parseInt(e.length),
    max_atmosphering_speed: parseInt(e.max_atmosphering_speed),
    crew: e.crew,
    passengers: parseInt(e.passengers),
    cargo_capacity: parseInt(e.cargo_capacity),
    consumables: e.consumables,
    hyperdrive_rating: parseInt(e.hyperdrive_rating),
    MGLT: parseInt(e.MGLT),
    starship_class: e.starship_class,

*/
