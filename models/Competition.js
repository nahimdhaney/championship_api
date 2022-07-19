const { Schema, model } = require("mongoose");

// Competition ("id",“name”, “code”, “areaName”,"areaId")

const CompetitionSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        areaName: {
            type: String,
            required: true,
        },
        areaId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Competition", CompetitionSchema);
