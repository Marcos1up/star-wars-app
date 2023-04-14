const mongoose = require("mongoose");
const { Schema } = mongoose;

const StarshipSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        manufacturer: {
            type: String,
            required: true,
        },
        cost_in_credits: {
            type: Number, //ojo que hay que cambiarlo a numero
            required: true,
        },
        length: {
            type: Number, //ojo que hay que cambiarlo a numero
            required: true,
        },
        max_atmosphering_speed: {
            type: Number, //ojo que hay que cambiarlo a numero
            required: true,
        },
        crew: {
            type: String,
            required: true,
        },
        passengers: {
            type: Number, //ojo que hay que cambiarlo a numero
            required: true,
        },
        cargo_capacity: {
            type: Number, //ojo que hay que cambiarlo a numero
            required: true,
        },
        consumables: {
            type: String,
            required: true,
        },
        hyperdrive_rating: {
            type: Number, //ojo que hay que cambiarlo a numero
            required: true,
        },
        MGLT: {
            type: Number, //ojo que hay que cambiarlo a numero
            required: true,
        },
        starship_class: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Starship = mongoose.model("Starship", StarshipSchema);
module.exports = Starship;

/*

        "name": "CR90 corvette",
        "model": "CR90 corvette",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": 3500000,
        "length": 150,
        "max_atmosphering_speed": 950,
        "crew": "30-165",
        "passengers": 600,
        "cargo_capacity": 3000000,
        "consumables": "1 year",
        "hyperdrive_rating": 2.0,
        "MGLT": 60,
        "starship_class": "corvette",

*/
