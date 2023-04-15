const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlanetsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        rotation_period: {
            type: Number, //ojo hay que cambiarlo a numero
            required: true,
        },
        orbital_period: {
            type: Number, //ojo hay que cambiarlo a numero
            required: true,
        },
        diameter: {
            type: Number, //ojo hay que cambiarlo a numero
            required: true,
        },
        climate: {
            type: String,
            required: true,
        },
        gravity: {
            type: String,
            required: true,
        },
        terrain: {
            type: String,
            required: true,
        },
        surface_water: {
            type: Number, //ojo hay que cambiarlo a numero
            required: true,
        },
        population: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Planet = mongoose.model("Planet", PlanetsSchema);
module.exports = Planet;

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
