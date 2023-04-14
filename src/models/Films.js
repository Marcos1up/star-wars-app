const mongoose = require("mongoose");
const { Schema } = mongoose;

const FilmsSchema = new Schema(
    {
        episode_id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        opening_crawl: {
            type: String,
            required: true,
        },
        director: {
            type: String,
            required: true,
        },
        release_date: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

const Films = mongoose.model("Films", FilmsSchema);
module.exports = Films;
