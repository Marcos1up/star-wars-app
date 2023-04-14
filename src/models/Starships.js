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
            type: Number, //ojo que hay que cambiarlo a numero
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
